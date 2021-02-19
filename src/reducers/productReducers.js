import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'

export const productListReducer = ( state = { products: []}, action) =>{
    //this will switch between action types depending on the action type
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.paylaod }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.paylaod }

        //if this doesn't match any of the cases it will return the same state
        default:
            return state
    }
}