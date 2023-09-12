import { renderNewlyCreatedTask } from "../rendering/mainContent";
import { renderSubtasks } from "../rendering/taskProperties";

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
                if(taskPropertiesContainer.classList.contains('not-visible')){
                    taskPropertiesContainer.classList.remove('not-visible');
                }
            }
        }
    })

}

const addTaskDivListener = (item) =>{
    const spanTarget = document.querySelector('.task-properties-title');

    item.addEventListener('click', (e) =>{
        spanTarget.textContent = item.textContent;

        renderSubtasks(item);
    })
}

export{addTaskListener, addTaskDivListener}