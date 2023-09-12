import { project } from "../../classes/project";

let projectArray = [new project("Personal")];

const changeValue = (array) =>{
    projectArray = array;
}

export {projectArray, changeValue}