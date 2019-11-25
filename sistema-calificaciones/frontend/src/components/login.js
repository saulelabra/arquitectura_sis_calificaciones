import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Navbar, Button } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import setCurrUser from '../actions/setCurrUser';

const loginCard = {
    position: 'absolute',
    left: '10%',
    right: '10%',
    top: '15%',
    padding: '5%'
  };
  
  const formElement= {
    marginBottom: '3%'
  };

class Login extends React.Component {

    state = {
        toStudent : false,
        toProfessor : false,
        isLoading : false
    }

    checkAcc(user, pass)
    {
        this.setState(() => ({
            isLoading : true
        }))

        axios.get("https://sistema-calificaciones-api.azurewebsites.net/userCheck.php?user=" + user + "&pwd=" + pass).then(res => {
            console.log("response: " + JSON.stringify(res));

            console.log(res.data.type);

            this.setState(() => ({
                isLoading : false
            }))

            if(res.data.type == "student") {
                this.setState(() => ({
                    toStudent : true
                }))
            }

            if(res.data.type == "professor") {
                this.setState(() => ({
                    toProfessor : true
                }))
            }

            if(res.data.type == "notype") {
                alert("incorrect username / password");
            }
        });

        this.props.setCurrUser(user);
        this.setState({ state : this.state });
        //console.log(JSON.stringify(this.props.state));
        //console.log(JSON.stringify(this.state));
    }

    render() {
        if (this.state.toStudent == true) {
            console.log("render toStudent");
            return <Redirect to='/student_dash' />
        }

        if (this.state.toProfessor == true) {
            console.log("render toProfessor");
            return <Redirect to='/register_grades' />
        }

        if (this.state.isLoading) {
            return <h1>LOADING</h1>;
        }

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
                    <Button className="btn btn-primary" variant="contained" /*to="/register_grades"*/ onClick={() => this.checkAcc(document.getElementById("user").value, document.getElementById("password").value)}>Sign In</Button>
                </div>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      state: state.rootReducer,
    }
  }
  
  const mapDispatchToProps = {
    setCurrUser
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);