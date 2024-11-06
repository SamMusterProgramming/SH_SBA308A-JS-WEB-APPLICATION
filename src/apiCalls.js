import axios from "axios";





const baseURL = "https://api.unsplash.com/photos";
const API_KEY = "_u3Nnmb8WOBfOH7z8aguYw6Gapayz9cKApQ4ZJ_ZMRo"
const axiosApiUrl = axios.create({
  baseURL:baseURL
});

  


export async function getPosts(){
   return await axiosApiUrl.get(`/?client_id=${API_KEY}`)
    .then(res => res.data)
    
}