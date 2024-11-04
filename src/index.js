import { getUpdate } from "./apiCalls";
import {setUpTopBar} from "./navbar/nav"
import { setUpSideBar, sideBar } from "./sideBar/sideBar";

setUpTopBar();
// setUpSideBar();

 const container = document.querySelector('#container')
 
 getUpdate().then((data) => { console.log(data.photos)
    const photos = data.photos;
    photos.map((photo) =>{
        const div = document.createElement('div')
        div.style.width = '10%'
        div.style.height = '20%'
        const img = document.querySelector('#img')
        img.src = photo.img_src
        div.appendChild(img)
        container.appendChild(div)
    })
    

 }
    
)
    
// 

