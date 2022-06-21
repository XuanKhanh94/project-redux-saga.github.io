//add object to array

// let initialState = {
//     users: [
//         { username: 'pxk@gmail.com', password: '123' },
//         { username: 'pxk1', password: '123' },
//         { username: 'pxk2', password: '123' },
//     ],
//     flag: false,

// }

// const oject = { username: 'demo', password: '123' };
// const state = initialState;
// const addObject = [...state.users, oject];
// console.log(addObject);
const initialState = {
    users: [
        { id: 'a63723c4-02ca-48d6-a447-080818a6b052', username: 'pxk1', password: '123' },
        { id: 'f07671d7-e5d5-428a-9831-3fb71ca34e64', username: 'xuankhanh379@gmail.com', password: '123' },
        { id: 'aaee00a0-9d4b-4946-9986-409591702075', username: 'pxk@gmail.com', password: '123' },
        { id: '63ab6eef-92ee-466b-a464-01dd9fac4593', username: 'pxk1@gmail.com', password: '123' },
    ],
    flag: false,

}
const data = initialState.users
console.log(data);
const new_item = { username: 'pxk', password: '123456' };
for (let i = 0; i < data.length; ++i) {
    console.log(initialState[i]);
    // console.log(new_item.username === initialState[i].username);
    // if (new_item.username === initialState[i].username) {
    //     new_item = initialState[i]
    //     console.log(new_item);
    // }
}

