import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import appointmentTime from '../js/appointment'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'



const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required(),
  })

export default function Appointments() {
    const [appoint, setAppoint] = useState({
      name:''
    })
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    // const T = JSON.parse(localStorage.getItem('appointment') || '[]')
    // let app = {id: T.length == 0 ? 1 : T.at(-1).id + 1, ...data}
    // T.push(app)
    // localStorage.setItem('appointment', JSON.stringify(T))
    if (params.id) {
      axios.put(`http://localhost:8080/appointment/${params.id}`, data).then((res)=>{
        if (res.data.message === 'update') {
          navigate('/listeAppoint')
        } else {
          toast.error('🦄 error update', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
    } else {
      axios.post('http://localhost:8080/appointment', data).then((res) => {
        if (res.data.message === '1') {
          toast.success('🦄 added success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        } else {
          toast.error('🦄 sorry your appointment not valide', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
    }


  }
  const params = useParams()
  useEffect(() => {
    if (params.id) {
      getProdById()
    }
    appointmentTime()

  },[params.id])
     
      const getProdById = (() => {
        axios.get(`http://localhost:8080/appointment/${params.id}`).then((res) => {
            setAppoint(res.data.appoints)
        })
      })
  // Function to format the time in 24-hour format with leading zero if needed


  return (

    <div>
      <div className="container">
        <h2>Prendre un rendez-vous</h2>
        <form onSubmit={handleSubmit(onSubmit)} method="post" className="appointment-form">
          <label htmlFor="name">Nom et Prénom:</label>
          <input type="text" {...register("name")} id="name" value={appoint?.name} onChange={(event) => setAppoint(event.target.value)} />
          <p className='text-danger' >{errors.name?.message}</p>
          <label htmlFor="email">Email:</label>
          <input type="email" {...register("email")} id="email" name="email" value={appoint?.email} onChange={(event) => setAppoint(event.target.value)} />
          <p className='text-danger'>{errors.email?.message}</p>
          <label htmlFor="phone">Numéro de téléphone:</label>
          <input type="tel" {...register("phone")} id="phone" name="phone" value={appoint?.phone} onChange={(event) => setAppoint(event.target.value)} />
          <p className='text-danger'>{errors.phone?.message}</p>
          <label htmlFor="phone">Date du rendez-vous:</label>
          <input id='date1' {...register("date")} name='date' value={appoint?.date} onChange={(event) => setAppoint(event.target.value)} placeholder="MM/DD/YYYY" />
          <p className='text-danger'>{errors.date?.message}</p>
          <label htmlFor="time">Heure du rendez-vous:</label>
          <select id="time"  {...register("time")} name="time" value={appoint?.time} onChange={(event) => setAppoint(event.target.value)}>
            <p className='text-danger'>{errors.time?.message}</p>
            <option></option> {/* Time options will be populated here by JavaScript */}
          </select>
          <p className='text-danger'>{errors.time?.message}</p>
          <button type="submit">Prendre Rendez-Vous</button>
        </form>
      </div>
        <ToastContainer />
    </div>
  )
}