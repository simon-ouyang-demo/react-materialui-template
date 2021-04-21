import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { RouterProps } from '../types'
import { ErrorPage, WelcomePage } from '../pages'

export default function MainRouter({ match: { url } }: RouterProps) {
  return (
    <Switch>
      <Route path={url} exact>
        <WelcomePage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  )
}
