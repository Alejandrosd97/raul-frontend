import {React, useState, useEffect} from 'react'
import '../css/createPost.css'
import {useNavigate, useParams} from 'react-router-dom'
import Select from 'react-select'
import Navbar from './Navbar'


export default function UpdatePost() {
    const token = JSON.parse(localStorage.getItem('token'))
    const {postId} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    console.log(post)
    const [ form , setForm ] = useState({
        title: post.title, content: post.content, category: post.category, imageUrl : post.image
    })


    useEffect(() => {
        fetch(`https://pagina-raul.vercel.app/api/post/${postId}`, {'Authorization': `Bearer ${token}`})
        .then(res => res.json())
        .then(data=> {
            setPost(data.post)}
    )
    }, [])
    
   
    function changeForm(){
        setForm(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function valueForm (value){
        setForm(prevFormData => {
            return {
                ...prevFormData,
                category: value.value
            }
        })
    }


    function enviarForm(e){
        e.preventDefault() 


        const formData  = new FormData();
        // const fileInput = document.getElementById('file')
        // formData.append('image', fileInput.files[0])
        // formData.append('title', form.title)
        // formData.append('content', form.content)
        // formData.append('category', form.category)
        const config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(form)
        }
        fetch(`https://pagina-raul.vercel.app/api/post/${postId}`, config)
        .then(
            navigate('/blog')
        )
        .catch(e=> {console.log(e)})
    }

    const options = [
        {value: 'fisioterapia', label : 'Fisioterapia'},
        {value: 'deporte', label : 'Deporte'},
        {value: 'vida', label : 'Vida'}

    ]

  return (
    <>
    <Navbar/>
    
    <div className='post-contenedor'>
        <form onSubmit={enviarForm}>
            <label htmlFor="titulo">Título del post:</label>
            <input 
                id='titulo' 
                name='title' 
                defaultValue= {post.title || ''}
                onChange={changeForm} 
                className="form-control mb-3" 
                type="text" />

            <label htmlFor="contenido">Contenido:</label>
            <textarea 
                className="form-control  mb-3" 
                onChange={changeForm} 
                defaultValue={post.content || ''}
                name='content' 
                id='contenido'/>

            <label htmlFor="category">Categoría:</label>
            <Select
                className=' mb-3'
                name='category'
                placeholder='Categoría'
                options = {options}
                required
                onChange={valueForm}/>
                

            <label htmlFor='post-foto'>Url de la imagen:</label>
            <input 
                className='form-control  mb-3' 
                type='text' 
                defaultValue= {post.image || ''}
                id='url'
                name='urlImage'
                onChange={changeForm} 

                />
            <div className='create-post-btns  mt-5'>
                <button  
                    type='submit'
                    className='btn btn-primary'>Guardar</button>
            </div> 
        </form>
    </div>
    </>
  )
}
