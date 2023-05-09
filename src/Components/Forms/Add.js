import React, { useState } from "react";
import classes from "./Add.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faCheckSquare,
  faNoteSticky,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setActiveForm } from "./formSlice";
const Add = (props) => {
  const [showIcons, setShowIcons] = useState(false);
  const dispatch = useDispatch()
  const icons = [
    { name: "note", icon: faNoteSticky },
    { name: "task", icon: faCheckSquare },
    { name: "event", icon: faCalendar },
    { name: "reminder", icon: faBell },
  ];
 
  return (
    <div className={classes.add}>
      <div className={classes.list}>
        <ul>
          {showIcons &&
            icons.map((i) => (
              <li key={Math.round(Math.random()*234)}>
                <FontAwesomeIcon
                  onClick={() => {
                    setShowIcons(!showIcons);
                    props.onShowModal();
                    dispatch(setActiveForm(i.name))
                  }}
                  className={classes.icon}
                  icon={i.icon}
                  size="lg"
                />
              </li>
            ))}

          <li>
            <FontAwesomeIcon
              onClick={() => {
                setShowIcons(!showIcons);
              }}
              className={classes.plus}
              icon={faPlusCircle}
              size="2xl"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Add;
