import React from 'react'
import { useEffect, useState,  Suspense } from 'react'

import fotoIndia from "../assets/imgs/fotoIndia.jpg"
import "../css//blog.css"
import Post from './Post'
import Pagination from './Pagination'
import { getAllPosts } from '../servicios/post'
import Navbar from './Navbar'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [filtro, setFiltro] = useState('todos')
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)


  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  let postsCurrentPage = currentPosts.map((post)=><Post key={post.id} data={post}/>)  


  function paginate (pageNumber) {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    getAllPosts()
    .then(res => res.json())
    .then(data=> {setPosts(data)}
      )
  }, [])

  function filtrarPosts(filter){
    setFiltro(filter)
  }


let postsAll = posts.filter((post)=>{
  if (filtro === 'todos'){
    return true
  }
  else{
    return post.category === filtro
  }
  
})
let postsFiltrados = postsAll.map((post)=><Post key={post.id} data={post}/>)  

  
  return (
    <div>
      <Navbar/>
      <h1>NUESTRO BLOG</h1>
        <img className='header-img' src={fotoIndia} alt="" />
        <h2 className='posts-h2'>ÚLTIMAS PUBLICACIONES</h2>
        <ul className='filtros'>
          <li className={filtro === 'todos'? 'filtro-active': ''} value='todos' onClick={()=>filtrarPosts('todos')}>Todos</li>
          <li className={filtro === 'fisioterapia'? 'filtro-active': ''} value='fisioterapia' onClick={()=>filtrarPosts('fisioterapia')}>Fisioterapia</li>
          <li className={filtro === 'vida'? 'filtro-active': ''} value='vida' onClick={()=>filtrarPosts('vida')}>Vida</li>
          <li className={filtro === 'deporte'? 'filtro-active': ''} value='deporte' onClick={()=>filtrarPosts('deporte')}>Deporte</li>
          </ul>
          
          <Suspense fallback={'Loading...'}>
        <div className='container'>
          {postsCurrentPage} 
        </div>
          </Suspense>

        <div className="pagination-container">
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>

    </div>
  )
}
