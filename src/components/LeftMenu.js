import React from "react";
import "./LeftMenu.css";
import { FaItunesNote, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import Menu from "./Menu";
import MenuList from "./MenuList";
import MenuPlayList from "./MenuPlayList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaItunesNote />
        </i>
        <h2>MusicMingle</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <Menu title={"Menu"} menuObject={MenuList} />
      <MenuPlayList />
    </div>
  );
}

export default LeftMenu;
