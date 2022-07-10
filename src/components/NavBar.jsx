import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(
    sessionStorage.getItem("email") || false
  );
  const handleClick = () => {
    setIsOpen(false);
    sessionStorage.clear();
  };
  return (
    <Navbar bg="success" variant="dark">
      {isOpen ? (
        <Container>
          <Navbar.Brand href="/home">Clarus</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/" onClick={handleClick}>
              LogOut
            </NavLink>
          </Nav>
        </Container>
      ) : (
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
        </Container>
      )}
    </Navbar>
  );
};

export default NavBar;
