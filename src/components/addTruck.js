import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import {updateTruckTire,updateTruckModel,updateTruckLicensePlate, updateTruckMileage,
    showAlert,hideAlert,throwError,hideError} from '../actions/index.js'
import {postAddTruckInfo} from '../actions/async.js'

const tirePositions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

const AddTruckView = ({updateTruckTire,updateTruckModel,updateTruckLicensePlate,updateTruckMileage,
    tireModels,truckModels,empId,addTruck,truckTire,postAddTruckInfo,
    showAlert,hideAlert,throwError,hideError}) => (
    <div class='container'><br/><br/>
        <div class='row justify-content-center'>
            <div class='col'>
            <Form.Group as={Form.Row} controlId="LicensePlateInput">
            <Form.Label column sm={3}>License Plate</Form.Label>
            <Col sm={8}>
                <Form.Control type="String" placeholder="License Plate" onChange={e=>updateTruckLicensePlate(e.target.value)}/>
            </Col>
            </Form.Group>
            <Form.Group as={Form.Row} controlId="TruckModelInput">
            <Form.Label column sm={3}>Truck Model</Form.Label>
            <Col sm={8}>
                <Form.Control as="select" onChange={e=>updateTruckModel(e.target.value)}>
                <option value="" selected disabled>Choose Truck Model</option>
                {truckModels.map(i => <option id={i.id} value={i.id} key={i.id}>{i.name}</option>)}
                </Form.Control>
            </Col>
            </Form.Group>
            <Form.Group as={Form.Row} controlId="TruckMileageInput">
            <Form.Label as column sm={3}>Truck Mileage</Form.Label>
            <Col sm={8}>
                <Form.Control type="Number" placeholder="Truck Mileage" onChange={e=>updateTruckMileage(e.target.value)}/>
            </Col>
            </Form.Group>
            </div><div  class='col'/>
        </div>
        <div class='row justify-content-center'>
        <Card><img src={require('../images/truckdiagramfinal.JPG')} width="100%" align="middle" alt="Tire Position Diagram"/></Card>
        </div>
        <br/>
        <div class='row justify-content-center'>
            <div class='col'>
                {tirePositions.map(i => {if(i%2!==0) return (
                    <Form.Group as={Form.Row} controlId={"TruckTireIndex" + i}>
                    <Form.Label column sm={3}>Position {i}</Form.Label>
                    <Col sm={8}>
                        <Form.Control as="select" onChange={e=>updateTruckTire(i,e.target.value)}>
                        <option value="" selected disabled>Choose Tire Model</option>
                        {tireModels.map(i => <option id={i.id} value={i.id} key={i.id}>{i.name}</option>)}
                    </Form.Control>
                    </Col>
                    </Form.Group>
                )})}
            </div>
            <div class='col'>
            {tirePositions.map(i => {if(i%2==0) return (
                    <Form.Group as={Form.Row} controlId={"TruckTireIndex" + i}>
                    <Form.Label column sm={3}>Position {i}</Form.Label>
                    <Col sm={8}>
                        <Form.Control as="select" onChange={e=>updateTruckTire(i,e.target.value)}>
                        <option value="" selected disabled>Choose Tire Model</option>
                        {tireModels.map(i => <option id={i.id} value={i.id} key={i.id}>{i.name}</option>)}
                    </Form.Control>
                    </Col>
                    </Form.Group>
                )})}
            </div>
        </div>
        <div class='row justify-content-center'>
            <div class='col'>
            <Button variant='outline-secondary'className="submitButton" onClick={() => {
                if(validateFields(addTruck)){
                    postAddTruckInfo(empId,addTruck,truckTire);
                    showAlert();
                }else throwError();}}>Submit</Button>
            </div>
        </div>
        <br/>
    <Alert variant='success' show={addTruck.alert}>
        Successfully added truck information.<br/>
        Thank you for your time!
        <div className="d-flex justify-content-end">
            <Button onClick={event => {
                hideAlert();}} variant="outline-success">
              Close
            </Button>
        </div>
    </Alert>
    <Alert variant='danger' show={addTruck.error}>
        All fields must be filled out to add truck information!<br/>
        <div className="d-flex justify-content-end">
            <Button onClick={() => {hideError()}} variant="outline-danger">
              Close
            </Button>
        </div>
    </Alert>
    </div>
)
function validateFields(addTruck) {
    if(addTruck.licensePlate === '') return false
    if(addTruck.truckModelId === '') return false
    if(addTruck.truckMileage === '') return false
    else return true
}
const mapStateToProps = state => ({
    tireModels: state.tireModel.inStockTires,
    truckModels: state.truck.truckModels,
    empId: state.employee.empId,
    addTruck: state.addTruck,
    truckTire: state.truckTire
})
const mapDispatchToProps = dispatch => ({
    updateTruckModel: (id) => dispatch(updateTruckModel(id)),
    updateTruckLicensePlate: (licensePlate) => dispatch(updateTruckLicensePlate(licensePlate)),
    updateTruckMileage: (mileage) => dispatch(updateTruckMileage(mileage)),
    updateTruckTire: (index,id) => dispatch(updateTruckTire(index,id)),
    postAddTruckInfo: (empId,addTruck,truckTire) => dispatch(postAddTruckInfo(empId,addTruck,truckTire)),
    showAlert: () => dispatch(showAlert()),
    hideAlert: () => dispatch(hideAlert()),
    throwError: () => dispatch(throwError()),
    hideError: () => dispatch(hideError())
})
const AddTruck = connect(mapStateToProps,mapDispatchToProps)(AddTruckView);
export default AddTruck;