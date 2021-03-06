import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
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
            `${REACT_APP_SERVER_URL}/api/users/login/`,
            {'username' : email, 'password': password},
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

export const logout = () => ( dispatch ) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

//register or signup action
export const register = (name, email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST,           
        })

        const config = { 
            headers:{
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post(
            `${REACT_APP_SERVER_URL}/api/users/register/`,
            {'name': name , 'email' : email, 'password': password},
            config
        )

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

        //we want to login right after a user signs up a new account 
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({ 
            type: USER_REGISTER_FAIL, 
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })

    }
} 
