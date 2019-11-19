import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const titleStyle = {
    textAlign : 'left',
    marginTop: '2%',
    marginLeft: '5%',
    fontSize: '28px'
}

const tableStyle = {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%'
}

const logOutButtonStyle = {
    marginLeft: 'auto'
}

class StudentDash extends React.Component {

    state = {
        studentName : 'Saúl',
    }

    render() {
        return(
            <div className={'d-flex flex-column'}>
                <Navbar bg="light" expand="lg" className={'d-flex flex-row'}>
                    <Navbar.Brand>Grade - Assistant</Navbar.Brand>
                    <div></div>
                    <Link className="btn btn-primary" variant="contained" to="/" style={logOutButtonStyle}>Log Out</Link>
                </Navbar>
                <h1 style={titleStyle}>Bienvenido {this.state.studentName}</h1>
                <div>
                    <Paper style={tableStyle}>
                        <Table>
                            <TableHead>
                                <TableCell>Materia</TableCell>
                                <TableCell>C. Académica</TableCell>
                                <TableCell>C. Equipo</TableCell>
                                <TableCell>C. Comunicación</TableCell>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default StudentDash;