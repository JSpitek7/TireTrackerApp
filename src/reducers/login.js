const login =(state = {
    loggedIn: false,
    username: '',
    password: ''
}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return Object.assign({}, state, {
                loggedIn: true
            })
        case 'USER_LOGOUT':
            return Object.assign({}, state, {
                loggedIn: false
            })
        case 'UPDATE_USERNAME':
            return Object.assign({}, state,{
                username: action.username
            })
        case 'UPDATE_PASSWORD':
            return Object.assign({}, state, {
                password: action.password
            })
        default:
            return state
    }
}
export default login