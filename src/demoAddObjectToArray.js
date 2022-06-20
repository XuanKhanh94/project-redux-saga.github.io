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

const rows = [
    { id: 11, active: 'no' },
    { id: 22, active: 'yes' },
    { id: 33, active: 'no' },
    { id: 44, active: 'no' }
]

const new_item = { id: 22, active: 'yeah' };
rows.map((row) => {
    if (row.id === new_item.id) {
        row = new_item;
    }
    console.log(row);

    return row;
});

