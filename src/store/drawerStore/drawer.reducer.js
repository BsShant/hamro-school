import { TOGGLE_LONG_DRAWER } from './drawerActionTypes';

const INITIAL_STATE={
    showDrawer: true
}

export const toggleDrawer = ( state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TOGGLE_LONG_DRAWER:
            return{
                ...state,
                showDrawer: !state.showDrawer
            }
       
        default:
            return state;
    }
}