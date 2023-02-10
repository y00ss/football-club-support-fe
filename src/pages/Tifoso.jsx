import {useLocation, useNavigate} from "react-router-dom";
import NavBarDf from "../components/Navs/NavBarDf";
import {Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {toast} from "react-toastify";

function Tifoso() {

    const navigate = useNavigate();
    const location = useLocation();


    const user = location.state.fan;

    console.log(user)
    const deleteUser = async () => {
        // iter fans
        const res = await axios.post("/user/delete?id_user=" + user.id + "&id_team=" + user.team) ;
        console.log(res);

        if (res) {
            toast.success("Tifoso eliminato  con successo")
            navigate("/");
        } else {
            toast.error("Operazione fallita")
        }
    }


    return (

        <>
            <NavBarDf/>
            <Container><h3>Dettaglio Tifoso</h3></Container>
            <Container className="square border border-1">

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEName">
                        <Form.Label column sm={2}>
                            ID
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={user.id} type="text" readOnly={true}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEName">
                        <Form.Label column sm={2}>
                            Nome
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={user.name} type="text" readOnly={true}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalSurname">
                        <Form.Label column sm={2}>
                            Cognome
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={user.surname} readOnly={true}/>
                        </Col>
                    </Form.Group>

                    {/*                   <Form.Group as={Row} className="mb-3" controlId="formHorizontalSurname">
                        <Form.Label column sm={2}>
                            Provenienza
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={user.city} readOnly={true}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalSurname">
                        <Form.Label column sm={2}>
                            Anno di nascita
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={user.birth} readOnly={true}/>
                        </Col>
                    </Form.Group>*/}

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalTeam">
                        <Form.Label column sm={2}>
                            Tifoso
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={user.team} readOnly={true}/>
                        </Col>
                    </Form.Group>

                </Form>

                <Button variant="danger" type="submit" className="float-left" onClick={deleteUser}>
                    Elimina
                </Button>
            </Container>

        </>
    )
}

export default Tifoso;