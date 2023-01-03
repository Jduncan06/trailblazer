import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/CampaignsPage"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa fa-list fa-lg" /> Campaigns
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/GuidePage"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa fa-info fa-lg" /> Get Started
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/AccountPage"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa fa-address-card fa-lg" /> Account
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
