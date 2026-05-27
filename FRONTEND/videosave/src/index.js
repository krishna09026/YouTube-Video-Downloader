import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
} from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="py-3 shadow-sm"
    >
      <Container>

        <Navbar.Brand
          href="#"
          className="fw-bold fs-3 text-danger"
        >
          VideoSave
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">

            <Nav.Link href="#">Home</Nav.Link>

            <Nav.Link href="#">Features</Nav.Link>

            <NavDropdown
              title="YouTube"
              id="youtube-dropdown"
            >
              <NavDropdown.Item href="#">
                Video Download
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Shorts Download
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                YouTube to MP3
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Instagram"
              id="instagram-dropdown"
            >
              <NavDropdown.Item href="#">
                Reel Download
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Post Download
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Story Download
              </NavDropdown.Item>
            </NavDropdown>

            <Button variant="danger">
              Download
            </Button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}