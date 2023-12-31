import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./CustomNavbar.css"

function CustomNavbar() {
  
  return (
    <Navbar className="custom-navbar" fixed="top" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Mayank Yadav</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Project 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                See All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;