import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBarMenu() {
    return (
        <div>
            <Navbar className="NavbarStyles" bg="success" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link className="li-styles" href="#home">Felipe Maeda</Nav.Link>
                    <Nav.Link className="li-styles" href="#home">Home</Nav.Link>
                    <Nav.Link className="li-styles" href="#features">Features</Nav.Link>
                    <Nav.Link className="li-styles" href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <br />
        </div>
    );
}

export default NavBarMenu;