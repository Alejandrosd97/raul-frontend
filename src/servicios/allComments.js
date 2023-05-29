export const getAllComments = (postId)=>{
    return fetch(`https://pagina-raul.vercel.app/api/comment/${postId}`)
}