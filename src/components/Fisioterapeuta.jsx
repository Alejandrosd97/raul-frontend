import React from 'react'

export default function Fisioterapeuta(props) {
  return (
    <div className='fisio'>
        <img className='fotoFisio' src={props.foto}  />
        <div className='descripcion-fisio'>
            <h4>
                RAÚL MANZANO ROMERO
            </h4>
            <p className='numero-colegiado'>
                Nº Colegiado 1234
            </p>
            <p style={{margin:'0px'}}>
                {props.descripcion}
            </p>
        </div>
    </div>
  )
}
