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
import { useDispatch } from "react-redux";
import { setFilter } from "../Noter/notesSlice";
import { clearFilter } from "../Noter/notesSlice";
import { showSideBar } from "./SideBarSlice";
const SideBar = () => {
  const tagsList = useSelector((state) => state.notes.tags);
  const sidebar = useSelector((state) => state.sideBar);
  const filter = useSelector((state) => state.notes.filter);
  const dispatch = useDispatch();
  return (
    <div
      className={classes.sidebar}
      style={sidebar.isShown ? { display: "flex" } : null}
    >
      <ul>
        <li onClick={() => dispatch(showSideBar())}>
          <NavLink to="/">
            <div>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <h3>Noter</h3>
          </NavLink>
        </li>
        <li onClick={() => dispatch(showSideBar())}>
          <NavLink to="tasker">
            <div>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <h3>Tasker</h3>
          </NavLink>
        </li>
        <li onClick={() => dispatch(showSideBar())}>
          <NavLink to="reminder">
            <div>
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <h3>Reminder</h3>
          </NavLink>
        </li>
      </ul>
      <p>Tags </p>

      <ul className={classes.tags}>
        {filter.active && (
          <button
            className={classes.clear}
            onClick={() => {
              dispatch(clearFilter());
              dispatch(showSideBar());
            }}
          >
            Clear Filter
          </button>
        )}

        {tagsList.map((e) => (
          <li
            key={tagsList.indexOf(e)}
            onClick={() => {
              dispatch(setFilter(e.title));
              dispatch(showSideBar());
            }}
          >
            <div className={classes.tag}>
              <div className={classes.tagicon}>
                <FontAwesomeIcon icon={faTag} />
              </div>

              {e.title}
            </div>
            <span>{e.count} </span>
          </li>
        ))}
        {/* <SearchBar txt="Search Tags" /> */}
      </ul>
    </div>
  );
};

export default SideBar;
