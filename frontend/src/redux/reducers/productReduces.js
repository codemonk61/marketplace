import * as actionType from "../constants/productConstants"

export const getProductsReducer = (state = {products: []}, action) => {
 switch(action.type){
    case actionType.GET_PRODUCTS_REQUEST:
        return {
            loading: true,
            products: []
        }
    case actionType.GET_PRODUCTS_SUCCESS:
        return {
            loading: false,
            products: action.payload
        }
    case actionType.GET_PRODUCTS_FAIL:
        return {
            loading: false,
            error: action.payload
        }
    default: 
        return state
 }
}

export const getProductDetailsReducers = (state = {product: {}}, action) => {
    switch(action.type) {
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true
            }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return  {
                loading: false,
                error: action.payload
            }
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return  {
                loading: false, 
                product: {}
            }
        default:
            return state
    }

}