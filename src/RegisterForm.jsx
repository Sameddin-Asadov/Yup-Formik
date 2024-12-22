import React from 'react'
import { useFormik } from 'formik'
import { RegisterYup } from './RegisterYup'
function RegisterForm() {


const submit =  (values, action)=>{
setTimeout(()=>{
 action.resetForm( )
},2000)
}
    const {errors,handleChange ,handleSubmit,values} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password : '',
          confirmpassword :'',
          term :''
        },
      validationSchema:  RegisterYup,
      onSubmit :submit
      })
      


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div><label>Email :</label>
        <input type="text" onChange={handleChange} id='email' value={values.email}/>
        {errors.email && <p>{errors.email}</p>}
        </div>
        <div><label>Yasinzi Daxil edin</label>
        <input type="number" value={values.age} id='age' onChange={handleChange} />
        {errors.age && <p>{errors.age}</p>}
        </div>
        <div><label>Kodunzuu teyin edin</label>
        <input type="password"  id='password' value={ values.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}
        </div>
        <div><label>Kodunuzu tesdiq edin</label>
        <input type="password" id='confirmpassword' value={values.confirmpassword} onChange={handleChange} />
        {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
        </div>
        <div>
        <input type="checkbox"  id='term' value={ values.term} onChange={handleChange}/>
        <label>Isdifadeci setlerini qebul tediyivizi tesdiq edin </label>
        </div>
        <div>{errors.term && <p>{errors.term}</p>}</div>

        <button type='submit'>Qeydiyattdan kec </button>
      </form>
    </div>
  )
}

export default RegisterForm
