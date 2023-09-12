import { project } from "../classes/project";
import { renderNewlyCreatedProject } from "../components/sidebar/ProjectSelector";
import { getCurrentProject, setCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";
import { clearContainer, renderTasks } from "../rendering/mainContent";
import { renderSubtasks } from "../rendering/taskProperties";

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
                changePropertiesListenerNewlyAdded(document.querySelector('.sidebar-project-span'))

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
            renderTasks(element);
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

const changePropertiesListenerNewlyAdded = (item) =>{

    item.addEventListener('click', (e) =>{
        for(let i = 0; i < projectArray.length; i++){
            if(getCurrentProject() == projectArray[i].title){
                if(projectArray[i].slaveTasks.length == 0){
                    subtaskDiv.classList.add('not-visible');
                }else{
                    subtaskDiv.classList.remove('not-visible');
                }
            }
        }
    })
}


const changePropertiesListener = () =>{
    const domElements = document.querySelectorAll('.sidebar-project-span');
    const subtaskDiv = document.querySelector('.main-task-properties');
    const subtaskTitle = document.querySelector('.task-properties-title');
    const subtaskNavigator = document.querySelector('.main-task-properties-nav')
    const mainNavigator = document.querySelector('.main-navigator-span');

    domElements.forEach((element) =>{
        element.addEventListener('click', () =>{
            for(let i = 0; i < projectArray.length; i++){
                if(getCurrentProject() == projectArray[i].title){
                    if(projectArray[i].slaveTasks.length == 0){
                        subtaskDiv.classList.add('not-visible');
                        subtaskNavigator.textContent = `Projects > ${element.textContent}`
                        mainNavigator.textContent = `${element.textContent}`;
                    }else{
                        subtaskDiv.classList.remove('not-visible');
                        subtaskTitle.textContent = projectArray[i].slaveTasks[0].title;
                        subtaskNavigator.textContent = `Projects > ${element.textContent}`
                        mainNavigator.textContent = `${element.textContent}`;
                        console.log("AAAAAAA")
                        renderSubtasks(projectArray[i].slaveTasks[0]);
                    }
                }
            }
        })
    })
}


export{formListeners, changeViewListener,changeViewListenerNewlyAdded,changePropertiesListenerNewlyAdded,changePropertiesListener}