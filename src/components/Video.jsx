import React from 'react'
import stars from '/src/assets/imgs/stars.mp4'
import '../css/video.css'



export default function Video(props) {

  const token = JSON.parse(localStorage.getItem('token'))




  function borrarVideo(e){
    const confirm = window.confirm('¿Estás seguro de que quieres borrar este video?')
    if (confirm){
    fetch(`https://pagina-raul.vercel.app/api/video/${props.data.id}`, {
      method: 'DELETE',
      headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      window.location.reload()
    })
    }
      
  }

  return (
    <div>
        <div className="video-card">
            <video src={props.data.url} controls></video>
            <div className="video-information">
                <h3>{props.data.title}</h3>
                <small>{props.data.category}</small>
                {/* <p>{props.data.description}</p> */}
                {props.permission === true && <div className='video-btns'>
                  <button onClick={borrarVideo} className='btn btn-danger'>Borrar</button>
                  <button className='btn btn-warning'>Editar</button>
                </div>}
            </div>
        </div>
        
    </div>
  )
}
