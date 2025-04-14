import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/auth/authSlice';
import { useDispatch } from 'react-redux';


const schema = yup.object({
  name: yup.string().required('name is required'),
  email: yup.string().email('not email').required('email is required'),
  pswd: yup.string().min(8, "Password must be at least 8 characters"),
  Cpswd: yup.string()
    .oneOf([yup.ref("pswd"), null], "Passwords must match")
    .required("Confirm Password is required"),
})

export default function Logins() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data)=>{
    axios.post('http://localhost:8080/signup', data).then((res)=>{
      if (res.data.message === '0') {
        toast.error('🦄 email existe', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        toast.success('🦄 added user', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }
    })
  }

  const handleLogin = async (e)=>{
    e.preventDefault();
    await axios.post('http://localhost:8080/login', {email, password}).then((res)=>{
      if (res.data.message === '0') {
        toast.error('🦄 email incorrect', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else if (res.data.message === '1') {
        toast.error('🦄 password incorrect', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        dispatch(login())
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }
    })
  }
  return (
    <div className='aa'>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form onSubmit={handleLogin}>
            <label className='labelP' htmlFor="chk" aria-hidden="true">Login</label>
            <input className='inputD' value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="Email"  />
            <input className='inputD' value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder="Password"  />
            <button type="submit" className="site-btn" id='button'>Login</button>
          </form>
        </div>
        <div className="signup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className='labelP' htmlFor="chk" aria-hidden="true">Sign up</label>
            <input className='inputD' type="text" name="txt" placeholder="User name" {...register("name")} />
            <span style={{marginLeft:'70px'}} className='text-danger'>{errors.name?.message}</span>
            <input className='inputD' type="email" name="email" placeholder="Email" {...register("email")} />
            <span style={{marginLeft:'70px'}} className='text-danger'>{errors.email?.message}</span>
            <input className='inputD' type="password" name="pswd" placeholder="Password" {...register("pswd")} />
            <span style={{marginLeft:'70px'}} className='text-danger'>{errors.pswd?.message}</span>
            <input className='inputD' type="password" name="Cpswd" placeholder="Confirme Password" {...register("Cpswd")} />
            <span style={{marginLeft:'70px'}} className='text-danger'>{errors.Cpswd?.message}</span>
            <button id='button'>Sign up</button>
          </form>
        </div>

      </div>
      <ToastContainer />
    </div>


  )

}
