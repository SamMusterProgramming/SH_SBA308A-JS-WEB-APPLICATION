import axios from "axios";





const baseURL = "https://vigilant-space-parakeet-97j7wxg4pvj5cr6v-8080.app.github.dev";
const API_KEY = "_u3Nnmb8WOBfOH7z8aguYw6Gapayz9cKApQ4ZJ_ZMRo"
// const axiosApiUrl = axios.create({
//   baseURL:baseURL
// });

  


export async function getPosts(){
   return await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
    .then(res => res.data)
    
}