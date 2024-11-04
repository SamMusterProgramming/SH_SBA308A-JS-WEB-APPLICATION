import { getUpdate } from "./apiCalls";
import {setUpTopBar} from "./navbar/nav"
import { setUpSideBar, sideBar } from "./sideBar/sideBar";

setUpTopBar();
// setUpSideBar();


const img = document.createElement('img');
img.src = getUpdate()

sideBar.appendChild(img)