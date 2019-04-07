const initialState = {
    licensePlate: '',
    truckModelId: '',
    alert: false,
    error: false
}
const addTruck =(state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TRUCK_LICENSE_PLATE':
            return Object.assign({}, state, {
                licensePlate: action.licensePlate
            })
        case 'UPDATE_TRUCK_MODEL':
            return Object.assign({}, state, {
                truckModelId: action.model
            })
        case 'SHOW_ALERT':
            return Object.assign({}, state, {
                alert: true
            })
        case 'HIDE_ALERT':
            return Object.assign({}, state, {
                alert: false
            })
        case 'THROW_ERROR':
            return Object.assign({}, state, {
                error:true
            })
        case 'HIDE_ERROR':
            return Object.assign({}, state, {
                error:false
            })
        default:
            return state
    }
}
export default addTruck