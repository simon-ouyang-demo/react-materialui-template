export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'local'
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/graphql/'
export const REGION = process.env.REACT_APP_AWS_REGION
export const USER_POOL_ID = process.env.REACT_APP_AWS_USER_POOL_ID
export const APP_CLIENT_ID = process.env.REACT_APP_AWS_APP_CLIENT_ID
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN || 'emtpy url'
export const LOG_LEVEL = process.env.REACT_APP_LOG_LEVEL || 'error'
export const RELEASE_VERSION = process.env.REACT_APP_RELEASE_VERSION
