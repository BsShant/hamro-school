import { AUTH_USER, START_USER_AUTHENTICATION,USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE, USER_TOKEN, USER_AUTH_SUCCESS, USER_AUTH_FAILURE, START_USER_LOGOUT } from './authActionTypes';

export const userToken = (data)=>{
    return{
        type: USER_TOKEN,
        payload: data
    }
}

export const authUser = (data)=>{
    return{
        type: AUTH_USER,
        payload: data
    }
}

export const authProcessStarts = (emailandpassword)=>{
    return{
        type: START_USER_AUTHENTICATION,
        payload: emailandpassword
    }
}

export const userAuthSuccess = () =>{
    return{
        type: USER_AUTH_SUCCESS,
    }
}
export const userAuthFailure = (error) =>{
    return{
        type: USER_AUTH_FAILURE,
        payload: error
    }
}

export const logoutProcessStarts = (emailandpassword)=>{
    return{
        type: START_USER_LOGOUT,
    }
}

export const userLogoutSuccess = () =>{
    return{
        type: USER_LOGOUT_SUCCESS,
    }
}
export const userLogoutFailure = (error) =>{
    return{
        type: USER_LOGOUT_FAILURE,
        payload: error
    }
}