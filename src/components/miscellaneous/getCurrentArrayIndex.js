import { projectArray } from "../../variables/projectArray"

let arrayIndex = 0;

const getCurrentArrayIndex = () =>{
    const navigator = document.querySelector('.main-navigator')
    for(let i = 0; i < projectArray.length; i++){
        if(navigator.textContent == projectArray[i].title){
            arrayIndex = i;
        }
    }
}

export {getCurrentArrayIndex, arrayIndex}