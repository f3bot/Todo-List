import { project } from "../classes/project";
import { projectArray } from "./variables/projectArray";


const fillWithProjects = () =>{
    const strings = ["chuj", "chuj 2", "chuj 3"];

    for(let i = 0; i < strings.length; i++){
        projectArray.push(new project(strings[i]));
    }

    console.log(projectArray)
}

export{fillWithProjects}