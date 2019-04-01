let initialState = []
const employee =(state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return state
        case 'RECEIVE_LOGIN':
            return action.employee
        default:
            return state
    }
}
export default employee