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
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
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
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Alex_Dnipro-3',
        name: 'Alex',
        rating: 5,
        city: 'Dnipro',
        schedule: [
            {
                id: 'Vasya_Dnipro-3_1',
                date: [`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Dnipro-3_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Dnipro-3_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Vasya_Kyiv-1',
        name: 'Vasya',
        rating: 4,
        city: 'Kyiv',
        schedule: [
            {
                id: 'Vasya_Kyiv-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Kyiv-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Kyiv-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Kolya_Kyiv-1',
        name: 'Kolya',
        rating: 3,
        city: 'Kyiv',
        schedule: [
            {
                id: 'Kolya_Kyiv-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Kolya_Kyiv-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Kolya_Kyiv-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Vasya_Lviv-1',
        name: 'Vasya',
        rating: 5,
        city: 'Lviv',
        schedule: [
            {
                id: 'Vasya_Lviv-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Lviv-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Lviv-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Petro_Lviv-1',
        name: 'Vasya',
        rating: 3,
        city: 'Lviv',
        schedule: [
            {
                id: 'Petro_Lviv-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Lviv-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Lviv-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Vasya_Ivano-Frankivsk-1',
        name: 'Vasya',
        rating: 3,
        city: 'Ivano-Frankivsk',
        schedule: [
            {
                id: 'Vasya_Ivano-Frankivsk-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Ivano-Frankivsk-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Ivano-Frankivsk-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Petro_Ivano-Frankivsk-1',
        name: 'Petro',
        rating: 3,
        city: 'Ivano-Frankivsk',
        schedule: [
            {
                id: 'Petro_Ivano-Frankivsk-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Ivano-Frankivsk-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Ivano-Frankivsk-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Vasya_Odesa-1',
        name: 'Vasya',
        rating: 3,
        city: 'Odesa',
        schedule: [
            {
                id: 'Vasya_Odesa-1_1',
                date: '2021-07-31',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Odesa-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Odesa-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Petro_Odesa-1',
        name: 'Petro',
        rating: 3,
        city: 'Odesa',
        schedule: [
            {
                id: 'Petro_Odesa-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Odesa-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Odesa-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Vasya_Kharkiv-1',
        name: 'Vasya',
        rating: 3,
        city: 'Kharkiv',
        schedule: [
            {
                id: 'Vasya_Kharkiv-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Kharkiv-1_2',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`],
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Vasya_Kharkiv-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },

    {
        id: 'Petro_Kharkiv-1',
        name: 'Petro',
        rating: 3,
        city: 'Kharkiv',
        schedule: [
            {
                id: 'Petro_Kharkiv-1_1',
                date: '2021-07-23',
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Kharkiv-1_2',
                date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
                hours: [8, 9, 10, 15, 18, 20]},
            {
                id: 'Petro_Kharkiv-1_3',
                date: [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() + 10}`],
                hours: [8, 9, 10, 15, 18, 20]
            },
        ]
    },
];

export default masters;