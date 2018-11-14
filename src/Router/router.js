import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import ProjectView from '../containers/ProjectView/ProjectView'
import ProjectDetail from '../components/ProjectDetail/ProjectDetail'
import Layout from '../components/Layout/Layout'

const router = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ProjectView}/>
        <Route exact path='/detail/:id' component={ProjectDetail}/>
      </Switch>
    </BrowserRouter>
  </Layout>
)

export default router;
