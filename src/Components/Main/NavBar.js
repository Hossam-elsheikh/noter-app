import React from "react";
import SearchBar from "../UI/SearchBar";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { showSideBar } from "./SideBarSlice";
const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
      <div className={classes.bars}>
        <FontAwesomeIcon icon={faBars} onClick={()=> dispatch(showSideBar())}/>
      </div>
      <h1>Noter</h1>
      </div>
      <SearchBar txt="Search Notes" />
    </div>
  );
};

export default NavBar;
