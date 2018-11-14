import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import classes from './ProjectView.css'

import ReactAux from '../../hoc/ReactAux'
import HeaderRectangle from '../../components/Rectangles/HeaderRectangle/HeaderRectangle'
import NavRectangle from '../../components/Rectangles/NavRectangle/NavRectangle'
import ProjectRectangle from '../../components/Rectangles/ProjectRectangle/ProjectRectangle'
import PlusButton from '../../components/UI/Button/Button'
import Searchbar from '../../components/UI/Searchbar/Searchbar'

class projectView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      projects: []
    };

  }

  componentDidMount() {
    this.fetchProjectsFromServer()
  }

  fetchProjectsFromServer() {
    fetch("http://localhost:3000/Projects")
      .then(response => response.json())
      .then(json => {
        this.setState({ projects: json});
      })
  }



  loadProjects = (projects) => {
    return projects.map(project => {
      const bgColor = project.balance >= 0 ? 'green' : 'red'
      const titleNoSpace= project.title.replace(' ', '_')

      return (
        <Link
          key={project.id}
          to={{pathname: `/detail/${project.id}`}}
          className={classes.Link}
        >
          <ProjectRectangle
            key={project.id}
            title={project.title}
            styles={bgColor}
            balance={project.balance}
            startDate={project.startDate}
            endDate={project.endDate}
          />
        </Link>
      )
    })
  }

  render () {
    const completedProjects = this.state.projects.filter(project => project.completed)
    const uncompletedProjects = this.state.projects.filter(project => !project.completed)

    return (
      <ReactAux>
        <h1 className={classes.HeaderRight}>Projektansicht</h1>
        <Link
          to={{pathname: `/`}}
          className={classes.Link}
        >
          <NavRectangle
            title="PROJEKTE"
          />
        </Link>
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
