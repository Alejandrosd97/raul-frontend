export const borrarPost = (postId, token)=>{
    const confirm = window.confirm('¿Estás seguro de que quieres borrar esta publicación?')
    if (confirm){
    fetch(`https://pagina-raul.vercel.app/api/post/${postId}`,{
      method: 'DELETE',
      headers :{
        'Authorization': `Bearer ${token}`
      }
      })
    }
    }