import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import type { ApolloError } from '@apollo/client'
import { Severity } from '@sentry/react'

import history from './history'

import { ENVIRONMENT, RELEASE_VERSION, SENTRY_DSN } from '../constants'

export const createMonitor = () => {
  if (SENTRY_DSN && ENVIRONMENT !== 'local') {
    Sentry.init({
      dsn: SENTRY_DSN,
      autoSessionTracking: true,
      integrations: [
        new Integrations.BrowserTracing({
          routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
        }),
      ],
      release: RELEASE_VERSION,
      sampleRate: 1,
      environment: ENVIRONMENT,
      tracesSampleRate: 1,
      debug: false, // set to true to track the performance
      attachStacktrace: false, // set to true to track the performance
    })
  }
}

export interface Order {
  orderId: string
  storeId: number
}
export type MessageType = string | Error | ApolloError
export type SentryPosting = {
  message: MessageType
  loggingLevel?: Severity | undefined
}
export const sendInfoMessageForMonitoring = (message: string) => {
  sendMessageForMonitoring({ message, loggingLevel: Sentry.Severity.Info })
}
export const sendWarningMessageForMonitoring = (message: string) => {
  sendMessageForMonitoring({ message, loggingLevel: Sentry.Severity.Warning })
}
export const sendErrorMessageForMonitoring = (error: Error | string) => {
  Sentry.captureException(error)
}
export const sendMessageForMonitoring = ({
  message,
  loggingLevel = Sentry.Severity.Error,
}: SentryPosting) => {
  // DO NOT CAPTURE Message if the environment is local environment
  if (ENVIRONMENT !== 'local') {
    if (typeof message === 'string') {
      Sentry.captureMessage(message, loggingLevel)
    } else {
      const data = message as ApolloError
      if (data.graphQLErrors || data.networkError) {
        if (data.networkError) {
          Sentry.captureMessage(data.message, Sentry.Severity.Critical) // network error is a critical error
        } else if (data.graphQLErrors) {
          // show graphql error as warning error since it needs further investigation
          Sentry.captureMessage(data.message, Sentry.Severity.Warning)
        } else {
          Sentry.captureException(data)
        }
      } else {
        Sentry.captureException(message)
      }
    }
  }
}
