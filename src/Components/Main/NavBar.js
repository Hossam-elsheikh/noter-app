import React from "react";
import SearchBar from "../UI/SearchBar";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { showSideBar } from "./SideBarSlice";
import { searchFilter } from "../Noter/notesSlice";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  console.log(location.pathname)
  const filterHandler=(e)=>{
    const val = e.target.value
    dispatch(searchFilter({val}))
  }
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
      <div className={classes.bars}>
        <FontAwesomeIcon icon={faBars} onClick={()=> dispatch(showSideBar())}/>
      </div>
      <h1>Noter</h1>
      </div>
      {location.pathname === '/' && <SearchBar txt="Search Notes" onChange={filterHandler}/>}
    </div>
  );
};

export default NavBar;
