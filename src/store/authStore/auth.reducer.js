import { AUTH_USER,  START_USER_AUTHENTICATION, USER_LOGOUT_FAILURE, USER_LOGOUT_SUCCESS , START_USER_LOGOUT,  USER_AUTH_FAILURE,  USER_AUTH_SUCCESS,  USER_TOKEN } from './authActionTypes';
const INITIAL_STATE={
    userToken:'',
    authUser:null,
    authSpinner: false,
    error: null,
    logoutSpinner: false

}

export const authReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case START_USER_AUTHENTICATION:
            return{
                ...state,
                authSpinner: true
            }
        case USER_TOKEN:
            return{
                ...state,
                userToken:action.payload
            }
            case AUTH_USER:
            return{
                ...state,
                authUser:action.payload
            }
            case USER_AUTH_SUCCESS:
                return{
                    ...state,
                    error: null,
                    authSpinner: false
                }
            case USER_AUTH_FAILURE:
                return{
                    ...state,
                    error: action.payload,
                    authSpinner: false
                }
            case START_USER_LOGOUT:
            return{
                ...state,
                logoutSpinner: true
            }
            case USER_LOGOUT_SUCCESS:
                return{
                    ...state,
                    logoutSpinner: false,
                    error: null
                }
            case USER_LOGOUT_FAILURE:
                return{
                    ...state,
                    logoutSpinner: false,
                    error: action.payload
                }
        default:
            return state;
    }
}