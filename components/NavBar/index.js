import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBarMenu() {
    return (
        <div>
            <Navbar bg="success" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="#FelipeMaeda"><span className="linkText">Felipe Maeda</span></Nav.Link>
                    <Nav.Link href="#Projetos">Projetos</Nav.Link>
                    <Nav.Link href="#GitHub">GitHub</Nav.Link>
                    <Nav.Link href="#Sobre">Sobre</Nav.Link>
                    <Nav.Link href="#Contato">Contato</Nav.Link>
                </Nav>
            </Navbar>
            <br />
        </div>
    );
}

export default NavBarMenu;