import React from 'react';

import classes from './NavRectangle.css'

const navRectangle = ( props ) => {

  return (
    <div className={classes.Rectangle}>
      {props.title}
    </div>
    )
}

export default navRectangle;
