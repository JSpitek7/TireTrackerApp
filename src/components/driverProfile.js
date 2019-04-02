import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

const DriverProfileView = ({driverInfo}) => (
    <div class='container'><br/><br/>
        <div class='row justify-content-center'>
            <div class='col'>
                <Card border='primary' style={{ height: 300 }}>
                    <Card.Body><img src={require('../images/stockphoto2.JPG')}/></Card.Body>
                </Card><br/>
                <Card border='primary'>
                    <Card.Body>
                        {driverInfo.empName}<br/>
                        {driverInfo.empType}<br/>
                    </Card.Body>
                </Card>
            </div>
            <div class='col'>
                <Card border='primary'>
                    <Card.Header><h3>{driverInfo.empName}'s Information:</h3></Card.Header>
                    <Card.Body><br/><br/>
                        Email Address: {driverInfo.empEmail}<br/>
                        Phone: {driverInfo.empPhone}<br/>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
)
const mapStateToProps = state => ({
    driverInfo: state.employee
})
const DriverProfile = connect(mapStateToProps)(DriverProfileView);
export default DriverProfile;