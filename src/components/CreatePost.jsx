import {React, useState, useEffect} from 'react'
import '../css/createPost.css'
import {useNavigate} from 'react-router-dom'
import Select from 'react-select'


export default function CreatePost() {
    const token = JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate()

    useEffect(()=>{
        if (!token){
        navigate('/login')
        }
    },[]
    )
    

    const [ form , setForm ] = useState({
        title:'', content:'' , category:'', image : ''
    })

    function changeForm(event){
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
        const fileInput =document.getElementById('file')
        formData.append('image', fileInput.files[0])  
        formData.append('title', form.title)
        formData.append('content', form.content)
        formData.append('category', form.category)

            const config = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        }
        fetch('https://pagina-raul.vercel.app/api/post', config)
        .then(res=>res.json())
        .then(data=>{
            if (data.error === 'invalid token'){
                localStorage.removeItem('token')
                navigate('/login')
                console.log('aqui')
            }
            else{
                console.log('aqui si')
                navigate('/blog')}
        })
        .catch(e=> console.log(e, e.name
            ))
    }

    const options = [
        {value: 'fisioterapia', label : 'Fisioterapia'},
        {value: 'deporte', label : 'Deporte'},
        {value: 'vida', label : 'Vida'}

    ]

  return (
    <div className='post-contenedor'>
        <form onSubmit={enviarForm}>
            <label htmlFor="titulo">Título del post:</label>
            <input 
                id='titulo' 
                required
                name='title' 
                onChange={changeForm} 
                className="form-control" 
                type="text" />
            <label htmlFor="contenido">Contenido:</label>
            <textarea 
                className="form-control" 
                onChange={changeForm} 
                required
                name='content' 
                id='contenido'/>
             <Select
                className='mt-3'
                name='category'
                required
                placeholder='Categoría'
                options = {options}
                onChange={valueForm}/>
            
            <label className='mt-3' htmlFor='post-foto'>Añade una foto de cabecera:</label>
            <input 
                className='form-control ' 
                type='file' 
                id='file'
                name = 'image'
                accept="image/png, image/jpeg, image/jpg"/>
            
            <div className='create-post-btns  mt-3'>
                <button type='submit'
                    className='btn btn-primary'>Publicar</button>
                <button className='btn btn-danger'>Borrar todo</button>
            </div>
        </form>
    </div>
  )
}
