const formData = {
    defaultFields: {
        name: '',
        email: '',
        size: '',
        city: '',
        date: '',
        time: ''
    },
    errors: {
        nameError: 'Имя не может быть пустым',
        emailError: 'Email не может быть пустым',
        sizeError: 'Поле SIZE не может быть пустым',
        cityError: 'Поле CITY не может быть пустым',
        dateError: 'Выберите дату',
        timeError: 'Выберите время'
    },
    formDirty: {
        nameDirty: false,
        emailDirty: false,
        sizeDirty: false,
        cityDirty: false,
        dateDirty: false,
        timeDirty: false,
    },
    cities: ['Dnipro', 'Lviv', 'Kyiv', 'Ivano-Frankivsk', 'Odesa', 'Kharkiv'],
    sizes: ['Small', 'Medium', 'Large']

};

export default formData;