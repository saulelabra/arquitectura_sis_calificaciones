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

const tableStyle = {
    margin: '5%'
}

const backgroundStyle = {
    color: 'blue'
}

const headersStyle = {
    fontWeight: 'bold'
}

const dropDownStyle = {
    margin: '5% 5% 0 5%',
    width: '30%'
}
class RegisterGrades extends React.Component {

    render() {

        var files = {arr : [
            {'matricula' : 'A01020725', nombre: 'Saúl Labra', cAcad: 100, cEq: 100, cCom: 100, estado: 'aprobado'},
            {'matricula' : 'A01020123', nombre: 'Emilio Hernández', cAcad: 100, cEq: 100, cCom: 100, estado: 'aprobado'}
        ]}

        console.log(files);

        return(
            <div className={'d-flex flex-column'}>
                <Select
                    style = {dropDownStyle}
                    labelId="demo-simple-select-label"
                    id="group-selector"
                    value="Grupo"
                    //onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
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
                        <TableRow>
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
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default RegisterGrades;