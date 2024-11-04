import axios from "axios";


const API_KEY = 'uzspfFOdKNoTzjnSVZlDg3GNHFU8FBAVMcxbB1Ms'
const baseURL = ` https://api.nasa.gov/planetary/earth/assets/&api_key=${API_KEY}`;

const axiosApiUrl = axios.create({
  baseURL:baseURL
});

export function getUpdate(){
    axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=${API_KEY}`).then(res => res.data)
    
}