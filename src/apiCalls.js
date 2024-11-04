import axios from "axios";



const baseURL = "https://vigilant-space-parakeet-97j7wxg4pvj5cr6v-8080.app.github.dev";

const axiosApiUrl = axios.create({
  baseURL:baseURL
});

export async function getPosts(){
   return await axios.get("http://localhost:8080/posts")
    .then(res => res.data)
    
}