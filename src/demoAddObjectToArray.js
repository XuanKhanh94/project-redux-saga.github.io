let initialState = {
    users: [
        { username: 'pxk@gmail.com', password: '123' },
        { username: 'pxk1', password: '123' },
        { username: 'pxk2', password: '123' },
    ],
    flag: false,

}

const oject = { username: 'demo', password: '123' };
const state = initialState;
const addObject = [...state.users, oject];
console.log(addObject);