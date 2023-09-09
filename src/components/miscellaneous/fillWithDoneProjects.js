import { project } from "../../classes/project"
import { projectListener } from "../../listeners/navbarListeners";
import { projectArray } from "../../variables/projectArray"


const fillProjects = () =>{
    let p = new project('project test');
    p.fillTasks();

    projectArray.push(p);

    const pcont = document.querySelector('.projects-container');

    const span = document.createElement('span');
    span.textContent = p.title;

    pcont.appendChild(span);

    projectListener(span)
}

export{fillProjects}