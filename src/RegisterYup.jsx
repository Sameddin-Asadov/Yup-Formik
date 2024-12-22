import * as yup from 'yup'


export const RegisterYup = yup.object().shape({
   email: yup.string().required('Bu hisse bos kecile bilmez').email('Kecerli bir email daxil edin'),
   age : yup.number().required('bu hisse bos kecile bilmez').positive('Yasinizi duzgun qeyd edin').integer('Yasinizi tam ededle qeyd edin'),
   password : yup.string().required('Bu hisse bos kecile bilmez'),
   confirmpassword : yup.string().oneOf([yup.ref('password'),yup.password], "Sifreni tesdiq edin"),
   term : yup.boolean().required('Sertleri qebul edin')
})