import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showSideBar } from "../Main/SideBarSlice";
const Backdrop = () => {
  const showBackDrop = useSelector((state) => state.sideBar);
  const dispatch = useDispatch()
  return (
    <div
    onClick={()=> dispatch(showSideBar())}
      className='backdrop'
      style={showBackDrop.isShown ? { display: "block" } : { display: "none" }}
    ></div>
  );
};

export default Backdrop;
