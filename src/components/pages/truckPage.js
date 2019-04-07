import React, { Component } from 'react'
import AddTruck from '../addTruck.js'

class TruckPage extends Component {
    render() {
        return(
            <div className='userPage'>
                <AddTruck/>
            </div>
        )
    }
}

export default TruckPage;