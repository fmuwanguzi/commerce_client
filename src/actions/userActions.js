import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstants'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST,           
        })

        const config = { 
            headers:{
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post(
            `${REACT_APP_SERVER_URL}/api/users/login/
            {'username' : email, 'password'}`,
            config
        )

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({ 
            type: USER_LOGIN_FAIL, 
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })

    }
} 