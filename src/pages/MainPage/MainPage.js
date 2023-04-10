import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/Main/NavBar'
import SideBar from '../../Components/Main/SideBar'
import classes from './Main.module.css'
const MainPage = () => {
  return (
    <div className={classes.main}>
      <NavBar />
      <div className={classes.content}>
        <SideBar />
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainPage