import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: [
        // { id: '63ab6eef-92ee-466b-a464-01dd9fac4593', username: '1', password: '1' },
    ],
    flag: false,

}


const rootReducer = (state = initialState, action) => {
    console.log('reducer', state);
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                users: action.users,

            }
        }
        case 'LOGOUT_SUCCESS':
        case 'LOGIN_IN_SUCCESS': {
            return {
                ...state,
                flag: action.data,
            }
        }

        case 'ACCESS_PROVIDE_PASSWORD': {
            return {
                ...state,
                flag2: action.data.flag2,
                id: action.data.id
            }
        }
        case 'SIGNUP_SUCCESS': {
            console.log('SIGNUP_SUCCESS', [...state.users, action.user]);
            return {
                ...state,
                users: [...state.users, action.user]
            }

        }

        case 'CHANGE_PASSWORD_NEW_SUCCESS': {
            return {
                ...state,
                users: action.data,
            }
        }
        default:
            return state;
    }
}
export default rootReducer;