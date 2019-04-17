let initialState = {
    truckId: '',
    index: '',
    modelId: '',
    mileage: '',
    alert: false,
    error: false
}
const replacementInfo =(state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MILEAGE':
            return Object.assign({}, state, {
                mileage: action.mileage
            })
        case 'UPDATE_MODEL':
            return Object.assign({}, state, {
                modelId: action.model
            })
        case 'UPDATE_TRUCK_ID':
            return Object.assign({}, state, {
                truckId: action.truckId
            })
        case 'UPDATE_INDEX':
            return Object.assign({}, state, {
                index: action.index
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
export default replacementInfo