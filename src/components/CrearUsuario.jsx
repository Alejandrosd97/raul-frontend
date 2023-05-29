import {React, useState, useEffect} from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'


export default function CrearUsuario() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '', firstSurname:'' , secondSurname :''
  })

  function cambioInput(e){
    setForm(prev=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  function handleForm(e){
    e.preventDefault()
    console.log(form)
    const config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
//
    fetch('https://pagina-raul.vercel.app/api/user', config)
    .then(res=> res.json())
    .then(data=> {
      localStorage.setItem('token', JSON.stringify(data.token))
      navigate(`/pacientes`)})
    .catch(e=> console.log(e))
  }
  

  return (
    <div className='login-contenedor'>
        <form onSubmit={handleForm}>
            <label htmlFor='user'>Usuario:</label>
            <input 
              type="text" 
              onChange={(e)=>cambioInput(e)} 
              className='form-control' 
              name='name' 
              id='user' />
            <label htmlFor='firstSurname'>Primer apellido:</label>
            <input 
              onChange={(e)=>cambioInput(e)} 
              className='form-control' 
              name='firstSurname' 
              id='firstSurname' />
            <label htmlFor='secondSurname'>Segundo apellido:</label>
            <input 
              onChange={(e)=>cambioInput(e)} 
              className='form-control' 
              name='secondSurname' 
              id='secondSurname' />
          <button className='btn btn-primary mt-3' type='submit'>Crear usuario</button>
        </form>
    </div>
  )
}
