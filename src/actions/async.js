import { userLogin,
        requestLogin,
        receiveLogin,
        requestModels,
        receiveModels,
        requestTruckModels,
        receiveTruckModels } from './index.js'
import history from '../history.js'
let url = 'https://tire-tracker-api.herokuapp.com'

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
                    history.push((jsonResponse.empType === 'Truck Driver')? '/tire': '/manager');
                } else {
                    console.log("it did this instead");
                }
            })
    }
}
export function fetchModels() {
    return dispatch => {
        dispatch(requestModels())
        return fetch(url + '/tires')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveModels(jsonResponse));
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
export function postTireChangeInfo(driverId, info) {
    return () => {
        fetch(url + '/tires/changeTire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                driverId: driverId,
                mileage: info.mileage,
                tireIndex: info.index,
                modelId: info.modelId,
                licensePlate: info.licensePlate
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
        console.log(empId)
        console.log(addTruck.vin)
        console.log(addTruck.modelId)
        fetch(url + '/trucks/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                empId: empId,
                trukLicensePlate: addTruck.licensePlate,
                truckModelId: addTruck.modelId,
                truckTireDtoList: truckTire
            })
        })
    }
}