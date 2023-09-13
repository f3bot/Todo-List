import { returnCurrentArrayIndex } from "../miscellaneous/returnArrayIndex"
import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray"
import {task} from "../classes/task"
import { addTaskDivListener, checkboxListener } from "../listeners/taskContainer";
import { renderSubtasks } from "./taskProperties";

const renderTasks = (item) =>{
    
    const taskContaienr = document.querySelector('.main-task-container-renderer')

    for(let i = 0; i < projectArray.length; i++){
        if(item.textContent == projectArray[i].title){


            for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                const div = document.createElement('div');
                div.classList.add('task-div');
                if(projectArray[i].slaveTasks[j].done == true){
                    div.classList.add('task-done')
                }

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.role = 'checkbox';

                checkboxListener(checkbox);
                
    
                const span = document.createElement('span');
                span.textContent = projectArray[i].slaveTasks[j].title

                

                div.appendChild(checkbox);
                div.appendChild(span);

                addTaskDivListener(span);
                taskContaienr.appendChild(div);
            }
            
        }
    }
}

const clearContainer = () =>{
    const taskContaienr = document.querySelector('.main-task-container-renderer');

    while(taskContaienr.firstChild){
        taskContaienr.removeChild(taskContaienr.firstChild);
    }
}

const renderNewlyCreatedTask = (parent, input) =>{


    const div = document.createElement('div');
    div.classList.add('task-div');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.role = 'checkbox';
    checkboxListener(checkbox)
                
    const span = document.createElement('span');
    span.textContent = input.value


    div.appendChild(checkbox);
    div.appendChild(span);

    parent.appendChild(div);

    for(let i = 0; i <projectArray.length; i++){
        if(getCurrentProject() == projectArray[i].title){
            projectArray[i].slaveTasks.push(new task(input.value))
        }
    }

    addTaskDivListener(div);

    input.value = '';
}


export{renderTasks, clearContainer, renderNewlyCreatedTask}