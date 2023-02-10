import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

function NavBarDf() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">

                        <img
                            src="../img/logo.svg"
                            alt={"Club-Tifosi"}
                            className="d-inline-block align-top"
                        />

                    </Navbar.Brand>
                    <Nav className="me-auto">
                       <Nav.Link href="/">Home</Nav.Link>
                        {/*<Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBarDf;