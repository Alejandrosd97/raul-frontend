import {React, useState, useEffect, useContext} from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'
import { IdiomaContext } from '../App'


export default function Login() {
  const navigate = useNavigate()
  const {setIsAdmin} = useContext(IdiomaContext)

  

  const [mistake, setMistake] = useState(false)
  const [form, setForm] = useState({
    user: '', password:''
  })

  function cambioInput(e){
    setForm(prev=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  function handleForm(e){
    e.preventDefault()
    const config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    fetch('https://pagina-raul.vercel.app/api/login', config)
    .then(res=> res.json())
    .then(data=> {
      if (data.error === 'username or password incorrect'){
        setForm(prev=>{
          return {...prev, password: ''}
        })
      }else{
        console.log(data.token)
        localStorage.setItem('token', JSON.stringify(data.token))
        setIsAdmin(data.isAdmin)

        navigate(`/pacientes`)     
      }})
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
              name='user' 
              required
              id='user' />
            <label htmlFor='password'>Contraseña:</label>
            <input 
              type="password" 
              onChange={(e)=>cambioInput(e)} 
              className='form-control' 
              value= {form.password || ''}
              required
              name='password' 
              id='password' />
            {mistake === true && <div className='text-danger mt-3'>Usuario o contraseña erróneos</div>}
          <button className='btn btn-primary mt-3' type='submit'>Iniciar sesión</button>
        </form>
    </div>
  )
}
