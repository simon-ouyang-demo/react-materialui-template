import React, { Suspense } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { LayoutLoading, MainLayout } from '../layouts'

const routers = {
  '/': React.lazy(() => import('./MainRouter')),
}

const FallbackComponent = () => {
  return (
    <MainLayout>
      <LayoutLoading />
    </MainLayout>
  )
}

const Routes = () => {
  const location = useLocation()
  /**
   * Warning: Suspense is still an experimental feature
   * https://reactjs.org/docs/concurrent-mode-suspense.html
   */
  return (
    <>
      <Suspense fallback={<FallbackComponent />}>
        <Switch location={location}>
          {Object.entries(routers).map(([path, router]) => (
            <Route key={path} path={path} component={router} />
          ))}
        </Switch>
      </Suspense>
    </>
  )
}

export default Routes
