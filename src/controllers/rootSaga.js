import { delay, put, select, takeEvery } from 'redux-saga/effects';


function* loginRequest(action) {

    try {
        const { user, password, flag } = action.data;
        const getDataReducer = yield select((state) => state.users);

        const findUser = getDataReducer.find((e) => e.username === user || e.password === password);


        if (findUser && Object.keys(findUser).length > 0) {

            if (findUser.username === user && findUser.password === password) {
                action.loginLoading()
                yield delay(300)
                yield put({
                    type: 'LOGIN_IN_SUCCESS',
                    data: flag
                })
            }
            if (findUser.username !== user) {
                action.openNotificationUser('error')
            }

            if (findUser.password !== password) {
                action.openNotificationPassword('error')
            }
        } else {
            action.openNotificationUserPassword('error')
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
    yield put({
        type: 'LOGOUT_SUCCESS',
        data: false,
    })
    yield delay(400)
    if (action.data === false) {
        action.redirectToLogin()
    }
}



function* sigupRequest(action) {

    yield put({
        type: 'SIGNUP_SUCCESS',
        user: action.data,
    });


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