import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('O campo nome é obrigatório!'),
  email: yup
    .string()
    .required('O campo email é obrigatório!')
    .email('Insira um email válido!'),
  password: yup.string().required('O campo senha é obrigatório!'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais!').required('O campo comfirmar senha é obrigatório!'),
  phone: yup.string().required('O campo contato é obrigatório!'),
});
