import React, { Component } from 'react';
import { connect } from 'react-redux'

const NavView = ({loggedIn}) => (
    <div>
        {(loggedIn)? <div>The navbar will go here</div> : <div/>}
    </div>
)
const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
})
const NavBar = connect(mapStateToProps)(NavView)
export default NavBar;