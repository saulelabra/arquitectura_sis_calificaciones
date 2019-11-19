import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Navbar } from 'react-bootstrap';

const loginCard = {
    position: 'absolute',
    left: '10%',
    right: '10%',
    top: '15%',
    padding: '5%'
  };
  
  const formControl= {
    margin: '1%',
  };
  
  const formElement= {
    marginBottom: '3%'
  };

class Login extends React.Component {
    render() {
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Grade - Assistant</Navbar.Brand>
                </Navbar>
                <Paper style={loginCard}>
                <h4 style={formElement}>Sign In</h4>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <TextField
                        style = {formElement}
                        id="user"
                        label="User"
                    />
                    <TextField
                        style = {formElement}
                        id="password"
                        label="Password"
                        type="password"
                    />
                    <Link className="btn btn-primary" variant="contained" to="/register_grades" /*onClick={() => this.checkAcc(document.getElementById("user").value, document.getElementById("password").value)}*/>Sign In</Link>
                </div>
                </Paper>
            </div>
        );
    }
}

export default Login;