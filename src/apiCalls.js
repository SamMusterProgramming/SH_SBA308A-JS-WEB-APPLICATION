import axios from "axios";







//AXIOS FOR GENERAL PHOTOS API
const baseGeneralPhotoURL = "https://api.unsplash.com";
const API_KEY = "_u3Nnmb8WOBfOH7z8aguYw6Gapayz9cKApQ4ZJ_ZMRo"
const axiosGPhotoApiUrl = axios.create({
  baseURL:baseGeneralPhotoURL
});

// AXIOS FOR DOG API
const baseDogURL = "https://api.thedogapi.com/v1";
const DOG_API_KEY =`live_CSz0V7yJwznYJztA3oM9QAs5FVTHIRQUUBDmTbX1e7c2M9NEnw3nxbXUhd1dpEmW`;
const axiosDogApiUrl = axios.create({
  baseURL:baseDogURL
});
// fetch general photos
export async function getPosts(){
   return await axiosGPhotoApiUrl.get(`/photos?client_id=${API_KEY}`)
    .then(res => res.data)
}

export async function getRandom(){
  return await axiosGPhotoApiUrl.get(`/photos/random?client_id=${API_KEY}`)
  .then(res => res.data)
}


// fetch dog API 
export async function getBreeds(){
  return await axiosDogApiUrl.get(`/breeds?api_key=${DOG_API_KEY}`)
   .then(res => res.data
   )
}
export async function getDogs(breed){
  return await axiosDogApiUrl.get(`/images/search?limit=20&breeds=${breed}?client_id=${DOG_API_KEY}`)
   .then(res => res.data
   )
}


