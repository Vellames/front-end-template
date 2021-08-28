// eslint-disable-next-line no-use-before-define
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import frontEndRoutes from './config/front-end-routes'

// Pages
import LazyLoaderPage from './pages/_lazyLoader'
const Page404 = React.lazy(() => import('./pages/_404'))
const IndexPage = React.lazy(() => import('./pages/index'))

export const Routes: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={LazyLoaderPage}>
        <Switch>
          <Route exact path={frontEndRoutes.INDEX} component={IndexPage} />
          <Route path="*" component={Page404}/>
        </Switch>
      </React.Suspense>
    </Router>
  )
}
