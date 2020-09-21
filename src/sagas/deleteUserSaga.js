import { put, takeEvery } from 'redux-saga/effects';
import { deleteUser } from '../actions/userDetailsActions';
import * as Api from './Api';

//worker saga
function* userDelete(action) {
    let response;
    try {
        response = yield Api.deleteUserApi(action.id);
        yield put(deleteUser());
    }
    catch (e) {
    }
}

//watcher saga
export function* userDeleteSaga() {
    yield takeEvery("DELETE_USER_DATA", userDelete);
}