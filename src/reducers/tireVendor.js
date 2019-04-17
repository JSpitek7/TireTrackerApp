let initialState = []
const tireVendor =(state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_VENDORS':
            return state
        case 'RECEIVE_VENDORS':
            return action.vendors
        default:
            return state
    }
}
export default tireVendor