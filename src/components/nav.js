import React from 'react'
import { connect } from 'react-redux'
import './nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import history from '../history.js'
const NavView = ({loggedIn, role}) => (
    <div>
        {(loggedIn)? <div><Navbar style={{ height: 100}}>
            <img src={require('../images/lawrencelogo.jpg')} height="80"
            className="d-inline-block align-top" alt="Lawrence Transportation"/>
        <div class='container justify-content-center'>
            <NavbarBrand><h1>TireTracker</h1></NavbarBrand></div>
        </Navbar>
            {(role === 'Truck Driver')? <Nav bg='dark' fill variant="tabs" onSelect={k => history.push(k)}>
                <div class='container'><div class='row'>
                    <div class='col'>
                        <Nav.Item>
                            <b><Nav.Link eventKey='/tire'>Tire Replacement</Nav.Link></b>
                        </Nav.Item>
                    </div>
                    <div class='col'>
                        <Nav.Item>
                            <b><Nav.Link eventKey='/truck'>Add Truck</Nav.Link></b>
                        </Nav.Item>
                    </div>
                    <div class='col'>
                        <Nav.Item>
                            <b><Nav.Link eventKey='/driver'>Profile</Nav.Link></b>
                        </Nav.Item>
                    </div>
            </div></div>
            </Nav>: <div/>}
            {(role=='Fleet Manager')? <Nav bg='dark' fill variant="tabs" onSelect={k => history.push(k)}>
                <div class='container'><div class='row'>
                    <div class='col'>
                        <Nav.Item>
                            <b><Nav.Link eventKey='/manager'>Manager Dashboard</Nav.Link></b>
                        </Nav.Item>
                    </div>
                    <div class='col'>
                        <Nav.Item>
                            <b><Nav.Link eventKey='/purchase'>Tire Purchase</Nav.Link></b>
                        </Nav.Item>
                    </div>
            </div></div>
            </Nav>: <div/>}</div> : <div/>}
    </div>
)

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
    role: state.employee.empType
})
const NavBar = connect(mapStateToProps)(NavView)
export default NavBar;
