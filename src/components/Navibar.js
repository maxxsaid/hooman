import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navibar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">hooman</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/hoomans">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
