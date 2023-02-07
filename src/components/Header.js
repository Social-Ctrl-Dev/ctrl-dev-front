import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logout from "./logout";


export const Header = ()=> {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">CTRL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="">Login</Nav.Link>

          <Nav.Link href="/"><Logout></Logout></Nav.Link>

          <Nav.Link href="https://mcgwtxktaxvhnisqaike.supabase.co/auth/v1/authorize?provider=github">Register</Nav.Link>
          
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}