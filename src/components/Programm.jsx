import React from 'react'
import '../css/programm.css'
import {Link} from 'react-router-dom'
import clinica_gandia from '/src/assets/imgs/clinica-g.jpg'


export default function Programm(props) {
  return (
      <div className="programm-card">
        <Link className='link' to={`/pacientes/${props.data.id}`} >
          <img src={clinica_gandia}></img>
          <div className="programm-information">
              <h3>{props.data.title}</h3>
              <small className='categoria'>{props.data.category}</small>
              <p>{props.data.description}</p>
              {props.permission === true && <div className='programm-btns'>
                <button onClick={borrarVideo} className='btn btn-danger'>Borrar</button>
                <button className='btn btn-warning'>Editar</button>
              </div>}
          </div>
        </Link>
      </div>
  )
}
