import { all, fork } from 'redux-saga/effects';
import { userSaga } from '../sagas/loginSaga';
import { registerSaga } from '../sagas/registerSaga';
import { getUserSaga } from '../sagas/GetUsersSaga';
import { userDetailsSaga } from '../sagas/userDetailsSaga';
import { userDeleteSaga } from '../sagas/deleteUserSaga';

export default function* rootSaga() {
    yield all(
        [fork(userSaga),
        fork(registerSaga),
        fork(getUserSaga),
        fork(userDetailsSaga),
        fork(userDeleteSaga)
        ]);
}