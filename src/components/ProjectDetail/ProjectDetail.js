import React from 'react';

import classes from './HeaderRectangle.css'

const headerRectangle = ( props ) => {

  return (
    <div className={classes.Rectangle}>
      {props.title}
    </div>
    )
}

export default headerRectangle;
