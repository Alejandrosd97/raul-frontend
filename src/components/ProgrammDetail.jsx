import React, { useState } from 'react'
import '../css/programmDetail.css'
import { useEffect } from 'react'
import AcordionItem from './Accordion'
import { useParams} from 'react-router-dom'
import stars from '/src/assets/imgs/stars.mp4'




export default function ProgrammDetail() {
    const {programmId} = useParams()
    console.log(programmId)
    const token = JSON.parse(localStorage.getItem('token'))
    const [programm, setProgramm] = useState({})
    const [videos, setVideos] = useState([])

    

    useEffect(() => {
    fetch(`https://pagina-raul.vercel.app/api/programm/${programmId}`,{
      headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data=> {
     setProgramm(data.programm)
    }
      )
  }, [])

  useEffect(() => {
    fetch(`https://pagina-raul.vercel.app/api/programm/${programmId}/videos`,{
      headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data=> {
     setVideos(data.videos)
    }
      )
  }, [])

  let otherVideos

  if (videos){
    otherVideos = videos.slice(1)
    console.log(videos)
    console.log(otherVideos)
    }

  const accordionArray = otherVideos.map((v, index)=>{
    return <AcordionItem key={v.id} number={index} data={v}/>
  })

  return (
    <div className="my-container">
        <h1>{programm.title ? programm.title : ''}</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header accordion-h2" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {videos.length > 0 ?  videos[0].title : ''}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body accordion-flexbox">
        <video controls src={stars}></video>
        <div>
            <h3>Sesion 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt ab aperiam impedit itaque vero cum? Soluta tempore ipsa aliquam consequatur dolores, ad obcaecati consectetur necessitatibus, quaerat sequi accusamus impedit.</p>
        </div>
      </div> 
    </div>
  </div>
    {accordionArray}
</div>
</div>
  )
}
