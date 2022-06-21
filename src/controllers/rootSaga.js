import { act } from 'react-dom/test-utils';
import { put, select, takeEvery, delay } from 'redux-saga/effects';


function* loginRequest(action) {

    try {
        const { user, password } = action.data;

        const getDataReducer = yield select((state) => state.users);
        for (let i = 0; i <= getDataReducer.length; i++) {
            if (getDataReducer[i].username === user && getDataReducer[i].password === password) {
                yield delay(1500)
                return (yield put({
                    type: 'LOGIN_IN_SUCCESS',
                    data: true
                }))

            }

            if (getDataReducer[i].username !== user) {
                return (action.openNotificationUser('error'))
            }

            if (getDataReducer[i].password !== password) {
                return (action.openNotificationPassword('error'))
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

function* logoutRequest(action) {
    yield delay(1000)
    yield put({
        type: 'LOGOUT_SUCCESS',
        data: false,
    })
}



function* sigupRequest(action) {
    // const inputSignup = action.data;
    // const infoReducer = yield select(state => state);
    // console.log(infoReducer);
    // console.log(action);
    yield put({
        type: 'SIGNUP_SUCCESS',
        user: action.data,
    });
    yield delay(1000)
    action.handleSubmit()

}

function* forgotpasswordRequest(action) {
    try {
        const inputUser = action.data.userforgotpassword;
        const getDataReducer = yield select((state) => state.users);
        for (let i = 0; i < getDataReducer.length; i++) {
            if (getDataReducer[i].username === inputUser) {

                yield put({
                    type: 'ACCESS_PROVIDE_PASSWORD',
                    data: {
                        flag2: true,
                        id: getDataReducer[i].id
                    }
                })
            }

        }

    } catch (error) {

    }
}

function* changePasswordRequest(action) {
    try {
        const inputID = action.data.id
        const newPassword = action.data.newpassword
        const infoReducerUser = yield select(state => state.users);

        const dataNew = [];
        for (let i = 0; i < infoReducerUser.length; i++) {
            dataNew[i] = infoReducerUser[i];
        }

        for (let j = 0; j < dataNew.length; j++) {
            if (dataNew[j].id === inputID) {
                dataNew[j].password = newPassword;
            }
        }
        yield put({
            type: 'CHANGE_PASSWORD_NEW_SUCCESS',
            data: dataNew,
        });
        yield delay(1000)
        action.handleRedirect()

    } catch (error) {

    }
}

function* rootSaga() {
    yield takeEvery('LOGIN_REQUEST', loginRequest)
    yield takeEvery('LOGOUT_REQUEST', logoutRequest)
    yield takeEvery('SEND_REQUEST_REGISTER', sigupRequest)
    yield takeEvery('REQUEST_PROVIDE_PASSWORD', forgotpasswordRequest)
    yield takeEvery('REQUEST_CHANGER_PASSWORD', changePasswordRequest)
}

export default rootSaga;