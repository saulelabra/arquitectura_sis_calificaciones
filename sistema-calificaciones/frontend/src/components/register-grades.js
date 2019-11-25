//https://jsonplaceholder.typicode.com/users

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const contentStyle = {
    height: '100%'
}

const tableStyle = {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%'
}

const headersStyle = {
    fontWeight: 'bold'
}

const buttonStyle = {
    margin: '2% 5% 0% 5%',
    width: '10%'
}

const logOutButtonStyle = {
    marginLeft: 'auto'
}

const sideBarStyle = {
    backgroundColor : '#00235c',
    width : '25%',
    padding : '2%'
}

const sideBarTitleStyle = {
    color : 'white',
    textAlign : 'left'
}

const sideBarElementsStyle = {
    color : 'white',
    textAlign : 'left',
    listStyleType : 'none'
}

class RegisterGrades extends React.Component {
    _isMounted = false;

    state = {
        estudiantes: [],
        materias: [],
        materiaActual: ' ',
        isLoadingMaterias: false,
        isLoadingEstudiantes: false
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
        this._isMounted = true;
        
        this.setState(() => ({
            isLoadingMaterias : true
        }))

        axios.post("https://sistema-calificaciones-api.azurewebsites.net/groupList.php", { 'user' : this.props.state.currUser }).then(res => {
            if(this._isMounted) {

                this.setState(() => ({
                    isLoadingMaterias : false
                }))

                console.log(JSON.stringify(res));
                this.setState({ materias: res.data });

                axios.post("https://sistema-calificaciones-api.azurewebsites.net/getGroup.php", { 'claveMateria' : res.data[0].clave }).then(res => {
                    console.log(JSON.stringify(res));
                    this.setState({ estudiantes : res.data });
                    this.setState({ materiaActual : res.data[0].materiaNombre });
                });
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getGroup(materiaClave) {
        console.log("Clicked on materia");
        axios.post("https://sistema-calificaciones-api.azurewebsites.net/getGroup.php", { 'claveMateria' : materiaClave }).then(res => {
            console.log(JSON.stringify(res));
            this.setState({ estudiantes : res.data });
        });
    }

    render() {
        return(
            <div className={'d-flex flex-column'} style={contentStyle}>
                <Navbar bg="light" expand="lg" className={'d-flex flex-row'}>
                    <Navbar.Brand>Grade - Assistant</Navbar.Brand>
                    <div></div>
                    <Link className="btn btn-primary" variant="contained" to="/" style={logOutButtonStyle}>Log Out</Link>
                </Navbar>
                <div className={'d-flex flex-row'} style={contentStyle}>
                    <div className={'d-flex flex-column'} style={sideBarStyle}>
                        <h4 style={sideBarTitleStyle}>Materias</h4>
                        <br/>
                        <ul>
                            {this.state.materias.map(materia => (
                                <Button onClick={() => {this.getGroup(materia.clave)}} style={sideBarElementsStyle}>{materia.clave} {materia.nombre}</Button>
                            ))}
                        </ul>
                    </div>
                    <div className={'d-flex flex-column'}>
                            <h4>{this.state.materiaActual}</h4>
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
                                {this.state.estudiantes.map(estudiante => (
                                <TableRow key={estudiante.estudianteMatricula}>
                                    <TableCell align="center">{estudiante.estudianteMatricula}</TableCell>
                                    <TableCell align="center">{estudiante.nombre}</TableCell>
                                    <TableCell align="center">
                                        <TextField
                                            id="cAcad"
                                            label="C. Académica"
                                            margin="normal"
                                            type="number"
                                            defaultValue={estudiante.cAcad}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <TextField
                                            id="cEq"
                                            label="C. Equipo"
                                            margin="normal"
                                            type="number"
                                            defaultValue={estudiante.cEq}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <TextField
                                            id="cCom"
                                            label="C. Comunicación"
                                            margin="normal"
                                            type="number"
                                            defaultValue={estudiante.cCom}
                                        />
                                    </TableCell>
                                    <TableCell align="center">{estudiante.estatus}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </Paper>
                        <div className={'dflex justify-content-center'}>
                            <Button variant="primary" style={buttonStyle} className>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      state: state.rootReducer,
    }
  }
  
export default connect(mapStateToProps)(RegisterGrades);