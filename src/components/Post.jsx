import React from 'react'
import fotoIndia from "../assets/imgs/fotoIndia.jpg"
import { useParams, Link, useLocation } from 'react-router-dom'


export default function Post(props) {
    const {postId} = useParams()
   
  return (
    <div className='post'>
        <Link to={`/blog/post/${props.data.id}`}>
            <div className='post-img'>
                <img src={props.data.image ? props.data.image : fotoIndia} alt="" />
            </div>
            <div className="post-text">
              <h3 className='post-title'>{props.data.title}</h3>
              <h5 className='post-category'>{props.data.category}</h5>
              <p className='mb-2 mt-3'>{props.data.content}</p>
              <small className='post-date'>{props.data.date.split('T')[0]}</small>
            </div>
        </Link>
    </div>
  )
}
