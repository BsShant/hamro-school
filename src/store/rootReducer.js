import { toggleDrawer } from './drawerStore/drawer.reducer';
import { authReducer } from './authStore/auth.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    drawer: toggleDrawer,
    authUser: authReducer
})

export default rootReducer;