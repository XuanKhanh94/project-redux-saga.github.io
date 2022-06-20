const initialState = {
    users: [
        { username: 'pxk1', password: '123' },
    ],
    flag: false,

}


const rootReducer = (state = initialState, action) => {
    // console.log('action', action.data);
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                users: action.users,

            }
        }
        case 'LOGIN_IN_SUCCESS': {
            return {
                ...state,
                flag: action.data
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