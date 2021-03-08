import axios from 'axios'
import { 
    //login
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    //logout
    USER_LOGOUT,
    //sign up or register
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    //details for updating the user
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL
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

//update profile action
export const getUserDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_DETAILS_REQUEST,           
        })
        
        const { userLogin : { userInfo } } = getState()

        const config = { 
            headers:{
                'Content-type': 'application/json',
                //need to get the authorizaion 'Bearer' token similar to postman
                Authorization: `Bearer ${userInfo.token}`,
            }
        }


        const { data } = await axios.get(
            `${REACT_APP_SERVER_URL}/api/users/${id}`,
            config
        )

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({ 
            type: USER_DETAILS_FAIL, 
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })

    }
} 