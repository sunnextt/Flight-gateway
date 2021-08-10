import React from 'react'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import red from '@material-ui/core/colors/red';
import Drawer from '@material-ui/core/Drawer';





const Header = () => {

  const [open, setOpen] = useState(falsee)
  const theme = useTheme();
  const isMobile = useMediaQuery('(min-width:800px)');

  const openDraver = () => {
    setOpen(true)
  }


    return (
      <div className="main_header">
        <Drawer anchor={anchor} open={open} onClose={toggleDrawer(anchor, false)}></Drawer>
        <div>
          <h1>Ocean Flight</h1>
        </div>
        {!isMobile ? 
        <a href="#" onClick={openDraver} >
          <MenuIcon style={{ fontSize: 40 , color: red[50] }}/>
        </a>: 
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
       
        }
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
