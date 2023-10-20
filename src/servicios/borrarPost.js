export const borrarPost = (postId, token)=>{
    const confirm = window.confirm('¿Estás seguro de que quieres borrar esta publicación?')
    if (confirm){
    fetch(`https://pagina-raul.vercel.app/api/post/${postId}`,{
      method: 'DELETE',
      headers :{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      })
      .then(res=>res.json())
      .catch((e)=>console.log(e))
    }
    }