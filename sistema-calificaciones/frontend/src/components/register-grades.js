//https://jsonplaceholder.typicode.com/users

import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const tableStyle = {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%'
}

const backgroundStyle = {
    color: 'blue'
}

const headersStyle = {
    fontWeight: 'bold'
}

const dropDownStyle = {
    marginTop: '2%',
    width: '20%',
    padding:'0'
}

const buttonStyle = {
    margin: '2% 5% 0% 5%',
    width: '10%'
}

const logOutButtonStyle = {
    marginLeft: 'auto'
}

class RegisterGrades extends React.Component {

    state = {
        persons: []
    }

    /*componentDidMount() {
        axios.get("http://localhost:8000/test.php", {
            headers: {
                'Access-Control-Allow-Origin' : "http://localhost:8000",
            }
        }).then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        });
    }*/

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        });
    }

    render() {
        var files = {arr : [
            {'matricula' : 'A01020725', nombre: 'Saúl Labra', cAcad: 100, cEq: 100, cCom: 100, estado: 'aprobado'},
            {'matricula' : 'A01020123', nombre: 'Emilio Hernández', cAcad: 100, cEq: 100, cCom: 100, estado: 'aprobado'}
        ]}

        console.log(files);

        return(
            <div className={'d-flex flex-column'}>
                <Navbar bg="light" expand="lg" className={'d-flex flex-row'}>
                    <Navbar.Brand>Grade - Assistant</Navbar.Brand>
                    <div></div>
                    <Link className="btn btn-primary" variant="contained" to="/" style={logOutButtonStyle}>Log Out</Link>
                </Navbar>
                <div className={"dropdown"} style={dropDownStyle}>
                    <button className={"btn btn-secondary dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className={"dropdown-menu"} aria-labelledby="dropdownMenuButton">
                        <a className={"dropdown-item"} href="#">Action</a>
                        <a className={"dropdown-item"} href="#">Another action</a>
                        <a className={"dropdown-item"} href="#">Something else here</a>
                    </div>
                </div>
                <Paper style={tableStyle}>
                    <Table>
                    <TableHead>
                        <TableRow style={headersStyle}>
                        <TableCell align="center">Matrícula</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">C.Académica</TableCell>
                        <TableCell align="center">C. Equipo</TableCell>
                        <TableCell align="center">C. Comunicación</TableCell>
                        <TableCell align="center">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {files.arr.map(files => (
                        <TableRow key={files.matricula}>
                            <TableCell align="center">{files.matricula}</TableCell>
                            <TableCell align="center">{files.nombre}</TableCell>
                            <TableCell align="center">
                                <TextField
                                    id="cAcad"
                                    label="C. Académica"
                                    margin="normal"
                                    type="number"
                                    defaultValue={files.cAcad}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <TextField
                                    id="cEq"
                                    label="C. Equipo"
                                    margin="normal"
                                    type="number"
                                    defaultValue={files.cEq}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <TextField
                                    id="cCom"
                                    label="C. Comunicación"
                                    margin="normal"
                                    type="number"
                                    defaultValue={files.cCom}
                                />
                            </TableCell>
                            <TableCell align="center">{files.estado}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    <TableBody>
                        {this.state.persons.map(person => (
                        <TableRow key={person.id}>
                            <TableCell align="center">{person.id}</TableCell>
                            <TableCell align="center">{person.name}</TableCell>
                            <TableCell align="center">
                                <TextField
                                    id="cAcad"
                                    label="C. Académica"
                                    margin="normal"
                                    type="number"
                                    defaultValue={99}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <TextField
                                    id="cEq"
                                    label="C. Equipo"
                                    margin="normal"
                                    type="number"
                                    defaultValue={99}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <TextField
                                    id="cCom"
                                    label="C. Comunicación"
                                    margin="normal"
                                    type="number"
                                    defaultValue={99}
                                />
                            </TableCell>
                            <TableCell align="center">{person.username}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </Paper>
                <div className={'dflex justify-content-center'}>
                    <Button variant="primary" style={buttonStyle} className>Submit</Button>
                </div>
            </div>
        );
    }
}

export default RegisterGrades;