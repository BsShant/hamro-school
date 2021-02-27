import { authReducer } from './authStore/auth.reducer';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'authMode'
}
const rootReducer = combineReducers({
    authMode: authReducer,
})

export default persistReducer(persistConfig, rootReducer);