import axios from "axios";
import { call, put } from "redux-saga/effects";

function* userReceiveContact(action) {
    let id = action.data;
    try {

        const data = yield call(axios.get, `https://62b67dc76999cce2e8034ae4.mockapi.io/infocontact/${id}`);

        yield put({
            type: 'RECEIVE_API_DATA_CONTACT',
            payload: data,
        })

    } catch (error) {

        console.log(error.message);
    }
}
export default userReceiveContact;