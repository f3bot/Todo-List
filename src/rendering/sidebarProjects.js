import { projectArray } from "../miscellaneous/variables/projectArray"

const renderSidebarProjects = () =>{
    const projectContainer = document.querySelector('.sidebar-project-selector');

    const container = document.createElement('div');
    container.classList.add('sidebar-projects-container')

    for(let i = 0; i < projectArray.length; i++){
        const span = document.createElement('span')
        span.textContent = projectArray[i].title;

        container.appendChild(span);
    }

    projectContainer.appendChild(container);
}

export{renderSidebarProjects}