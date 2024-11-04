import {navLinks} from './Links.js'

export const topBar = document.querySelector('#topContainer');
export const bottomBar = document.querySelector('#bottomContainer');
let color = "white"
export function setUpTopBar() {
    navLinks.forEach(link => {
        console.log('i am here ')
        const a = document.createElement('a');
        a.textContent = `${link.text}`
        a.setAttribute('hred', link.href);
        topBar.appendChild(a);
    })
}

topBar.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    if(e.target.tagName.toLowerCase() != 'a') return ; 
    bottomBar.innerHTML ='';
    findSubLink(e.target.text).forEach(link => {
        const a = document.createElement('a')
        a.textContent = link.text;
        a.setAttribute('href',link.href)
        bottomBar.appendChild(a)
    })
    bottomBar.style.backgroundColor = color ; 
})

function findSubLink(text) {
    let subLink =[]
    navLinks.forEach(link => {
       if(link.text == text) {
        color = link.color;
        subLink = link.subLink;
       }
    })
    return subLink;
}