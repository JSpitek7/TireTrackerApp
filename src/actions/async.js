import { userLogin,
        requestLogin,
        receiveLogin,
        requestBrands,
        receiveBrands,
        requestModels,
        receiveModels } from './index.js'
import history from '../history.js'
let url = 'http://localhost:8080'

export function login(username, password) {
    return dispatch => {
        dispatch(requestLogin())
        return fetch(url + '/login/' + username + '/' + password)
        .then(
            response => {
                let responseBody = response.json();
                dispatch(userLogin());
                history.push('/driver');
                return responseBody;
            },
            error => {
                console.log('An error occured.', error);
                return [];
            }
        ).then(responseBody => dispatch(receiveLogin(responseBody)))
    }
}
export function fetchBrands() {
    return dispatch => {
        dispatch(requestBrands())
        return fetch(url + '/tire/brands')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error);
                return [];
            }
        )
        .then(jsonResponse => {
            dispatch(receiveBrands(jsonResponse));
        })
    }
}
export function fetchModels(brandId) {
    return dispatch => {
        dispatch(requestModels())
        return fetch(url + '/tire/brands/' + brandId + '/models')
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
export function postTireChangeInfo(driverId, info) {
    return () => {
        fetch(url + '/tire/changeTire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                driverId: driverId,
                mileage: info.mileage,
                index: info.index,
                brandId: info.brandId,
                modelId: info.modelId,
                vin: info.vin})
        })
        .catch(error => console.error('Error: ', error))
        .then(response => {
            console.log('Success: ', response);
        })
    }
}