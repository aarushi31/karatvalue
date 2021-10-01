import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,NavDropdown,Container} from 'react-bootstrap'
import './Navbar.css'

function Navigation() {
    return ( 
      <Navbar collapseOnSelect expand="lg" bg="#FFFCF2" variant="light" style={{padding:'20px 0',background:'#FFFCF2'}} fixed="top">
      <Container>
      <Navbar.Brand href="#home"><b>KARAT</b><br/>VALUE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Form>
            <FormControl placeholder="Search" style={{width:"30vw",borderRadius:'25px'}}/>
          </Form>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Products</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Cart
          </Nav.Link>
          <Button variant="dark" style={{width:'150px',borderRadius:'25px',marginLeft:'20px'}}>Login</Button>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation
