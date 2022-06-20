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

const rows =
    [
        { username: 'pxk', password: '123' },
        { username: 'pxk2', password: '123' },
        { username: 'pxk3', password: '123' },
        { username: 'pxk4', password: '123' }
    ]

const new_item = { username: 'pxk', password: '123456' };
rows.map((p) => {
    if (p.id === new_item.id) {
        p = new_item;
    }
    console.log(p);

    return p;
});

