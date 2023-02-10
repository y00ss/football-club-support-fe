import React from 'react';
import {Container} from "react-bootstrap";
import TableUsers from "../components/Tables/TableUsers";
import NavBarDf from "../components/Navs/NavBarDf";
import Button from "react-bootstrap/Button";


function Home(){


    return(
        <>
            <NavBarDf/>
            <Container >
                <h3> Lista tifosi </h3>

                <TableUsers/>

                <Button href={"/registration"} variant="primary" type="submit" className="float-left" >
                    Inserisci nuovo tifoso
                </Button>
            </Container>

        </>
    )
}
//import './App.css';

export default Home;