import {Container} from "react-bootstrap";
import UserForm from "../components/Forms/UserForm";
import React from "react";
import NavBarDf from "../components/Navs/NavBarDf";

function Registration() {

    return (
        <>
        <NavBarDf/>
            <Container>
                <h3> Registrazione nuovo tifoso</h3>
            </Container>
            <Container className="square border border-1">

                <UserForm/>
            </Container>
        </>
    );
}

export default Registration;