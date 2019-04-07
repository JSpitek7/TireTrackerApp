let initialState = []
const truckModel =(state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_TRUCK_MODELS':
            return state
        case 'RECEIVE_TRUCK_MODELS':
            return action.models
        default:
            return state
    }
}
export default truckModel