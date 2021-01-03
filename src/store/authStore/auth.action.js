import { USER_TYPE } from './authActionTypes';

export const userType = (data)=>{
    return{
        type: USER_TYPE,
        payload: data
    }
}