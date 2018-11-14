import React, { Component } from 'react'

//ext Bib
import { Link } from 'react-router-dom'

import ReactAux from '../../hoc/ReactAux'
import HeaderRectangle from '../../components/Rectangles/HeaderRectangle/HeaderRectangle'
import NavRectangle from '../../components/Rectangles/NavRectangle/NavRectangle'

import classes from './ProjectDetail.css'

class projectDetail extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  componentDidMount () {
    this.fetchSingleProjectFromServer()
  }

  fetchSingleProjectFromServer () {
    fetch(`http://localhost:3000/Projects/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({project: json});
        console.log(this.state)
      })
  }



  render () {
    if(!this.state.project) {
      return null;
    }

    return (
      <ReactAux>
        <h1 className={classes.HeaderRight}>Projektdetailsicht</h1>
        <div className={classes.Navigationbar}>
          <Link
            to={{pathname: `/`}}
            className={classes.Link}
          >
            <NavRectangle
              title="PROJEKTE"
            />
          </Link>
          <NavRectangle
            title={this.state.project.title}
          />
        </div>


        <HeaderRectangle
          title={"Detailsicht: " + this.state.project.title}
        />

        <div className={classes.Content}>

        </div>
      </ReactAux>
    )

  }


}

export default projectDetail;
