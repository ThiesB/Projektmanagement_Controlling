import React from  'react'
import { FaSearch } from 'react-icons/fa';

import classes from './Searchbar.css';

const searchbar = (props) => {

  return (
    <div className={classes.UnderlineSearchbar}>
      <input className={classes.Searchbar} type="text" placeholder={"Projekte durchsuchen"}/>
      <FaSearch className={classes.Icon}/>
    </div>

  )

};

export default searchbar;
