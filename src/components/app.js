import React, { Component } from 'react';
import NavBar from './nav.js'
import './app.css'
export class App extends Component {
    render() {
        return(
          <div className='app'>
            <NavBar/>
            { this.props.children }
          </div>
        )
      }
}

export default App;