import { getPosts } from "./apiCalls";
import {setUpTopBar} from "./navbar/nav"
import { setUpSideBar, sideBar } from "./sideBar/sideBar";


setUpTopBar();
// setUpSideBar();
let photoArray =[];
const wrapper1 = document.querySelector('#imgWrapper1')
const wrapper2 = document.querySelector('#imgWrapper2')
const wrapper3 = document.querySelector('#imgWrapper3');

function createPhoto(src) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.setAttribute('class','container-fluid'); 
    img.src = src ;
    img.style.width= "100%"
    img.style.height = "350px"
    div.appendChild(img)

   
    return div ; 
}

getPosts().then((data) => { console.log(data)
    data.map((photo,index) => {
        photoArray = [...data]
        if(index%3 == 0)   wrapper1.appendChild(createPhoto(photo.urls.small))
        if(index%3 == 1)   wrapper2.appendChild(createPhoto(photo.urls.small))
        if(index%3 == 2)   wrapper3.appendChild(createPhoto(photo.urls.small))
    })
})
 


    wrapper1.addEventListener('mouseover',(e) => {
            e.preventDefault();
            let img = e.target; 
            img.style.height = "250px";
            let content = document.createElement('p')
            content.textContent = `Samir is good wooow`
            img.parentElement.appendChild(content)
    })




// <div class="tooltip"><img class="size_of_img"
//  src="https://babeltechreviews.com/wp-content/uploads/2018/07/rendition1.img_.jpg" alt="Image 1" /><span class="tooltiptext">grewon.pdf</span></div>

// <p>Note that the position of the tooltip text isn't very good. Check More Position <a href="https://www.w3schools.com/css/css_tooltip.asp">GO</a></p>

