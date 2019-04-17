let initialState = {
    truckModels: [],
    trackedTrucks:[]
}
const truck =(state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_TRUCK_MODELS':
            return state
        case 'RECEIVE_TRUCK_MODELS':
            return Object.assign({}, state, {
                truckModels: action.models})
        case 'REQUEST_TRUCKS':
            return state
        case 'RECEIVE_TRUCKS':
            return Object.assign({}, state, {
                trackedTrucks: action.trackedTrucks})
        default:
            return state
    }
}
export default truck