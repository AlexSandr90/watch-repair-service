import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'To short!')
        .max(16, 'Too long!')
        .required('Required!'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    city: Yup.string().required('Required'),
    size: Yup.string().required('Required')
});