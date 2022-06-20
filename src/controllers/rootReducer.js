import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: [
        { id: 'a63723c4-02ca-48d6-a447-080818a6b052', username: 'pxk1', password: '123' },
        { id: 'f07671d7-e5d5-428a-9831-3fb71ca34e64', username: 'xuankhanh379@gmail.com', password: '123' },
        { id: 'aaee00a0-9d4b-4946-9986-409591702075', username: 'pxk@gmail.com', password: '123' },
        { id: '63ab6eef-92ee-466b-a464-01dd9fac4593', username: 'pxk1@gmail.com', password: '123' },
    ],
    flag: false,

}


const rootReducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                users: action.users,

            }
        }
        case 'ACCESS_PROVIDE_PASSWORD':
        case 'LOGIN_IN_SUCCESS': {
            return {
                ...state,
                flag: action.data,
            }
        }
        case 'SIGNUP_SUCCESS': {
            return {
                ...state,
                users: [...state.users, action.user]
            }





        }
        default:
            return state;
    }
}
export default rootReducer;