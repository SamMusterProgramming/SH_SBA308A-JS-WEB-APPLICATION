import { getPosts } from "./apiCalls";
import {setUpTopBar} from "./navbar/nav"
import { setUpSideBar, sideBar } from "./sideBar/sideBar";

setUpTopBar();
// setUpSideBar();

 const wrapper1 = document.querySelector('#imgWrapper1')
 const wrapper2 = document.querySelector('#imgWrapper2')
 const wrapper3 = document.querySelector('#imgWrapper3');


function createPhoto(src) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.setAttribute('class', 'container-fluid d-flex'); 
    img.src = src ;
    img.style.minWidth= "100%"
    // img.style.minHeight = "10%"
    div.appendChild(img)
    return div ; 
}

getPosts().then((data) => { console.log(data)
    data.map((photo,index) => {
        if(index%3 == 0)   wrapper1.appendChild(createPhoto(photo.urls.small))
        if(index%3 == 1)   wrapper2.appendChild(createPhoto(photo.urls.small))
        if(index%3 == 2)   wrapper3.appendChild(createPhoto(photo.urls.small))
    })
})
 



