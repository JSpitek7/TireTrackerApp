let initialState = {
    tireModelId: '',
    tirePurchaseQuantity: '',
    tirePurchasePricePerUnit: '',
    tireVendorId: '',
    alert: false,
    error: false
}
const purchaseInfo =(state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PURCHASE_TIRE_MODEL':
            return Object.assign({}, state, {
                tireModelId: action.tireModelId
            })
        case 'UPDATE_PURCHASE_QUANTITY':
            return Object.assign({}, state, {
                tirePurchaseQuantity: action.tirePurchaseQuantity
            })
        case 'UPDATE_PURCHASE_PRICE_PER_UNIT':
            return Object.assign({}, state, {
                tirePurchasePricePerUnit: action.tirePurchasePricePerUnit
            })
        case 'UPDATE_PURCHASE_VENDOR_ID':
            return Object.assign({}, state, {
                tireVendorId: action.tireVendorId
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
export default purchaseInfo