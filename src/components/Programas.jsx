import {React, useState, useEffect} from 'react'
import Programm from './Programm'
import '../css/programas.css'
import {useNavigate} from 'react-router-dom'




export default function Programas() {
  const [filtro, setFiltro] = useState('todos')
  const navigate = useNavigate()

  const [programms, setProgramms] = useState([])
  const token = JSON.parse(localStorage.getItem('token'))


    useEffect(() => {
    fetch('https://pagina-raul.vercel.app/api/programm',{
      headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data)
       if (data.error === 'invalid token'){
            localStorage.removeItem('token')
            navigate('/login')
          }
            else{
              setProgramms(data.programms)
            }
    }
      )
  }, [])

  function filtrarProgramas(filter){
    setFiltro(filter)
  }

  const programmsFilterArray = programms.filter((p)=>{
  if (filtro === 'todos'){
    return true
  }
  else{
    return p.category === filtro
  }})

  const programmsArray = programmsFilterArray.map((p)=>{
    return <Programm key={p.id} data={p}/>
  })



  return (
    <div className='patients-container'>
      <h1>PROGRAMAS</h1>
      
      <ul className='filtros'>
          <li className={filtro === 'todos'? 'filtro-active': ''} value='todos' onClick={()=>filtrarProgramas('todos')}>Todos</li>
          <li className={filtro === 'yoga'? 'filtro-active': ''} value='yoga' onClick={()=>filtrarProgramas('yoga')}>Yoga</li>
          <li className={filtro === 'rehabilitacion'? 'filtro-active': ''} value='rehabilitacion' onClick={()=>filtrarProgramas('rehabilitacion')}>Rehabilitacion</li>
          <li className={filtro === 'ejercicio'? 'filtro-active': ''} value='ejercicio' onClick={()=>filtrarProgramas('ejercicio')}>Ejercicio</li>
          </ul>
      <div className="video-container">
        {programmsArray}    
         
      </div>
    </div>
  )
}
