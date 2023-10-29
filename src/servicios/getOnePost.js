export const getOnePost = (postId, token, tokenOptions)=> {
    return fetch(`http://localhost:3000/api/post/${postId}`, token ? tokenOptions : {}
  )}
