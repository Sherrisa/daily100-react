import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Today from "./June07Comp";

function NavComp() {
  return (
    <div>
      <Navbar bg="myBlue" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Daily 100
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/today">
                Today's Project
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<Today />} />
      </Routes>
    </div>
  );
}

export default NavComp;
