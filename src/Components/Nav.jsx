import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          {/* This creates the logo on the header and title of company */}
            <Navbar.Brand href="#Home">
              <img
                alt="T & K Bus Services Logo"
                src="/logo.png"
                width="100"
                height="100"
                className="d-inline-block align-center"
              />{' '}
              T & K Bus Services
            </Navbar.Brand>

          {/* This creates a responsive navbar/nav that allows the navbar to expand and collapse making the three line thingy*/}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

          {/* This allows for the links to be put to the right (end) */}
          {/* ms-auto MEANS margin-LEFT (think of a lot of padding on the left to let it be on the end), me-auto MEANS margin-RIGHT (makes it closer to the title*/}
            <Nav className='ms-auto'>
                  <Nav.Link href="#Reviews">Reviews</Nav.Link>
                  <Nav.Link href="#Pricing">Pricing </Nav.Link>
                  <Nav.Link href="#Careers">Careers</Nav.Link>
                  <Nav.Link href="#AboutUs">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>  
  )
}

export default NavBar;