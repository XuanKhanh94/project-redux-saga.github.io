import { put, select, takeEvery, delay } from 'redux-saga/effects';


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
    const inputSignup = action.data;
    const infoReducer = yield select(state => state.users);
    console.log(inputSignup);
    console.log(infoReducer);
    yield put({
        type: 'SIGNUP_SUCCESS',
        user: action.data,
    });
    yield delay(5000)
    // for (let i = 0; i < infoReducer.length; i++) {
    //     console.log(inputSignup[i].username === infoReducer.username);
    //     if (inputSignup[i].username === infoReducer.username) {
    action.handleSubmit()

    //     }
    // }

    // console.log(infoReducer);


    // if (action.handleSubmit) {
    //     action.handleSubmit()
    // }

}

function* forgotpasswordRequest(action) {
    console.log('saga', action);
    try {
        const inputUser = action.data.userforgotpassword;
        const getDataReducer = yield select((state) => state.users);
        for (let i = 0; i < getDataReducer.length; i++) {
            if (getDataReducer[i].username === inputUser) {

                yield put({
                    type: 'ACCESS_PROVIDE_PASSWORD',
                    data: true
                })
            }

        }

    } catch (error) {

    }
}

function* rootSaga() {
    yield takeEvery('LOGIN_REQUEST', loginRequest)
    yield takeEvery('SEND_REQUEST_REGISTER', sigupRequest)
    yield takeEvery('REQUEST_PROVIDE_PASSWORD', forgotpasswordRequest)
}

export default rootSaga;