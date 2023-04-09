import React from 'react'
import classes from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const SearchBar = ({txt}) => {
  return (
    <div className={classes.search}>
        <label htmlFor='s'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input type='search' id='s' placeholder={txt}/>
    </div>
  )
}

export default SearchBar