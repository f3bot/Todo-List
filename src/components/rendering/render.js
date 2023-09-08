import { projectArray } from "../../variables/projectArray"

const renderView = (string) =>{
    projectArray.forEach(project =>{
        if(project.title === string){
            console.log(project.slaveTasks)
        }
    })
}

export {renderView}