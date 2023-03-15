import React from "react";
import "../styles/componentStyles/header.css";
import LOGO from "../util/media/AMZused_LOGO.png";
import { AccountActionBar } from "./AccountActionBar";

export const Header = () => {
  return (
    <div id="headerContainer">
      <img id="brandLOGO" alt="AMZ-Used" src={LOGO} />
    </div>
  );
};
