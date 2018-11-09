import React, { Component } from 'react'

import Layout from './components/Layout/Layout'
import ProjectView from './containers/ProjectView/ProjectView'

import classes from './App.css'

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <Layout>
          <ProjectView/>
        </Layout>
      </div>

    )
  }
}

export default App
