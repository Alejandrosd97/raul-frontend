import React from 'react'
import { sendComment } from '../servicios/enviarComment'


export default function Modal({form, changeForm, postId}) {
  return (
    <div className="modal fade" id="comentarioModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Déjanos un comentario</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={(e)=>sendComment(e, form, postId )}>
        <label htmlFor="nombre">Nombre:</label>
        <input 
            className='form-control'
            name='name'
            required
            onChange={changeForm} 
            type="text" 
            id='nombre' />
        <label htmlFor="comentario">Comentario:</label>
        <textarea 
            className='form-control' 
            id='comentario'
            required
            name='comment'
            onChange={changeForm} />
            <div className='mt-3 text-end'>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}
