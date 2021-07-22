const masters = [
    {
        name: 'Vasya',
        rating: 3,
        city: 'Dnipro',
        schedule: [
            {'2021-07-23': [8, 9, 10, 15, 18, 20]},
            {[`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`]: [8, 9, 10, 15, 18, 20]},
            {'': []},
        ]
    },

    {
        name: 'Petro',
        rating: 4,
        city: 'Dnipro',
        schedule: [
            {'2021-07-23': [9, 11, 13, 16, 19]},
            {[`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`]: [8, 11, 15, 18, 20]},
            {'': []},
        ]
    },
];

export default masters;