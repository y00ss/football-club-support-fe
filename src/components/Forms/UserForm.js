import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from 'react-toastify';

import {useNavigate} from "react-router-dom";

function UserForm() {

    const navigate = useNavigate();

    const [userFan, setUserFan] = useState({
        name: '',
        surname: '',
        birth: '',
        city: '',
        teamId: ''
    });

    const [teams, setTeams] = useState(null);

    useEffect(() => {
        fetchTeams();
    }, [])

    const fetchTeams = async () => {
        const res = await  axios.get("/team");
        console.log(res);
        setTeams(res.data);
    }

    const handleChangeUserFan = async (e) => {
        const {name, value} = e.target;
        //yep, devil thing !
        setUserFan({
                ...userFan,
                [name]: value
            }
        )
    }

    const handleSubmitUserFan = async (e) => {
        e.preventDefault();
        // creao user
        console.log(userFan);
        console.log(userFan.birth);

        const res = await axios.post("/user", userFan);
        if (res){
            toast.success("Tifoso salvato con successo")
            navigate("/");
        }else {
            toast.error("Operazione fallita")
        }


    }

    return (
        <Form onSubmit={handleSubmitUserFan}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Mario" onChange={handleChangeUserFan} required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control name="surname" type="text" placeholder="Rossi" onChange={handleChangeUserFan} required/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridCity">
                <Form.Label>Nato a</Form.Label>
                <Form.Control name="city" placeholder="Torino" onChange={handleChangeUserFan} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridYear">
                <Form.Label>Anno di nascita</Form.Label>
                <Form.Control name="birth" type="date" time onChange={handleChangeUserFan} required />
            </Form.Group>

            <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridFan">
                    <Form.Label>Tifoso</Form.Label>
                    <Form.Select name="teamId"  onChange={handleChangeUserFan} required>
                        <option>-</option>

                        {teams && teams.map(team => {
                            return (
                                <option value={team.id}>{team.name}</option>
                            );
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPlus">
                    <Form.Label>Abbonato</Form.Label>
                    <Form.Select defaultValue="-">
                        <option>-</option>
                        <option>Si</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>


            </Row>

{/*
            <Form.Group className="mb-3" id="formGridCheckboxPrivacy">
                <Form.Check type="checkbox" label="Accetta condizioni privacy"/>
            </Form.Group>
*/}

            <Container>
                <Button variant="primary" type="submit" className="float-left">
                    Invio
                </Button>
            </Container>

        </Form>
    );
}

export default UserForm;