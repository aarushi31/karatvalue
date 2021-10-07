import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,NavDropdown,Container} from 'react-bootstrap'
import './Navbar.css'
import {useAuth} from '../AuthContext'
import { useHistory } from 'react-router'

function Navigation() {
    const {login,logout,currentUser}=useAuth()
    const history=useHistory();

    function handleLogout(){
      try{
        logout();
        history.push('/login')
      }catch{
        window.alert('Failed to logout')
      }
    }


    return ( 
      <Navbar collapseOnSelect expand="lg" bg="#FFFCF2" variant="light" style={{padding:'20px 0',background:'#FFFCF2'}} fixed="top">
      <Container>
      <Navbar.Brand href="/"><b>KARAT</b><br/>VALUE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Form>
            <FormControl placeholder="Search" style={{width:"30vw",borderRadius:'25px'}}/>
          </Form>
        </Nav>
        <Nav>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link eventKey={2} href="/cart">
            Cart
          </Nav.Link>
          {!currentUser && <Button variant="dark" style={{width:'150px',borderRadius:'25px',marginLeft:'20px'}} href="/login">Login</Button>}
          {currentUser && <Button variant="dark" style={{width:'150px',borderRadius:'25px',marginLeft:'20px'}} onClick={handleLogout}>Logout</Button>}
          {currentUser && <Button variant="dark" style={{width:'150px',borderRadius:'25px',marginLeft:'20px'}} href="/register">Update Profile</Button>}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation
