import axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'


//thunk allows as 2 have two arrow functions as well as set up dispatch
const listProducts = () => async ( dispatch ) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get(`${REACT_APP_SERVER_URL}/api/products/`)

        dispatch({ 
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({ 
            type: PRODUCT_LIST_FAIL, 
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}