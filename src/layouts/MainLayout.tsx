import React, { Suspense } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { ErrorBoundary as SentryErrorBoundary } from '@sentry/react'
import { ErrorBoundary as CommonErrorBoundary } from 'react-error-boundary'

import { Body } from '../components'
import { LayoutLoading, ErrorBoundaryFallback } from '../components/common'
import { ENVIRONMENT } from '../constants'
interface Props {
  children: React.ReactNode
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'auto',
  },
  login: {
    display: 'flex',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    overflowX: 'auto',
  },
}))

export default function MainLayout({ children }: Props) {
  const classes = useStyles()
  /**
   * Warning: Suspense is still an experimental feature
   * https://reactjs.org/docs/concurrent-mode-suspense.html
   *
   * Avoid using ErrorBoundary from Sentry when environment is local
   * Use react-error-boundary in local environment to avoid using class components
   */

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid className={classes.wrapper} item xs={12} md={12} lg={12}>
            {ENVIRONMENT !== 'local' && (
              <SentryErrorBoundary fallback={ErrorBoundaryFallback}>
                <Suspense fallback={<LayoutLoading />}>
                  <Body>{children}</Body>
                </Suspense>
              </SentryErrorBoundary>
            )}
            {ENVIRONMENT === 'local' && (
              <CommonErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                <Suspense fallback={<LayoutLoading />}>
                  <Body>{children}</Body>
                </Suspense>
              </CommonErrorBoundary>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  )
}
