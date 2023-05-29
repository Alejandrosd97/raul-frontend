import {React, useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import fotoIndia2 from "../assets/imgs/fotoIndia2.jpg"
import '../css/blogDetail.css'
import { borrarPost } from '../servicios/borrarPost'
import { getAllPosts } from '../servicios/post'
import { getAllComments } from '../servicios/allComments'
import Comment from './Comment'
import Modal from './Modal' 
import { IdiomaContext } from '../App'


export default function BlogDetail(props) {
  const {isAdmin} = useContext(IdiomaContext)

  const {postId} = useParams()
  const [post, setPost] = useState({})
  const [form, setForm] = useState({name:'', comment:''})
  const [comments, setComments] = useState([])
  const [permission, setPermission] =useState('false')
  const [previousPostLink, setPreviousPostLink]= useState(false)
  const [nextPostLink, setNextPostLink]= useState(false)
  const [prevNextPost, setPrevNextPost] = useState([])
  const navigate = useNavigate()

  const token = JSON.parse(localStorage.getItem('token'))
  
  const tokenOptions = { 
    headers : {
      'Authorization': `Bearer ${token}`
    }
  }


  useEffect(() => {
      getAllPosts()
      .then(res => res.json())
      .then(data=> {
        const postActual =data.map(p => p.id).indexOf(postId)
        const prev = postActual -1
        const next = postActual +1
        if (postActual > 0 && postActual < data.length){
          setPrevNextPost([data[prev], data[next]])
        }
        else if (postActual >= data.length){
          setPrevNextPost([data[prev], null])
        }
        else{
          setPrevNextPost([null, data[next]])
        }
      })}, [])


  useEffect(() => {
  fetch(`https://pagina-raul.vercel.app/api/post/${postId}`, token ? tokenOptions : {}
  )
  .then(res => res.json())
  .then(data=> {
    setPost(data.post)
    if (data.isAuthorized === true){
      setPermission(true)
    }
  }
    ).catch(e =>console.log(e))
}, [])

  useEffect(() => {
      getAllComments(postId)
      .then(res => res.json())
      .then(data=> setComments(data))}, [])


  function changeForm(event){
    setForm(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
  }

  let commentsArray = comments.map((comment)=>{ 
    return <Comment key={comment.id} data={comment}/>})

  function borrar (){
    borrarPost(postId, token)
    navigate('/blog')
    location.reload()
  }
    
  return (
    <>

    {/* post anterior */}
    { prevNextPost[0] && <div className='post-previo'
      onMouseEnter={()=>setPreviousPostLink(true)}
      onMouseLeave={()=>setPreviousPostLink(false)}>
      <span className='link-previo'>POST PREVIO</span> 
      <div className={previousPostLink ? "foto-previo" : "foto-previo hidden" }>
        <img src='https://picsum.photos/400/300' alt="foto" />
        <div className='tarjeta-previo'>
          <h3 className='titulo-previo'>{prevNextPost[0]? prevNextPost[0].title : ''}</h3>
          <small className='small-lateral'>{ prevNextPost[0] ? prevNextPost[0].date.split('T')[0] : ''}</small>
          <a href={`http://127.0.0.1:5173/blog/post/${prevNextPost[0].id}`}><button>Leer publicación</button></a>
        </div>
      </div>
    </div>}


    {/* post siguiente */}

     {prevNextPost[1] && <div className='post-siguiente'
      onMouseEnter={()=>setNextPostLink(true)}
      onMouseLeave={()=>setNextPostLink(false)}>
      <div className={nextPostLink ? "foto-siguiente" : "foto-siguiente hidden" }>
        <img src='https://picsum.photos/400/300' alt="foto" />
        <div className='tarjeta-siguiente'>
          <h3 className='titulo-siguiente'>{prevNextPost[1].title}</h3>
          <small className='small-lateral'>{prevNextPost[1].date.split('T')[0]}</small>
          <a href={`http://127.0.0.1:5173/blog/post/${prevNextPost[1].id}`}><button>Leer publicación</button></a>
        </div>
      </div>
      <span className='link-siguiente'>POST SIGUIENTE</span> 
    </div>}




    <div className='contenedor-detalle mt-3'>
        { post.category && <span className='span-category'>{post.category}</span>}
        { post.title && <h1 className='titulo-detalle mt-0'>{post.title}</h1>}
        <img className='foto-principal mb-5' src={post.image ? post.image : fotoIndia2} alt="" />

        <div className="links-mobile">
        {prevNextPost[0] && <a href={`http://127.0.0.1:5173/blog/post/${prevNextPost[0].id}`}><button>{prevNextPost[0].title}</button></a>}  
        {prevNextPost[1] && <a href={`http://127.0.0.1:5173/blog/post/${prevNextPost[1].id}`}><button>{prevNextPost[0].title}</button></a>}  
        </div>

        {permission === true
        ? <div className='detail-btns'>
          <Link to={`/blog/post/edit/${post.id}`}>
            <button className='btn btn-warning'>Editar publicación</button>
          </Link>
          <button onClick={borrar} className='btn btn-danger'>Borrar publicación</button>
        </div>
        : null
        }
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi nulla, quasi repudiandae odit ad? Accusantium similique vitae non repellendus, cupiditate deserunt. Nobis doloribus debitis culpa dicta repellendus placeat nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi nulla, quasi repudiandae odit ad? Accusantium similique vitae non repellendus, cupiditate deserunt. Nobis doloribus debitis culpa dicta repellendus placeat nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis animi reiciendis perspiciatis natus harum culpa atque sint, quisquam mollitia modi possimus ex! Pariatur labore, aut aliquam numquam ratione dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni, quasi omnis atque nulla beatae vel ex hic nisi accusantium, doloribus numquam nostrum, odio ipsam vitae consectetur quae sint iure. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi nulla, quasi repudiandae odit ad? Accusantium similique vitae non repellendus, cupiditate deserunt. Nobis doloribus debitis culpa dicta repellendus placeat nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi nulla, quasi repudiandae odit ad? Accusantium similique vitae non repellendus, cupiditate deserunt. Nobis doloribus debitis culpa dicta repellendus placeat nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi nulla, quasi repudiandae odit ad? Accusantium similique vitae non repellendus, cupiditate deserunt. Nobis doloribus debitis culpa dicta repellendus placeat nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis animi reiciendis perspiciatis natus harum culpa atque sint, quisquam mollitia modi possimus ex! Pariatur labore, aut aliquam numquam ratione dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni, quasi omnis atque nulla beatae vel ex hic nisi accusantium, doloribus numquam nostrum, odio ipsam vitae consectetur quae sint iure. </p>
        
        
        <div className='comentarios'>

          <button type="button" className="boton-comentario mt-3" data-bs-toggle="modal" data-bs-target="#comentarioModal">
            ¡Déjanos un comentario!
          </button>
        </div>
        
        <Modal changeForm={changeForm} form={form} postId={postId}/>
        {commentsArray}
    </div>
    </>
  )
}
