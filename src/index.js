import { getPosts,getRandom } from "./apiCalls";
import {setUpTopBar} from "./navbar/nav"
import { setUpSideBar, sideBar } from "./sideBar/sideBar";


setUpTopBar();


let photoArray =[];
const displayer = document.querySelector('#displayer')
const wrapper1 = document.querySelector('#imgWrapper1')
const wrapper2 = document.querySelector('#imgWrapper2')
const wrapper3 = document.querySelector('#imgWrapper3');
const navigate = document.querySelector('#navigate');
const random = document.querySelector('#random')

// call the getPosts from module apiCalls.js to get data containing photos and display images in the wrappers 1 , 2 ,3 


// *****************when you click the button naviagte , images will be displayed *************************


navigate.addEventListener('click',(e)=>{
    displayer.innerHTML = ""
    displayer.appendChild(wrapper1);
    displayer.appendChild(wrapper2);
    displayer.appendChild(wrapper3)
    getPosts().then((data) => { 
        data.map((photo,index) => {
            photoArray = [...data]
            if(index%3 == 0)   wrapper1.appendChild(createPhoto(photo.urls.small,photo.alt_description, photo.user.name ))
            if(index%3 == 1)   wrapper2.appendChild(createPhoto(photo.urls.small,photo.alt_description ,photo.user.name  ))
            if(index%3 == 2)   wrapper3.appendChild(createPhoto(photo.urls.small,photo.alt_description ,photo.user.name ))
        })
     })
})

// clear the wrappers 
function clearWrapper(){
    wrapper1.innerHTML = "";    wrapper2.innerHTML = "";    wrapper3.innerHTML = "";
}

//  a function that create img element for each url we get from API call , plus descrition and its author
function createPhoto(src,description,author) {
    let div = document.createElement('div');
    div.style.backgroundColor = "black"
    let img = document.createElement('img');
    div.setAttribute('class',''); 
    img.src = src ;
    img.style.width= "100%"
    img.style.height = "350px"
    let descrip = document.createElement('div');
    descrip.innerHTML = `<span>DESCRIPTION</span><p>${description}</p>
                         <span>AUTHOR</span><p>${author}</p> `
    descrip.setAttribute('class','description')
    div.appendChild(img)
    div.appendChild(descrip)
    return div ; 
}


let selectedElement = [];
function mouseOverImage(wrapper){
    wrapper.addEventListener('mouseover',(e) => {
        e.preventDefault();
        if(e.target.tagName !== "IMG") return false ; 
        if (selectedElement.length != 0) { console.log(selectedElement)
            selectedElement[0].style.display = "none";
            selectedElement[1].style.height= "350px";
        }
        selectedElement.shift();selectedElement.shift()
        let img = e.target; 
        img.style.height = "250px";
        img.nextSibling.style.display ="block"
        selectedElement.push(img.nextSibling) ; 
        selectedElement.push(img);
})

}

mouseOverImage(wrapper1)
mouseOverImage(wrapper2)
mouseOverImage(wrapper3)


// random image of the day 

random.addEventListener('click',(e)=>{
    clearWrapper()
    displayer.innerHTML = ""
    getRandom().then((data) => {
        console.log(data)
        let img = document.createElement('img')
        img.src = data.urls.regular;
        img.style.width = "60%"
        img.style.height = "550px"
        displayer.appendChild(img)
    })
})
