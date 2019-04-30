import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import './tireReplacement.css'
import {updateTruckId, updateIndex, updateModel, updateMileage, updateOldTireStatus,
    showAlert, throwError, hideAlert, hideError} from '../actions/index.js'
import {postTireChangeInfo} from '../actions/async.js'

const tirePositions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

const TireReplacementView = ({replacementInfo, truckLicensePlates, models, statuses, updateTruckId, updateIndex,
    updateModel, updateMileage, updateOldTireStatus, postTireChangeInfo, showAlert, throwError, hideAlert, hideError}) => (
    <div className="TireReplacement"><br/><br/>
    <Form>
        <Form.Group as={Form.Row} controlId="LicensePlateInput">
            <Form.Label column sm={3}>License Plate</Form.Label>
            <Col sm={8}>
                <Form.Control as="select" onChange={(event)=>updateTruckId(event.target.value)}>
                <option value="" selected disabled hidden>Choose License Plate</option>
                {truckLicensePlates.map(i=><option id={i.truckId} value={i.truckId} key={i.truckId}>{i.truckLicensePlate}</option>)}
                </Form.Control>
            </Col>
        </Form.Group>
        <div class='row justify-content-center'>
        <Card><img src={require('../images/truckdiagramfinal.JPG')} width="100%" align="middle" alt="Tire Position Diagram"/></Card>
        </div>
        <br/>
        <Form.Group as={Form.Row} controlId="TireIndexInput">
            <Form.Label column sm={3}>Tire Index</Form.Label>
            <Col sm={8}>
                <Form.Control as="select" onChange={(event)=>updateIndex(event.target.value)}>
                <option value="" selected disabled hidden>Choose Tire Index</option>
                {tirePositions.map(i=><option id={i} value={i} key={i}>{i}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="TireDeathInput">
            <Form.Label column sm={3}>Previous Tire Condition</Form.Label>
            <Col sm={8}>
                <Form.Control as="select" onChange={(event)=>updateOldTireStatus(event.target.value)}>
                <option value="" selected disabled hidden>Choose Previous Tire Condition</option>
                {statuses.map(i=><option id={i.tireStatusId} value={i.tireStatusId} key={i.tireStatusId}>{i.tireStatusDescription}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="Tire Model Input">
            <Form.Label column sm={3}> New Tire Model</Form.Label>
            <Col sm={8}>
            <Form.Control as="select" onChange={(event)=>updateModel(event.target.value)}>
                <option value="" selected disabled hidden>Choose Tire Model</option>
                {models.map(item => <option id={item.id} value={item.id} key={item.name}>{item.name}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="MileageInput">
            <Form.Label column sm={3}> Mileage</Form.Label>
            <Col sm={8}>
                <Form.Control type="Number" placeholder="Current Odometer Reading" onChange={(event)=>updateMileage(event.target.value)}/>
            </Col>
        </Form.Group>
        <Button variant='outline-secondary'className="submitButton" onClick={() => {
            if(validateFields(replacementInfo)){
                postTireChangeInfo(replacementInfo);
                return showAlert();
            }else return throwError();}}>Submit</Button>
    </Form>
    <br/>
    <Alert variant='success' show={replacementInfo.alert}>
        Successfully submitted tire tracking information.<br/>
        Thank you for your time!
        <div className="d-flex justify-content-end">
            <Button onClick={event => {
                hideAlert();}} variant="outline-success">
              Close
            </Button>
        </div>
    </Alert>
    <Alert variant='danger' show={replacementInfo.error}>
        All fields must be filled out to submit tire tracking information!<br/>
        <div className="d-flex justify-content-end">
            <Button onClick={() => {hideError()}} variant="outline-danger">
              Close
            </Button>
        </div>
    </Alert>
    </div>
)

function validateFields(input) {
    if(input.mileage === '') return false
    if(input.index === '') return false
    if(input.modelId === '') return false
    if(input.licensePlate === '') return false
    else return true;
}

const mapStateToProps = state => ({
    replacementInfo: state.replacementInfo,
    truckLicensePlates: state.truck.trackedTrucks,
    models: state.tireModel.inStockTires,
    statuses: state.tireModel.tireDeathStatuses
})
const mapDispatchToProps = dispatch => ({
    updateMileage: mileage => dispatch(updateMileage(mileage)),
    updateModel: id => dispatch(updateModel(id)),
    updateTruckId: truckId => dispatch(updateTruckId(truckId)),
    updateIndex: index => dispatch(updateIndex(index)),
    updateOldTireStatus: id => dispatch(updateOldTireStatus(id)),
    showAlert: () => dispatch(showAlert()),
    hideAlert: () => dispatch(hideAlert()),
    postTireChangeInfo: (info) => dispatch(postTireChangeInfo(info)),
    throwError: () => dispatch(throwError()),
    hideError: () => dispatch(hideError())
})
const TireReplacement = connect(mapStateToProps, mapDispatchToProps)(TireReplacementView)
export default TireReplacement;