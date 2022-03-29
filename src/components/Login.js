import classes from './Login.module.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import Forgot from './Forgot'
import Support from './Support';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { adduser } from '../store/user/user';
import email from '../store/user/email.json'
function Login() {
  console.log(email)
  localStorage.setItem("users",JSON.stringify(email))
  const user=useSelector(state=>(state.users))
  console.log("hello",user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [isLogin,setIsLogin]=useState(false)
  useEffect(()=>{
    if(isLogin){
      navigate('home')
    }
  },[isLogin])
  const initialValues={
    email:'',
    password:''
  }
  const onSubmit=values=>{
    // console.log('FormData',values)
    if(!isLogin){
      var data= JSON.parse(localStorage.getItem("users"))
      const isUserLogin=data.find((user)=>user.email==values.email && user.password==values.password)
      if(isUserLogin){
      dispatch(adduser({
        email:values.email, 
        password:values.password
      }))
      setIsLogin(true)
    }
    }
  }
  const validate=values=>{
    let errors={}
    
    if(!values.email){
      errors.email='User-Id cannot be blank'
    }
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
      errors.email='User-ID is not a valid email address.'
    }
    else if(!/.com/i.test(values.email)){
      errors.email='User-ID is not a valid email address.'
    }
    if(!values.password){
      errors.password='Password cannot be blank'
    }
    return errors
  }
  console.log(FormData)
  return (
      <div>
        <div className={ [ classes.Main ].join(' ') }>
          <div className={ [ classes.Image ].join(' ') }> 
            <br/>
            <img src={require('../images/Logo.png')} height={35} width={150} alt="world" /> 
          </div>
          <br/>
          <div className={ [ classes.Form ].join(' ') }>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            <Form noValidate>
              <label>User ID</label>
              <Field className={ [ classes.Field].join(' ') } type='email' name='email'/><br/>
              <ErrorMessage name="email" component={TextError}/>
              <label>Password</label>
              <Field className={ [ classes.Field ].join(' ') } type='password' name='password'/> <br/>
              <ErrorMessage name="password" component={TextError}/>
              <div>
               <input type="checkbox"/>
               <label className={ [ classes.forget ].join(' ') }> &nbsp; Stay Signed In</label>
               <label><Forgot/></label>
              </div>
              <br/>
              <div className={ [ classes.SignIn, 'd-grid gap-2' ].join(' ') }><Button variant="primary" type="submit">Sign In</Button></div>
             </Form>
             </Formik> 
            <br/>
          </div>
        </div> 
        <Support/>
       </div>
  )
}
export default Login