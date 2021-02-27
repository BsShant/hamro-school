import { takeLatest, call, put, all } from 'redux-saga/effects';
import { START_USER_AUTHENTICATION, START_USER_LOGOUT } from './authActionTypes';
import { userToken, authUser, userAuthFailure, userAuthSuccess, userLogoutSuccess, userLogoutFailure } from './auth.action';
import { login, getUser, logout } from '../../utils/fetch';
export function* userLogin(values){

    try {
        let fetchData = yield login(values.payload);
        yield put(userToken(fetchData.token))
        yield call(getUserData, fetchData.token)
    } catch (error) {
        yield put(userAuthFailure(error))
    }
}
export function* getUserData(token){
    try {
        let fetchData = yield getUser(token)
        yield put(authUser(fetchData.data))
        yield put(userAuthSuccess())
    } catch (error) {
        yield put(userAuthFailure(error))
    }

}

export function* userLogout(){
    try {
        let fetchData = yield logout()
        yield put(userToken(fetchData.token))
        yield put(authUser(fetchData.data))
        yield put(userLogoutSuccess())
    } catch (error) {
        yield put(userLogoutFailure(error))
    }
}

export function* startUserAuth(){
    yield takeLatest(START_USER_AUTHENTICATION,userLogin)
}

export function* startUserLogout(){
    yield takeLatest(START_USER_LOGOUT, userLogout)
}

export function* authMode(){
    yield all([call(startUserAuth), call(startUserLogout)])
}