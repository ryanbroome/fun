import React, { useContext } from "react";

import { NavLink, Link } from "react-router-dom";

import { Nav, NavItem, Navbar } from "reactstrap";
// import UserContext from "../auth/UserContext";

/**NavHead Component to render a Navbar, different Items rendered based on if logged in user present
 *
 * **/

const NavHead = () => {
  //   const { token, userDetail } = useContext(UserContext);

  //   function isLoggedIn() {
  return (
    <Navbar>
      <Nav
        justified
        pills
        expand="lg"
        className="fixed-top bg-dark">
        <NavItem>
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="active">
            Home Page
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/portfolio"
            className="nav-link"
            activeClassName="active">
            Portfolio
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/htmltagsdemo"
            className="nav-link"
            activeClassName="active">
            HtmlTagsDemo
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/morehtmltagsdemo"
            className="nav-link"
            activeClassName="active">
            MoreHtmlTagsDemo
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/demoForm"
            className="nav-link"
            activeClassName="active">
            demoForm
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/weather"
            className="nav-link"
            activeClassName="active">
            Weather
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavHead;
