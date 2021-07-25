const masters = [
    {
        id: 1,
        name: 'Vasya',
        rating: 3,
        city: 'Dnipro',
        schedule: [
            {
                id: 1,
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 2,
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 3,
                date: '',
                hours: []
            },
        ]
    },

    {
        id: 2,
        name: 'Petro',
        rating: 4,
        city: 'Dnipro',
        schedule: [
            {
                id: 1,
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 2,
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 3,
                date: '',
                hours: []
            },
        ]
    },
];

export default masters;