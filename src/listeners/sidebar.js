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
    const formAddBtn = document.querySelector('.form-add-project-btn');

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

    formAddBtn.addEventListener('click', (e) =>{
        overlay.classList.toggle('visible');
        formContainer.classList.toggle('visible');

        projectArray.push(new project(formInput.value));
        renderNewlyCreatedProject(formInput.value);
    })

}

const changeViewListener = () =>{
    const todayContainer = document.querySelector('.today-container');
    const mainContent = document.querySelector('.main-container');
    const mainNavigator = document.querySelector('.main-navigator-span');
    const button = document.querySelector('.main-navigator-delete');
    

    const domElements = document.querySelectorAll('.sidebar-project-span');


    domElements.forEach((element) => {
        element.addEventListener('click', () => {

            const animationButton = document.querySelector('.today-next-button');
            setCurrentProject(element.innerHTML)
            todayContainer.classList.add('not-visible')
            mainContent.classList.add('visible')
            //animationButton.classList.add('not-visible');
            clearContainer();
            button.classList.remove('not-visible');
            renderTasks(element);
            animationButton.classList.add('ihatethisproject');
        });
    });
    
}

const changeViewListenerNewlyAdded = (item) =>{
    const todayContainer = document.querySelector('.today-container');
    const mainContent = document.querySelector('.main-container');
        item.addEventListener('click', () => {

            const animationButton = document.querySelector('.today-next-button');
            todayContainer.classList.add('not-visible')
            mainContent.classList.add('visible')
            //animationButton.classList.add('not-visible');
            clearContainer();
            renderTasks(item);
            setCurrentProject(item.innerHTML);

            animationButton.classList.add('ihatethisproject');

        });
}

const changePropertiesListenerNewlyAdded = (item) =>{
    const subtaskDiv = document.querySelector('.main-task-properties');
    const subtaskTitle = document.querySelector('.task-properties-title');
    const subtaskNavigator = document.querySelector('.main-task-properties-nav')
    const mainNavigator = document.querySelector('.main-navigator-span');

    item.addEventListener('click', (e) =>{
        for(let i = 0; i < projectArray.length; i++){
            if(getCurrentProject() == projectArray[i].title){
                if(projectArray[i].slaveTasks.length == 0){
                    subtaskDiv.classList.add('not-visible');
                    subtaskNavigator.textContent = `Projects > ${item.textContent}`
                    mainNavigator.textContent = `${item.textContent}`;
                }else{
                    subtaskDiv.classList.remove('not-visible');
                    subtaskTitle.textContent = projectArray[i].slaveTasks[0].title;
                    subtaskNavigator.textContent = `Projects > ${item.textContent}`
                    mainNavigator.textContent = `${item.textContent}`;
                    renderSubtasks(projectArray[i].slaveTasks[0]);
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
                        renderSubtasks(projectArray[i].slaveTasks[0]);
                    }
                }
            }
        })
    })
}


export{formListeners, changeViewListener,changeViewListenerNewlyAdded,changePropertiesListenerNewlyAdded,changePropertiesListener}