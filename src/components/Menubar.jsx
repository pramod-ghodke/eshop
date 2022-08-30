import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../Assets/logo.png';

const Menubar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home"><img src={logo}  width={30} height={30} alt="30x30" className='img-fluid me-2'/>E-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
           <Nav.Link className="navs me-md-3">Men</Nav.Link>
           <Nav.Link className="navs  me-md-3">Women</Nav.Link>
           <Nav.Link className="navs">Kids</Nav.Link>
        </Nav>
        <Nav className="">
           <Nav.Link className="navs me-md-3"><Icon.Search className='me-3'/> <Icon.Cart className='me-3'/> <Icon.Person/></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menubar;

