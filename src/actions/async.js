import { userLogin,
        requestLogin,
        receiveLogin,
        requestAllModels,
        receiveAllModels,
        requestInStockModels,
        receiveInStockModels,
        requestTruckModels,
        receiveTruckModels,
        requestTrackedTrucks,
        receiveTrackedTrucks,
        requestVendors,
        receiveVendors,
        requestTireDeathStatuses,
        receiveTireDeathStatuses } from './index.js'
import history from '../history.js'
let url = 'http://localhost:8080'

export function login(username, password) {
    return dispatch => {
        dispatch(requestLogin())
        return fetch(url + '/login/' + username + '/' + password)
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        ).then(jsonResponse => {
                if(jsonResponse.foundUser){
                    dispatch(userLogin());
                    dispatch(receiveLogin(jsonResponse));
                    if(jsonResponse.empType === 'Truck Driver'){
                        history.push('/tire');
                        dispatch(fetchTrackedTrucks(jsonResponse.empId));
                    } else {
                        history.push('/manager');
                    }
                } else {
                    console.log("it did this instead");
                }
            })
    }
}
export function fetchInStockModels() {
    return dispatch => {
        dispatch(requestInStockModels())
        return fetch(url + '/tires/inStock')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveInStockModels(jsonResponse));
        })
    }
}
export function fetchAllModels() {
    return dispatch => {
        dispatch(requestAllModels())
        return fetch(url + '/tires')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveAllModels(jsonResponse));
        })
    }
}
export function fetchTireDeathStatuses() {
    return dispatch => {
        dispatch(requestTireDeathStatuses())
        return fetch(url + '/tires/status')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveTireDeathStatuses(jsonResponse));
        })
    }
}
export function fetchTruckModels() {
    return dispatch => {
        dispatch(requestTruckModels())
        return fetch(url + '/trucks')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveTruckModels(jsonResponse));
        })
    }
}
export function fetchTrackedTrucks(empId) {
    return dispatch => {
        dispatch(requestTrackedTrucks())
        return fetch(url + '/trucks/tracked/' + empId)
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveTrackedTrucks(jsonResponse));
        })
    }
}
export function fetchVendors() {
    return dispatch => {
        dispatch(requestVendors())
        return fetch(url + '/vendors')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveVendors(jsonResponse));
        })
    }
}
export function postTireChangeInfo(info) {
    return () => {
        fetch(url + '/tires/changeTire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                truckId: info.truckId,
                mileage: info.mileage,
                tireIndex: info.index,
                modelId: info.modelId,
                oldTireStatusId: info.oldTireStatusId
            })
        })
        .catch(error => console.error('Error: ', error))
        .then(response => {
            console.log('Success: ', response);
        })
    }
}
export function postAddTruckInfo(empId, addTruck, truckTire) {
    return () => {
        fetch(url + '/trucks/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                empId: empId,
                truckLicensePlate: addTruck.truckLicensePlate,
                truckModelId: addTruck.truckModelId,
                truckMileage: addTruck.truckMileage,
                truckTireDtoList: truckTire
            })
        })
    }
}
export function postPurchaseTireInfo(purchaseInfo) {
    return () => {
        fetch(url + '/tires/purchaseTires', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tireModelId: purchaseInfo.tireModelId,
                tirePurchaseQuantity: purchaseInfo.tirePurchaseQuantity,
                tirePurchasePricePerUnit: purchaseInfo.tirePurchasePricePerUnit,
                tireVendorId: purchaseInfo.tireVendorId
            })
        })
    }
}