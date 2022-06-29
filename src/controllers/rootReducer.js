const initialState = {
    users: [],
    contact: [],
    about: [],
    flag: false,

}


const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'RECEIVE_API_DATA_LOGIN': {
            return {
                ...state,
                users: action.payload.data
            }
        }

        case 'RECEIVE_API_DATA_ABOUT': {
            return {
                ...state,
                about: action.payload.data
            }
        }

        case 'RECEIVE_API_DATA_CONTACT': {
            return {
                ...state,
                contact: action.payload.data,
            }
        }

        case 'LOGOUT_SUCCESS':
        case 'LOGIN_IN_SUCCESS': {

            return {
                ...state,
                flag: action.data,
                user: action.data.user,
                id: action
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
            console.log(action);
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