import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink exact to="/" className="item">
        Streamer
      </NavLink>
      <div className="right menu">
        <NavLink to="/" className="item">
          All Stream
        </NavLink>
        <GoogleAuth />
      </div>
    </div>
  );
};
export default Header;
