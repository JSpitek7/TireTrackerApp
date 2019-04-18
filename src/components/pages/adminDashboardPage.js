import React, { Component } from 'react';
import ManagerDashboard from '../managerDashboard.js'

class AdminDashboardPage extends Component {
    render() {
        return(
            <div className='userPage'>
                <ManagerDashboard/>
            </div>
        )
    }
}

export default AdminDashboardPage;