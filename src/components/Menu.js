import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand><Link className="nav-link" to="/">GG</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/Services">Services</Link>
                        <Link className="nav-link" to="/About">About</Link>
                        <Link className="nav-link" to="/Contact">Contact</Link>
                        <Link className="nav-link" to="/Booking">Booking</Link>
                        <Link className="nav-link" to="/Perfil">Perfil</Link>
                        <Link className="nav-link" to="/Admin">Admin</Link>
                        <Link className="nav-link" to="/Signin">Sign in</Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    );
}

export default Menu;