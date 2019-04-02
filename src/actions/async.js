import { userLogin,
        requestLogin,
        receiveLogin } from './index.js'
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