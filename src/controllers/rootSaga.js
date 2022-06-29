import axios from 'axios';
import { delay, put, select, takeEvery, call, takeLatest, takeLeading } from 'redux-saga/effects';
import userReceiveAbout from './actions/api/aboutApi';
import userReceiveContact from './actions/api/contactApi';
import userReceiveLogin from './actions/api/loginApi';








function* loginRequest(action) {

    try {
        const { user, password, flag } = action.data;
        const getDataReducer = yield select((state) => state.users);
        const findUser = getDataReducer.find((e) => e.username === user && e.password === password);

        if (findUser && Object.keys(findUser).length > 0) {

            if (findUser.username === user && findUser.password === password) {

                action.loginLoading()
                yield delay(100)
                yield put({
                    type: 'LOGIN_IN_SUCCESS',
                    data: action.data,
                    id: findUser.id,
                })
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

    yield call(axios.post, 'https://62b67dc76999cce2e8034ae4.mockapi.io/user', action.data)
    yield put({
        type: 'SIGNUP_SUCCESS',
    });


    action.handleSubmit()


}

function* forgotpasswordRequest(action) {
    try {
        const inputUser = action.data.userforgotpassword;
        const fetchDataUser = yield call(axios.get, 'https://62b67dc76999cce2e8034ae4.mockapi.io/user')
        const getData = fetchDataUser.data
        for (let i = 0; i < getData.length; i++) {
            if (getData[i].username === inputUser) {
                console.log(getData[i].username === inputUser);
                yield put({
                    type: 'ACCESS_PROVIDE_PASSWORD',
                    data: {
                        flag2: true,
                        id: getData[i].id
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

        yield call(axios.put, `https://62b67dc76999cce2e8034ae4.mockapi.io/user/${inputID}`, { password: newPassword })

        yield put({
            type: 'CHANGE_PASSWORD_NEW_SUCCESS',
        });

        action.handleRedirect()

    } catch (error) {

    }
}

function* rootSaga() {
    yield takeLeading('REQUEST_API_CONTACT', userReceiveContact)
    yield takeEvery('REQUEST_API_ABOUT', userReceiveAbout)
    yield takeEvery('REQUEST_API_LOGIN', userReceiveLogin)
    yield takeEvery('LOGIN_REQUEST', loginRequest)
    yield takeEvery('LOGOUT_REQUEST', logoutRequest)
    yield takeEvery('SEND_REQUEST_REGISTER', sigupRequest)
    yield takeLatest('REQUEST_PROVIDE_PASSWORD', forgotpasswordRequest)
    yield takeEvery('REQUEST_CHANGER_PASSWORD', changePasswordRequest)
}

export default rootSaga;