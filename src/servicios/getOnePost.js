export const getOnePost = (postId, token, tokenOptions)=> {
    return fetch(`https://pagina-raul.vercel.app/api/post/${postId}`, token ? tokenOptions : {}
  )}
