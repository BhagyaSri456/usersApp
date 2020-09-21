import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { loadUserData } from '../actions/userDetailsActions';
import * as Api from './Api';

//worker saga
function* userDetails(action) {
    let response;
    try {
        response = yield Api.userDetailsApi(action.userId);
        yield put(loadUserData(response.data.data));
    }
    catch (e) {
    }
}

//watcher saga
export function* userDetailsSaga() {
    yield takeEvery("USER_DETAILS", userDetails);
}