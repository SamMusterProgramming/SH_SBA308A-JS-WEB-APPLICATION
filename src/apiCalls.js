import axios from "axios";





const baseURL = "https://api.unsplash.com";
const API_KEY = "_u3Nnmb8WOBfOH7z8aguYw6Gapayz9cKApQ4ZJ_ZMRo"
const axiosApiUrl = axios.create({
  baseURL:baseURL
});

const collection = "collections?page=1&query=office"


export async function getPosts(){
   return await axiosApiUrl.get(`/photos?client_id=${API_KEY}`)
    .then(res => res.data)
}

export async function getRandom(){
  return await axiosApiUrl.get(`/photos/random?client_id=${API_KEY}`)
  .then(res => res.data)
}