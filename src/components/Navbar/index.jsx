import React from 'react';
import CartWidget from '../CartWidget';
const { Navbar, Container, Nav, NavDropdown } = require("react-bootstrap");

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/category/1">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="/category/2">Camisas</NavDropdown.Item>
                        <NavDropdown.Item href="/category/3">Pantalones</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;