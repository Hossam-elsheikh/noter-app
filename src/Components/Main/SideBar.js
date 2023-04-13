import {
  faCalendar,
  faCircleCheck,
  faHouse,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
import SearchBar from "../UI/SearchBar";
import { useSelector } from "react-redux";
const SideBar = () => {
  const tagsList = useSelector((state) => state.notes.tags);

  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <NavLink to="/">
            <div>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <h3>Noter</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="tasker">
            <div>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <h3>Tasker</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="reminder">
            <div>
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <h3>Reminder</h3>
          </NavLink>
        </li>
      </ul>
      <p>Tags</p>

      {/* th below list will be mapped from the store later */}
      <ul className={classes.tags}>
        {tagsList.map((e) => (
          <li key={tagsList.indexOf(e)}>
            <div className={classes.tagicon}>
              <FontAwesomeIcon icon={faTag} />
            </div>
            {e.title}
            <span>{e.count} </span>
          </li>
        ))}
        <SearchBar txt="Search Tags" />
      </ul>
    </div>
  );
};

export default SideBar;
