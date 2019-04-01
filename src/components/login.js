import React from 'react';
import { connect } from 'react-redux';
import './login.css'
import {updateUsername, updatePassword} from './../actions/index.js'
import {login} from './../actions/async.js'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginView = ({ updateUsername, updatePassword, login, loginInfo}) => (
    <div className='login'>
        <Card bg='light' border='secondary'>
            <Card.Title>TireTracker Login</Card.Title>
        </Card>
        <Card bg='dark' text='white'>
            <Card.Body bg='lightgray'>
                <Form>
                    <Form.Control type="String" placeholder="Username" onChange={(event) => {
                        let username = event.target.value;
                        updateUsername(username);
                    }}/><br/>
                    <Form.Control type="Password" placeholder="Password" onChange={(event) => {
                        let password = event.target.value;
                        updatePassword(password);
                    }}/>
                </Form>
            </Card.Body>
            <Button variant='light' className="loginButton" onClick={() => {
                login(loginInfo.username, loginInfo.password);}}>Submit</Button><br/>
        </Card>
    </div>
)

const mapStateToProps = state => ({
    loginInfo: state.login
})
const mapDispatchToProps = dispatch => ({
    updateUsername: username => dispatch(updateUsername(username)),
    updatePassword: password => dispatch(updatePassword(password)),
    login: (username, password) => dispatch(login(username,password))

})

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView)

export default Login