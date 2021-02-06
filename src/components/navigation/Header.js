import React from 'react'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
    return (
      <div className="main_header">
        <div>
          <h1>Ocean Flight</h1>
        </div>
        <Nav className="navigation">
          <Nav.Item className="navigation_item">
            <Nav.Link eventKey="1" href="#/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navigation_item">
            <Nav.Link eventKey="1" href="#/Flight">
              Flight
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navigation_item">
            <Nav.Link eventKey="1" href="#/Hotel">
              Hotel
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            className="navigation_item"
            title="Extra"
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.1">Get More Details</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="contact_expert">
          <span>Contact our Travel Experts on</span>
          <br />
          <a href="tel:+2348038230751">+234 803 823 0751</a>
          <br />
          <span>100% protected Holidays</span>
        </div>
      </div>
    );
}

export default Header
