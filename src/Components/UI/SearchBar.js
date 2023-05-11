import React from 'react'
import classes from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const SearchBar = ({txt, onChange}) => {
  return (
    <div className={classes.search}>
        <label htmlFor='s'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input type='search' id='s' placeholder={txt} onChange={(e)=>onChange(e)}/>
    </div>
  )
}

export default SearchBar