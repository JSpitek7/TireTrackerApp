import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './tireReplacement.css'
import {updateVin, updateIndex, updateBrand,
    updateModel, updateMileage,showAlert,
    throwError, hideAlert, hideError} from '../actions/index.js'
import {fetchModels, postTireChangeInfo} from '../actions/async.js'

const indicies = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const TireReplacementView = ({empId, replacementInfo, brands, models, updateVin, updateIndex, updateBrand, fetchModels,
    updateModel, updateMileage, postTireChangeInfo, showAlert, throwError, hideAlert, hideError}) => (
    <div className="TireReplacement"><br/><br/>
    <Form>
        <Form.Group as={Form.Row} controlId="VINInput">
            <Form.Label column sm={3}>Vehicle VIN</Form.Label>
            <Col sm={8}>
                <Form.Control type="String" placeholder="VIN" onChange={(event)=>updateVin(event.target.value)}/>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="TireIndexInput">
            <Form.Label column sm={3}>Tire Index</Form.Label>
            <Col sm={8}>
                <Form.Control as="select" onChange={(event)=>updateIndex(event.target.value)}>
                <option value="" selected disabled hidden>Choose Tire Index</option>
                {indicies.map(i => <option id={i} value={i} key={i}>{i}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="Tire Brand Input">
            <Form.Label column sm={3}>Tire Brand</Form.Label>
            <Col sm={8}>
            <Form.Control as="select" onChange={(event) =>{
                updateBrand(event.target.value);
                fetchModels(event.target.value);}}>
                <option value="" selected disabled hidden>Choose Tire Brand</option>
                {brands.map(item => <option id={item.tireBrandId} value={item.tireBrandId} key={item.tireBrandName}>{item.tireBrandName}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="Tire Model Input">
            <Form.Label column sm={3}>Tire Model</Form.Label>
            <Col sm={8}>
            <Form.Control as="select" onChange={(event)=>updateModel(event.target.value)}>
                <option value="" selected disabled hidden>Choose Tire Model</option>
                {models.map(item => <option id={item.tireModelId} value={item.tireModelId} key={item.tireModelName}>{item.tireModelName}</option>)}
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
                postTireChangeInfo(empId, replacementInfo);
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
    if(input.brandId === '') return false
    if(input.modelId === '') return false
    if(input.vin === '') return false
    else return true;
}

const mapStateToProps = state => ({
    empId: state.employee.empId,
    replacementInfo: state.replacementInfo,
    brands: state.tireBrand,
    models: state.tireModel
})
const mapDispatchToProps = dispatch => ({
    updateMileage: mileage => dispatch(updateMileage(mileage)),
    updateBrand: id => dispatch(updateBrand(id)),
    fetchModels: id => dispatch(fetchModels(id)),
    updateModel: id => dispatch(updateModel(id)),
    updateVin: vin => dispatch(updateVin(vin)),
    updateIndex: index => dispatch(updateIndex(index)),
    showAlert: () => dispatch(showAlert()),
    hideAlert: () => dispatch(hideAlert()),
    postTireChangeInfo: (empId, info) => dispatch(postTireChangeInfo(empId, info)),
    throwError: () => dispatch(throwError()),
    hideError: () => dispatch(hideError())
})
const TireReplacement = connect(mapStateToProps, mapDispatchToProps)(TireReplacementView)
export default TireReplacement;