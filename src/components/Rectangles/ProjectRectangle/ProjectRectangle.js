import React from 'react';

import classes from './ProjectRectangle.css'

const projectRectangle = ( props ) => {

  return (
    <div
      className={classes.Rectangle
      + ' ' + classes[props.styles]}
    >
      <table className={classes.Table}>
        <tbody>
          <tr>
            <td><h3>Start: {props.startDate}</h3></td>
            <td><h3>Ende: {props.endDate}</h3></td>
          </tr>
        </tbody>


      </table>

      <h1>{props.title}</h1>
      <h3>{props.balance} €</h3>
    </div>
    )
}

export default projectRectangle;
