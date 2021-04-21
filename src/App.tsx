import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import { ApolloProvider } from '@apollo/client'

import { ThemeProvider } from './contexts'
import { PageLayout } from './layouts'
import { CssBaseline } from './themes'
import Routes from './routers/Routes'
import { client } from './api'
//import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <CssBaseline />
          <PageLayout>
            <Routes />
          </PageLayout>
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default Sentry.withProfiler(App)
