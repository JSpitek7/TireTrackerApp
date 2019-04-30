let initialState = {
    allTires: [],
    inStockTires: [],
    tireDeathStatuses: []
}
const tireModel =(state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_ALL_MODELS':
            return state
        case 'RECEIVE_ALL_MODELS':
            return Object.assign({}, state, {
                allTires: action.models})
        case 'REQUEST_IN_STOCK_MODELS':
            return state
        case 'RECEIVE_IN_STOCK_MODELS':
            return Object.assign({}, state, {
                inStockTires: action.models})
        case 'REQUEST_TIRE_DEATH_STATUSES':
            return state
        case 'RECEIVE_TIRE_DEATH_STATUSES':
            return Object.assign({}, state, {
                tireDeathStatuses: action.statuses})
        default:
            return state
    }
}
export default tireModel