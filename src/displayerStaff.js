
import { getBreeds, getDogs } from "./apiCalls"

//******* favourite section ******

// create favourite heart button here and export it to index.js
 export const  favouriteHeart = () => {
    let favButton = document.createElement('button')
        favButton.innerHTML = `<i class="fa fa-heart" style="font-size:38px;"></i>`
        favButton.style.position = "absolute"
        favButton.style.marginTop = "5px"
        favButton.style.marginRight = "5px"
        favButton.style.backgroundColor ="transparent"
        favButton.style.border ="none" 
        favButton.style.color = "lightpink"
        favButton.style.opacity = "70%";
        return favButton; 
}

// set up the dog breed selector 

export const selectBreed = document.querySelector('#breedSelect')

export function setUpBreedSelector() {
    getBreeds().then(data => {
    data.map(breed =>{
        const breedSelected = document.createElement('option')
        breedSelected.textContent = breed.name;
        selectBreed.appendChild(breedSelected);
    })
})
}


