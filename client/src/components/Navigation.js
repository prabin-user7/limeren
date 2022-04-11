
import React from "react";

import {Nav,Navbar,Container,Button,Form,FormControl} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';


function Navigation(){
return(
  <>
   <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><img className='logo' src='img/logo.png'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="links">
        <Nav
          className="me-auto "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Categories</Nav.Link>
         
          <Nav.Link href="#action3" >
            Books
          </Nav.Link>
          <Nav.Link href="#" >
           Authors
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search & browse books . ."
            id="search-input"
            aria-label="Search"
            autoComplete="off"
            
          />
          <Button  variant="outline-none" id="Search"><Search className="Search-Btn" /></Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
     </>)
}
export default Navigation;