import axios from 'axios'
import { 
    //list
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    //details
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL 
} from '../constants/productConstants'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


//thunk allows as 2 have two arrow functions as well as set up dispatch
export const listProducts = () => async ( dispatch ) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST })
        
        const { data } = await axios.get(`${REACT_APP_SERVER_URL}/api/products/`)
        console.log('this is product data from the api', data)
        
        dispatch({ 
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
        

    }catch(error){
        dispatch({ 
            type: PRODUCT_LIST_FAIL, 
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listProductDetails = (id) => async ( dispatch ) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        
        const { data } = await axios.get(`${REACT_APP_SERVER_URL}/api/products/${id}/`)
        console.log('this is product data from the api', data)
        
        dispatch({ 
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
        

    }catch(error){
        dispatch({ 
            type: PRODUCT_DETAILS_FAIL, 
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}