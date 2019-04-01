export function userLogin() {
    return {
        type: 'USER_LOGIN'
    }
}
export function userLogout() {
    return {
        type: 'USER_LOGOUT'
    }
}export function updateUsername(username) {
    return {
        type: 'UPDATE_USERNAME',
        username: username
    }
}
export function updatePassword(password) {
    return {
        type: 'UPDATE_PASSWORD',
        password: password
    }
}
export function requestLogin() {
    return {
        type: 'REQUEST_LOGIN'
    }
}
export function receiveLogin(json) {
    return {
        type: 'RECEIVE_LOGIN',
        employeeInfo: json
    }
}
