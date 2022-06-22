const initialState = {
    users: [

        { id: '258ed77a-32fd-41a2-a1a4-2d4d26991efc', username: '1', password: '1' },
        // { id: '90c4e988-0c2c-4641-9052-4997b36041a7', username: '123', password: '123' },
        // { id: '3c3739a1-cbb5-4c17-b7d9-101ca26dc3a1', username: '12', password: '12' },
    ],
    flag: false,

}


const rootReducer = (state = initialState, action) => {
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
            return {
                ...state,
                users: [...state.users, action.user]
            }

        }

        case 'CHANGE_PASSWORD_NEW_SUCCESS': {

            return {
                ...state,
                users: action.data,
                flag2: false
            }
        }
        default:
            return state;
    }
}
export default rootReducer;