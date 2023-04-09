import { faCalendar, faCircleCheck, faHouse, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './SideBar.module.css'
import SearchBar from '../UI/SearchBar'
const SideBar = () => {

  const tagsList =[{name:'python', notesCount: 20},{name:'cources', notesCount: 110},{name:'internships', notesCount: 8}]
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <NavLink to='/'>
            <div>
              <FontAwesomeIcon icon={faHouse}/>
            </div>
            <h3>Noter</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to='tasker'>
            <div>
              <FontAwesomeIcon icon={faCircleCheck}/>
            </div>
            <h3>Tasker</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to='reminder'>
            <div>
              <FontAwesomeIcon icon={faCalendar}/>
            </div>
            <h3>Reminder</h3>
          </NavLink>
        </li>
      </ul>
      <p>Tags</p>

      {/* th below list will be mapped from the store later */}
      <ul className={classes.tags}>
      {tagsList.map(e => <li>
        <div className={classes.tagicon}>
          <FontAwesomeIcon icon={faTag}/>
        </div>
        {e.name}
      </li>)}
      <SearchBar txt='Search Tags' />

      </ul>
    </div>
  )
}

export default SideBar