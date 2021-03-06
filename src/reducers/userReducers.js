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
    //details to populate the profile page of the user
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    //update the profile page
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

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

export const userRegisterReducer = ( state = { }, action) => {
    //this will switch between action types depending on the action type
    
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        
        case USER_LOGOUT:
            return {} //resets the state so no user 

        //if this doesn't match any of the cases it will return the same state
        default:
            return state
    }
}

export const userDetailsReducer = ( state = { user: {} }, action) => {
    //this will switch between action types depending on the action type
    
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }

        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        
        //if this doesn't match any of the cases it will return the same state
        default:
            return state
    }
}

export const userUpdateProfileReducer = ( state = { }, action) => {
    //this will switch between action types depending on the action type
    
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }

        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false,  success: true , userInfo: action.payload }

        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }

        case USER_UPDATE_PROFILE_RESET:
            return {}
        
        //if this doesn't match any of the cases it will return the same state
        default:
            return state
    }
}