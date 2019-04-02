import React, { Component } from 'react';
import NavBar from './nav.js'
import './driver.css'

export class App extends Component {
    render() {
        return(
          <div>
            <NavBar/>
            { this.props.children }
          </div>
        )
      }
}

export default App;