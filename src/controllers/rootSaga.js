import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';


function* loginRequest(action) {

    try {
        const infoInputUser = action.data;

        const getDataReducer = yield select((state) => state.users);

        for (let i = 0; i < getDataReducer.length; ++i) {

            if (getDataReducer[i].username === infoInputUser.user && getDataReducer[i].password === infoInputUser.password) {
                yield put({
                    type: 'LOGIN_IN_SUCCESS',
                    data: true
                })
            }
        }

    }

    catch (error) {
        yield put({
            type: 'LOGIN_REQUEST_FAILED',
            message: error.message
        })
    }
}

function* sigupRequest(action) {
    // console.log('signup request', action.data);
    yield put({
        type: 'SIGNUP_SUCCESS',
        user: action.data
    })
}

function* rootSaga() {
    yield takeEvery('LOGIN_REQUEST', loginRequest)
    yield takeEvery('SEND_REQUEST_REGISTER', sigupRequest)
}

export default rootSaga;