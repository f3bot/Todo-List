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
    const priorityBtn = document.querySelector('.task-properties-priority');

    item.addEventListener('click', (e) =>{
        spanTarget.textContent = item.textContent;
        
        if(taskPropertiesContainer.classList.contains('not-visible')){
            taskPropertiesContainer.classList.remove('not-visible')
        }

        console.log("Here")

        renderSubtasks(item);
    })
}

const checkboxListener = (item) =>{
    const taskTitle = document.querySelector('.task-div-title');
    const taskRenderer = document.querySelector('.main-task-container-renderer');


    item.addEventListener('click', (e) =>{
        let currentDiv = item.parentNode;
        let childrenArray = Array.from(item.parentNode.parentNode.childNodes).indexOf(currentDiv);

        //console.log(currentDiv);
        //console.log(childrenArray);


        for(let i = 0; i < projectArray.length; i++){
            if(getCurrentProject() == projectArray[i].title){
                if(!projectArray[i].slaveTasks[childrenArray].done){
                    projectArray[i].slaveTasks[childrenArray].done = true;
                    currentDiv.classList.add('task-done');
                }else{
                    projectArray[i].slaveTasks[childrenArray].done = false;
                    currentDiv.classList.remove('task-done');
                }

                console.log(projectArray[i].slaveTasks[childrenArray].title);
                console.log(projectArray[i].slaveTasks[childrenArray].done);
            }
        }
    })
}

export{addTaskListener, addTaskDivListener, checkboxListener}