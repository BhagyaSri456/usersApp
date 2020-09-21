import { put, takeEvery, select } from 'redux-saga/effects';
import { loadUsers, totalPages } from '../actions/userDetailsActions';
import * as Api from './Api';

//worker saga
function* usersList(action) {
    const getPage = yield select(state => state.page);
    let response;
    try {
        response = yield Api.getUsersApi(getPage);
        if (response.status >= 200 && response.status <= 299) {
            yield put(loadUsers(response.data.data));
            debugger;
            yield put(totalPages(response.data.total_pages));
        }
    }
    catch (e) {
    }
}

//watcher saga
export function* getUserSaga() {
    yield takeEvery("GET_USERS", usersList);
}
