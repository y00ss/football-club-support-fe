import Table from 'react-bootstrap/Table';
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function TableUsers() {

    const navigate = useNavigate();
    const [fans, setFans] = useState(null);

    useEffect(() => {
        fetchFans();
    }, [])

    const fetchFans = async () => {
        // iter fans
        const res = await axios.get("/fan");
        console.log(res);
        setFans(res.data);
        console.log(res.data)
    }

    //posso fare una chiamate per chiamare il dettaglio user
    const userDetails = (fan, index) => {

        navigate("/tifoso", {
            state: {
                fan
            }
        });

    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Squadra</th>
            </tr>
            </thead>
            <tbody>
            {fans && fans.map((fan, index) => {
                return (
                    <tr key={index}  onClick={() => {
                        userDetails(fan, index)
                    }}>
                        {/*
                        <td>{fan.id}</td>
*/}
                        <td>{fan.name}</td>
                        <td>{fan.surname}</td>
                        <td>{fan.team}</td>
                    </tr>);
            })}

            </tbody>
        </Table>
    );
}

export default TableUsers;