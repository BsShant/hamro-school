import { USER_TYPE } from './authActionTypes';
const INITIAL_STATE={
    userType:''

}

export const authReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case USER_TYPE:
            return{
                ...state,
                userType:action.payload
            }
        default:
            return state;
    }
}