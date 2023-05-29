const sendComment =(e, form, postId) =>{
    e.preventDefault() 
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    }
    fetch(`https://pagina-raul.vercel.app/api/comment/${postId}`, config)
    .then(res=>res.json())
    .then((data)=>{
        window.location.reload();
    })
    .catch(e=> console.log(e))
}


