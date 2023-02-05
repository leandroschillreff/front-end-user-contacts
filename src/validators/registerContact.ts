import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('O campo nome é obrigatório!'),
  email: yup.string().email().required('O campo email é obrigatório!'),
  phone: yup.string().required('O campo phone é obrigatório!'),
});
