import axios from "axios";
import { call, put } from "redux-saga/effects";

function* userReceiveAbout(action) {
    const id = action.data;

    try {
        const data = yield call(axios.get, `https://62b67dc76999cce2e8034ae4.mockapi.io/infoabout/${id}`)

        yield put({
            type: 'RECEIVE_API_DATA_ABOUT',
            payload: data,
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default userReceiveAbout;