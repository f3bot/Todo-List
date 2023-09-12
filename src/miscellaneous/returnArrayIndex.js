import { projectArray } from "./variables/projectArray"

const returnCurrentArrayIndex = (value) =>{
    for(let i = 0; i < projectArray.length; i++){
        if(projectArray[i].title == value){
            return i;
        }
    }
}

const returnCurrentTaskIndex = () =>{
    
}

export{returnCurrentArrayIndex}