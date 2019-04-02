let initialState = []
const tireModel =(state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_MODELS':
            return state
        case 'RECEIVE_MODELS':
            return action.models
        default:
            return state
    }
}
export default tireModel