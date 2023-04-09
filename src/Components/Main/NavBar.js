import React from 'react'
import SearchBar from '../UI/SearchBar'
import classes from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={classes.nav}>
    <h1>خالد بيه </h1>
    <SearchBar/>
    </div>
  )
}

export default NavBar