import axios from 'axios'
import { 
    CART_ADD_ITEM,
} from '../constants/cartConstants'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const addToCart = (id , qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`${REACT_APP_SERVER_URL}/api/product/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}