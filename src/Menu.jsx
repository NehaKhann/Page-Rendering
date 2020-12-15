import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <NavLink exact activeClassName="active_class" to="/">
        About Us
      </NavLink>
      <br />
      <NavLink activeClassName="active_class" to="/contact">
        Contact Us
      </NavLink>
      <br />
      <NavLink activeClassName="active_class" to="/user/Neha/Khan">
        User
      </NavLink>
    </div>
  );
};
export default Menu;
