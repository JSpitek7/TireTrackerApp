const tirePositions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
let initialState = []
tirePositions.forEach(i=>initialState.push({
    tirePositionIndex: i,
    tireModelId: ''
}))
const truckTire =(state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TRUCK_TIRE':
            return [
                ...state.slice(0, action.index-1),
                {tirePositionIndex:action.index,tireModelId:action.id},
                ...state.slice(action.index)
              ]
        default:
            return state
    }
}
export default truckTire