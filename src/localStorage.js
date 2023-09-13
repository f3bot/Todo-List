import { changeValue, projectArray } from "./miscellaneous/variables/projectArray"

const init = () =>{
    let projectArrayParsed = JSON.parse(localStorage.getItem("projectArray") || "[]");
    changeValue(projectArrayParsed);
}


export {init}