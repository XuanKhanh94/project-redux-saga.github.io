import axios from "axios";
import { put, call } from 'redux-saga/effects';


function* userReceiveLogin(action) {

    try {
        const data = yield call(axios.get, 'https://62b67dc76999cce2e8034ae4.mockapi.io/user')
        yield put({
            type: 'RECEIVE_API_DATA_LOGIN',
            payload: data,
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default userReceiveLogin;