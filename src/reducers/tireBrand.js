let initialState = []
const tireBrand =(state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_BRANDS':
            return state
        case 'RECEIVE_BRANDS':
            return action.brands
        default:
            return state
    }
}
export default tireBrand