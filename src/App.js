import React, { Component } from 'react'

import Layout from './components/Layout/Layout'
import Router from './Router/router'

import classes from './App.css'

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <Layout>
          <Router/>
        </Layout>
      </div>

    )
  }
}

export default App
