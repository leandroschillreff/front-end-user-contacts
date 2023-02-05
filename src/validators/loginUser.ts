import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .email('Deve ser um email')
    .required('O campo email é obrigatório!'),
  password: yup.string().required('Password é obrigatório!'),
});
