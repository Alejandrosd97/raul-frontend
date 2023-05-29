import React from 'react'
import '../css/video.css'
import stars from '/src/assets/imgs/stars.mp4'




export default function AcordionItem(props) {

  return (
    <div className="accordion-item">
    <h2 className="accordion-header accordion-h2" id={`heading${props.number}`}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.number}`} aria-expanded="false" aria-controls="collapseTwo">
        {props.data.title}
      </button>
    </h2>
    <div id={`collapse${props.number}`} className="accordion-collapse collapse" aria-labelledby={`headingTwo"${props.number}`} data-bs-parent="#accordionExample">
      <div className="accordion-body accordion-flexbox">
        <video controls src={stars}></video>
        <div>
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </div>
      </div> 
    </div>
  </div>
  )
}
