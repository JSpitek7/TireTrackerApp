const initialState = {
    truckLicensePlate: '',
    truckModelId: '',
    truckMileage: '',
    alert: false,
    error: false
}
const addTruck =(state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TRUCK_LICENSE_PLATE':
            return Object.assign({}, state, {
                truckLicensePlate: action.licensePlate
            })
        case 'UPDATE_TRUCK_MODEL':
            return Object.assign({}, state, {
                truckModelId: action.model
            })
        case 'UPDATE_TRUCK_MILEAGE':
            return Object.assign({}, state, {
                truckMileage: action.truckMileage
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