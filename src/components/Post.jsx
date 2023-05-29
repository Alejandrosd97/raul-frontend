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
              <p className='mb-2 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor cumque beatae voluptatum nemo quaerat inventore reiciendis unde rem? Nulla minus pariatur, aperiam maxime eveniet sint sit dolor quibusdam amet neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed possimus accusamus, sequi illo molestiae iste architecto nisi! Deserunt, ea, laborum magnam id ab lsknsln wlinivsiovnd sdionsioonvv soicsoicnsov soidvsiovs soivosivn consequatur quas commodi, at accusamus eum hic. </p>
              <small className='post-date'>{props.data.date.split('T')[0]}</small>
            </div>
        </Link>
    </div>
  )
}
