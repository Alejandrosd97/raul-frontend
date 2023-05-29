import {React, useState, useEffect} from 'react'
import '../css/createPost.css'
import {useNavigate} from 'react-router-dom'
import Select from 'react-select'


export default function CreateVideo() {
    const token = JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate()

    useEffect(()=>{
        if (!token){
        navigate('/blog/login')
        }
    },[]
    )
    

    const [ form , setForm ] = useState({
        title:'', description:'' , category:''
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
        formData.append('video', fileInput.files[0])  
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('category', form.category)

            const config = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        }
        fetch('https://pagina-raul.vercel.app/api/video', config)
        .then(res=>res.json())
        .then(data=>{
            if (data.error === 'invalid token'){
                localStorage.removeItem('token')
                navigate('/login')
            }
            else{navigate('/pacientes')}
        })
        .catch(e=> console.log(e))
    }

    const options = [
        {value: 'ejercicio', label : 'Ejercicio'},
        {value: 'rehabilitacion', label : 'Rehabilitacion'},
        {value: 'yoga', label : 'Yoga'}

    ]

  return (
    <div className='post-contenedor'>
        <form onSubmit={enviarForm}>
            <label htmlFor="titulo">Título del video:</label>
            <input 
                id='titulo' 
                required
                name='title' 
                onChange={changeForm} 
                className="form-control" 
                type="text" />
            <label htmlFor="description">Descripción:</label>
            <textarea 
                className="form-control" 
                onChange={changeForm} 
                required
                name='description' 
                id='description'/>
             <Select
                className='mt-3'
                name='category'
                required
                placeholder='Categoría'
                options = {options}
                onChange={valueForm}/>
            
            <label className='mt-3' htmlFor='post-foto'>Añade el video en formato mp4:</label>
            <input 
                className='form-control ' 
                type='file' 
                id='file'
                name ='video'
                accept="video/mp4"/>
            
            <div className='create-post-btns  mt-3'>
                <button type='submit'
                    className='btn btn-primary'>Publicar</button>
                <button className='btn btn-danger'>Borrar todo</button>
            </div>
        </form>
    </div>
  )
}
