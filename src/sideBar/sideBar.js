import {sideBarLinks} from './links'


export const sideBar = document.querySelector('#sideBar');


export function setUpSideBar() {
  sideBarLinks.forEach(link => {
    const div = document.createElement('div');
    div.setAttribute('class','sideBarItem')
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link.href)
    const img = document.createElement('img')
    img.setAttribute('src',`${link.src}`) 
    anchor.appendChild(img);
    div.appendChild(anchor)
    sideBar.appendChild(div)
  })
}
