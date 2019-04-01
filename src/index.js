import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import App from './components/app.js'
import AdminDashboardPage from './components/pages/adminDashboardPage.js'
import DriverProfilePage from './components/pages/driverProfilePage.js'
import TireReplacementPage from './components/pages/tireReplacementPage.js'
import LoginPage from './components/pages/loginPage.js'
import TruckPage from './components/pages/truckPage.js'

const loggerMiddleWare = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleWare));

render(
    <Provider store={store}>
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
    </Provider>,
    document.getElementById('root')
  )
