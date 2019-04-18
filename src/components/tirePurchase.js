import React from 'react'
import { connect } from 'react-redux'
import {postPurchaseTireInfo} from './../actions/async.js'
import {updatePurchasePrice, updatePurchaseModel,
    updatePurchaseQuantity, updatePurchaseVendor,
    showAlert, throwError, hideAlert, hideError} from './../actions/index.js'
import './tirePurchase.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const TirePurchaseView = ({ purchaseInfo, vendors, models, updatePurchaseVendor, updatePurchaseModel,
    updatePurchasePrice, updatePurchaseQuantity,postPurchaseTireInfo,
    showAlert, throwError, hideAlert, hideError}) => (
    <div className="TirePurchase"><br/><br/>
    <Form>
        <Form.Group as={Form.Row} controlId="VendorInput">
            <Form.Label column sm={3}>Vendor</Form.Label>
            <Col sm={8}>
                <Form.Control as="select" onChange={(event)=>updatePurchaseVendor(event.target.value)}>
                <option value="" selected disabled hidden>Choose Vendor</option>
                {vendors.map(i => <option id={i.tireVendorId} value={i.tireVendorId} key={i.tireVendorId}>{i.tireVendorName}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="Tire Model Input">
            <Form.Label column sm={3}>Tire Model</Form.Label>
            <Col sm={8}>
            <Form.Control as="select" onChange={(event)=>updatePurchaseModel(event.target.value)}>
                <option value="" selected disabled hidden>Choose Tire Model</option>
                {models.map(item => <option id={item.id} value={item.id} key={item.name}>{item.name}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="PriceInput">
            <Form.Label column sm={3}>Price Per Tire</Form.Label>
            <Col sm={8}>
                <Form.Control type="Number" placeholder="Price Per Tire" onChange={(event)=>updatePurchasePrice(event.target.value)}/>
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="QuantityInput">
            <Form.Label column sm={3}>Quantity</Form.Label>
            <Col sm={8}>
                <Form.Control type="Number" placeholder="Quantity Purchased" onChange={(event)=>updatePurchaseQuantity(event.target.value)}/>
            </Col>
        </Form.Group>
        <Button variant='outline-secondary'className="submitButton" onClick={() => {
            if(validateFields(purchaseInfo)){
                postPurchaseTireInfo(purchaseInfo);
                return showAlert();
            }else return throwError();}}>Submit</Button>
    </Form>
    <br/>
    <Alert variant='success' show={purchaseInfo.alert}>
        Successfully submitted tire tracking information.<br/>
        Thank you for your time!
        <div className="d-flex justify-content-end">
            <Button onClick={event => {
                hideAlert();}} variant="outline-success">
              Close
            </Button>
        </div>
    </Alert>
    <Alert variant='danger' show={purchaseInfo.error}>
        All fields must be filled out to submit tire purchase information!<br/>
        <div className="d-flex justify-content-end">
            <Button onClick={() => {hideError()}} variant="outline-danger">
              Close
            </Button>
        </div>
    </Alert>
    </div>
)

function validateFields(purchaseInfo) {
    if(purchaseInfo.tireModelId === '') return false
    if(purchaseInfo.tirePurchaseQuantity === '') return false
    if(purchaseInfo.tirePurchasePricePerUnit === '') return false
    if(purchaseInfo.tireVendorId === '') return false
    else return true;
};

const mapStateToProps = state => ({
    purchaseInfo: state.purchaseInfo,
    vendors: state.tireVendor,
    models: state.tireModel.allTires
})
const mapDispatchToProps = dispatch => ({
    updatePurchaseVendor: id => dispatch(updatePurchaseVendor(id)),
    updatePurchaseModel: id => dispatch(updatePurchaseModel(id)),
    updatePurchasePrice: price => dispatch(updatePurchasePrice(price)),
    updatePurchaseQuantity: quantity => dispatch(updatePurchaseQuantity(quantity)),
    showAlert: () => dispatch(showAlert()),
    hideAlert: () => dispatch(hideAlert()),
    postPurchaseTireInfo: (info) => dispatch(postPurchaseTireInfo(info)),
    throwError: () => dispatch(throwError()),
    hideError: () => dispatch(hideError())
})
const TirePurchase = connect(
    mapStateToProps,
    mapDispatchToProps)(TirePurchaseView)
export default TirePurchase