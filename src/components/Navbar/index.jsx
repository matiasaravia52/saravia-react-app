import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
const { Navbar, Container, Nav, NavDropdown } = require("react-bootstrap");

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">React-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <Link to={'/category/1'} className="dropdown-item">Remeras</Link>
                        <Link to={'/category/2'} className="dropdown-item">Camisas</Link>
                        <Link to={'/category/3'} className="dropdown-item">Pantalones</Link>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;