import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";

const mainNavigatorListeners = () =>{

    deleteProjectListener();
}

const deleteProjectListener = () =>{

    const deleteProject = document.querySelector('.main-navigator-delete');
    const navSpan = document.querySelector('.main-navigator-span');
    const todaySpan = document.querySelector('.sidebar-today');
    const projectsContianer = document.querySelector('.sidebar-projects-container');


    deleteProject.addEventListener('click', (e) =>{


        for(let i = 0; i < projectArray.length; i++){
            if(getCurrentProject() == projectArray[i].title){
                projectArray.splice(i, 1);

                projectsContianer.childNodes[i].remove();
                if(projectsContianer.childNodes[i - 1]){
                    projectsContianer.childNodes[i-1].click();
                }else{
                    todaySpan.click();
                }
            }
        }
        

    })
}

export{mainNavigatorListeners}