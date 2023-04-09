import React from 'react'
import SearchBar from '../UI/SearchBar'
import classes from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={classes.nav}>
    <h1>Noter</h1>
    <SearchBar txt='Search Notes'/>
    </div>
  )
}

export default NavBar