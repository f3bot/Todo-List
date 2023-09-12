import { changePropertiesListenerNewlyAdded } from "../listeners/sidebar";
import { projectArray } from "../miscellaneous/variables/projectArray"


const renderSidebarProjects = () =>{
    const projectContainer = document.querySelector('.sidebar-project-selector');

    console.log(projectArray)

    const container = document.createElement('div');
    container.classList.add('sidebar-projects-container')

    for(let i = 0; i < projectArray.length; i++){
        const span = document.createElement('span')
        span.textContent = projectArray[i].title;
        span.classList.add('sidebar-project-span')


        container.appendChild(span);
    }

    projectContainer.appendChild(container);
}

export{renderSidebarProjects}