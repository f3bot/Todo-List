import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";
import { renderNewlyCreatedTask } from "../rendering/mainContent";
import { renderSubtasks } from "../rendering/taskProperties";
import { toggleTaskStatus } from "./taskPropertiesButtons";

const addTaskListener = () =>{
    const input = document.querySelector('.main-content-add-task')
    const parentContainer = document.querySelector('.main-task-container-renderer')
    const taskPropertiesContainer = document.querySelector('.main-task-properties');

    input.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            if(input.value == '' || input.value == null){
                console.log("Throw error here");
            }else{
                renderNewlyCreatedTask(parentContainer, input); 
            }
        }
    })

}

const addTaskDivListener = (item) =>{
    const spanTarget = document.querySelector('.task-properties-title');
    const taskPropertiesContainer = document.querySelector('.main-task-properties');


    item.addEventListener('click', (e) =>{
        spanTarget.textContent = item.textContent;
        
        if(taskPropertiesContainer.classList.contains('not-visible')){
            taskPropertiesContainer.classList.remove('not-visible')
        }

        renderSubtasks(item);
    })
}

const checkboxListener = (item) =>{
    const taskTitle = document.querySelector('.task-properties-title');
    const taskRenderer = document.querySelector('.main-task-container-renderer');


    item.addEventListener('click', (e) =>{
        toggleTaskStatus(taskTitle,taskRenderer)

    })
}

export{addTaskListener, addTaskDivListener, checkboxListener}