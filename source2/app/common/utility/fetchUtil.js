import fetch from "isomorphic-fetch";
export const  fetchUtil= (url,restInfo)=> {
    return fetch(url,restInfo)
      .then(response => ({ response }))
      .catch(error => ({ error }))
  }

