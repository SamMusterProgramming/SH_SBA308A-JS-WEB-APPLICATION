import axios from "axios";


const API_KEY = 'uzspfFOdKNoTzjnSVZlDg3GNHFU8FBAVMcxbB1Ms'
const baseURL = ` https://api.nasa.gov/planetary/earth/assets/&api_key=${API_KEY}`;

const axiosApiUrl = axios.create({
  baseURL:baseURL
});

export async function getUpdate(){
   return await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?limit=20&sol=1000&api_key=${API_KEY
    }`)
    .then(res => res.data)
    
}