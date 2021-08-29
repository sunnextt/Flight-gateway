import React, {useState} from 'react'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import red from '@material-ui/core/colors/red';
import Drawer from '@material-ui/core/Drawer';
import { Button, Link } from '@material-ui/core';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import lightBlue from '@material-ui/core/colors/lightBlue';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue["A700"],
    },
  },
});



const Header = () => {

  const [open, setOpen] = useState(false)
  // const [close, setClose] = useState("")
  const isMobile = useMediaQuery('(min-width:800px)');

  const openDraver = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const onClose = () => false

    return (
      <div className="main_header">
        <React.Fragment >
          <MuiThemeProvider theme={theme}>
          <Drawer anchor="top" open={open} onClose={onClose}>
            <Button variant="contained" color="primary">Home</Button>
            <Button variant="contained" color="primary">Flight</Button>
            <Button variant="contained" color="primary">Blogs</Button>
            <Button variant="contained" color="primary">Contact</Button>
            <Button variant="contained" color="primary"onClick={handleClose}>X</Button>
          </Drawer>
          </MuiThemeProvider>
        </React.Fragment>
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
