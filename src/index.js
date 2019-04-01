import React from 'react'
import { render } from 'react-dom'
import App from './components/app.js'
import { Router, Route } from "react-router-dom";
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboardPage from './components/pages/adminDashboardPage.js'
import DriverProfilePage from './components/pages/driverProfilePage.js'
import TireReplacementPage from './components/pages/tireReplacementPage.js'
import LoginPage from './components/pages/loginPage.js'
import TruckPage from './components/pages/truckPage.js'


render(
    <div>
        <App>
        <Router history={history}>
                <div>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/tire" component={TireReplacementPage}/>
                    <Route exact path="/driver" component={DriverProfilePage}/>
                    <Route exact path="/admin" component={AdminDashboardPage}/>
                    <Route exact path="/truck" component={TruckPage}/>
                </div>
        </Router>
        </App>
    </div>,
    document.getElementById('root')
  )
