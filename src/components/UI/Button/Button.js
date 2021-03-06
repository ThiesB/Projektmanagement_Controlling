import React from  'react'

import classes from './Button.css';

const button = (props) => {

  return (
    <button className={classes[props.btnType]}>
      {props.children}
    </button>
  )

};

export default button;
