import React, { Component } from 'react'

import classes from './ProjectView.css'

import ReactAux from '../../hoc/ReactAux'
import HeaderRectangle from '../../components/Rectangles/HeaderRectangle/HeaderRectangle'
import NavRectangle from '../../components/Rectangles/NavRectangle/NavRectangle'
import ProjectRectangle from '../../components/Rectangles/ProjectRectangle/ProjectRectangle'
import PlusButton from '../../components/UI/Button/Button'
import Searchbar from '../../components/UI/Searchbar/Searchbar'

class projectView extends Component {

  state = {
    projects: [
      {
        title: 'Projekt 1',
        balance: -2000,
        completed: true,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 2',
        balance: 2000,
        completed: true,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 3',
        balance: 4000,
        completed: true,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 4',
        balance: -4000,
        completed: false,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 5',
        balance: 4000,
        completed: true,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 6',
        balance: 4000,
        completed: true,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 7',
        balance: 4000,
        completed: false,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 8',
        balance: -4000,
        completed: false,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      },
      {
        title: 'Projekt 9',
        balance: 4000,
        completed: false,
        startDate: '2018.02.03',
        endDate: '2018.05.23'
      }
    ]
  }

  loadProjects = (projects) => {
    return projects.map((project, i) => {
      const bgColor = project.balance >= 0 ? 'green' : 'red'
      return (
        <ProjectRectangle
          key={i}
          title={project.title}
          styles={bgColor}
          balance={project.balance}
          startDate={project.startDate}
          endDate={project.endDate}
        />
      )
    })
  }

  render () {
    const completedProjects = this.state.projects.filter(project => project.completed)
    const uncompletedProjects = this.state.projects.filter(project => !project.completed)

    return (
      <ReactAux>
        <h1 className={classes.HeaderRight}>Projektansicht</h1>
        <NavRectangle
          title="PROJEKTE"
        />
        <HeaderRectangle
          title="Manage deine Projekte"
        />
        <div className={classes.Content}>
          <div className={classes.BorderScroll}>

            <table className={classes.Table}>
              <tbody>
              <tr>
                <td><h2>Offene Projekte</h2></td>
                <td className={classes.ContentRight}><Searchbar/></td>
              </tr>
              </tbody>
            </table>

            <div className={classes.Grid + ' ' + classes.Scrollable}>
              {this.loadProjects(completedProjects)}
            </div>
          </div>

          <div className={classes.BorderScroll}>

            <table className={classes.Table}>
              <tbody>
              <tr>
                <td><h2>Abgeschlossene Projekte</h2></td>
                <td className={classes.ContentRight}><Searchbar/></td>
              </tr>
              </tbody>
            </table>

            <div className={classes.Grid + ' ' + classes.Scrollable}>
              {this.loadProjects(uncompletedProjects)}
            </div>
          </div>

          <div className={classes.ContentRight}>
            <PlusButton
              btnType='PlusButton'
            />
          </div>
        </div>
      </ReactAux>
    )
  }
}

export default projectView
