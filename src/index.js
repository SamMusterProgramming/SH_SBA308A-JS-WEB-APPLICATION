import { getPosts } from "./apiCalls";
import {setUpTopBar} from "./navbar/nav"
import { setUpSideBar, sideBar } from "./sideBar/sideBar";

setUpTopBar();
// setUpSideBar();

 const container = document.querySelector('#container')
 
getPosts().then((data) =>  console.log(data))
 
    
// 

