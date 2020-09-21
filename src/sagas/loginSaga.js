import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setLogin, loginFail } from '../actions/userDetailsActions';
import * as Api from './Api';

//worker saga
function* validateUser(action) {
    const userData = { email: action.email, password: action.password };
    let response;
    try {
        response = yield Api.validateUserApi(userData);
        if (response.status >= 200 && response.status <= 299) {
            yield put(setLogin({ ...response.data, isLoggedIn: true, authError: null, email: action.email }))
        }
    }
    catch (e) {
        yield put(loginFail('Please enter valid email and password'));
    }
}

//watcher saga
export function* userSaga() {
    yield takeEvery("USER_FETCH", validateUser);
}