import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstants'

 export const userLoginReducer = ( state = { }, action) => {
    //this will switch between action types depending on the action type
    
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        
        case USER_LOGOUT:
            return {} //resets the state so no user 

        //if this doesn't match any of the cases it will return the same state
        default:
            return state
    }
}