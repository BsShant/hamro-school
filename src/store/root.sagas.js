import { call, all } from 'redux-saga/effects';
import { authMode } from './authStore/auth.saga';

export default function* rootSaga(){
    yield all([
        call(authMode)
    ])
}