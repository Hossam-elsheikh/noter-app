import React from 'react'
import classes from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const SearchBar = () => {
  return (
    <div className={classes.search}>
        <label htmlFor='s'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input type='search' id='s' placeholder='Search notes'/>
    </div>
  )
}

export default SearchBar