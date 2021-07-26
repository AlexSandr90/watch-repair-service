const masters = [
    {
        id: 'Vasya_Dnipro-1',
        name: 'Vasya',
        rating: 3,
        city: 'Dnipro',
        schedule: [
            {
                id: 'Vasya_Dnipro-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Dnipro-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Dnipro-1_3',
                date: '',
                hours: []
            },
        ]
    },

    {
        id: 'Petro_Dnipro-2',
        name: 'Petro',
        rating: 4,
        city: 'Dnipro',
        schedule: [
            {
                id: 'Petro_Dnipro-2_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Dnipro-2_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Dnipro-2_3',
                date: '',
                hours: []
            },
        ]
    },
];

export default masters;