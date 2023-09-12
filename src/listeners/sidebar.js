import { project } from "../classes/project";
import { renderNewlyCreatedProject } from "../components/sidebar/ProjectSelector";
import { getCurrentProject, setCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";
import { clearContainer, renderTasks } from "../rendering/mainContent";

const formListeners = () =>{
    const closeBtn = document.querySelector('.form-close-btn');
    const overlay = document.querySelector('.overlay');
    const formContainer = document.querySelector('.form-container');
    const addProjectButton = document.querySelector('.add-project-btn');
    const formInput = document.querySelector('.form-add-project-input');

    addProjectButton.addEventListener('click', (e) =>{
        formContainer.classList.toggle('visible');
        overlay.classList.toggle('visible');
    })


    closeBtn.addEventListener('click', (e) =>{
        overlay.classList.toggle('visible');
        formContainer.classList.toggle('visible');
    })

    overlay.addEventListener('click', (e) =>{
        overlay.classList.toggle('visible');
          formContainer.classList.toggle('visible');
    })

    formInput.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            if(formInput.value == '' || formInput.value == null){
                console.log("THROW ERROR HERE")
            }else{
                overlay.classList.toggle('visible');
                formContainer.classList.toggle('visible');

                projectArray.push(new project(formInput.value));
                renderNewlyCreatedProject(formInput.value);


                formInput.value = '';
            }
        }
    })
}

const changeViewListener = () =>{
    const todayContainer = document.querySelector('.today-container');
    const mainContent = document.querySelector('.main-container');

    const domElements = document.querySelectorAll('.sidebar-project-span');


    domElements.forEach((element) => {
        element.addEventListener('click', () => {
            setCurrentProject(element.innerHTML)
            todayContainer.classList.add('not-visible')
            mainContent.classList.add('visible')
            clearContainer();
            renderTasks(element)
        });
    });
    
}

const changeViewListenerNewlyAdded = (item) =>{
    const todayContainer = document.querySelector('.today-container');
    const mainContent = document.querySelector('.main-container');
        item.addEventListener('click', () => {
            todayContainer.classList.add('not-visible')
            mainContent.classList.add('visible')
            clearContainer();
            renderTasks(item);
            setCurrentProject(item.innerHTML);
        });
}

export{formListeners, changeViewListener,changeViewListenerNewlyAdded}