let initialState = {
    allTires: [],
    inStockTires: []
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
        default:
            return state
    }
}
export default tireModel