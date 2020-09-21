import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { registerSuccess, registerFail } from '../actions/userDetailsActions';
import * as Api from './Api';

//worker saga
function* registerUser(action) {
    const userData = { email: action.email, password: action.password };
    let response;
    try {
        response = yield Api.registerApi(userData);
        if (response.status >= 200 && response.status <= 299) {
            yield put(registerSuccess({ info: '', status: true }))
        }
    }
    catch (e) {
        yield put(registerFail({ info: 'Please fill valid email & password', status: false }));
    }
}

//watcher saga
export function* registerSaga() {
    const action = yield takeEvery("USER_REGISTER", registerUser);
}