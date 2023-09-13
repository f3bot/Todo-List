import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";

const renderSubtasks = (item) =>{
    
    const container = document.querySelector('.task-properties-subtask-div');
    const titleSpan = document.querySelector('.task-properties-title');

    clearSubtasks();


    for(let i = 0; i < projectArray.length; i++){
        if(getCurrentProject() == projectArray[i].title){
            for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                if(projectArray[i].slaveTasks[j].title == item.textContent || projectArray[i].slaveTasks[j].title == item.title){
                    titleSpan.textContent = projectArray[i].slaveTasks[j].title;
                    renderNotes(projectArray[i].slaveTasks[j].notes);
                    for(let k = 0; k < projectArray[i].slaveTasks[j].subtasks.length; k++){
                        const div = document.createElement('div');
                        div.classList.add('subtasks-title-div');

                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';


                        const span = document.createElement('span');
                        span.classList.add("subtask-title")
                        span.textContent = projectArray[i].slaveTasks[j].subtasks[k];

                        div.appendChild(checkbox);
                        div.appendChild(span);

                        console.log(span);

                        container.appendChild(div);
                    }
                }
            }
        }
    }


}

const renderNotes = (value_) =>{
    const notes = document.querySelector('.task-properties-text-area');

    notes.value = value_
}

const clearSubtasks = () =>{
    const nodes = document.querySelectorAll('.subtasks-title-div');

    nodes.forEach((node) =>{
        node.remove();
    })
}

const resetView = (index) =>{
    const taskRenderer = document.querySelector('.main-task-container-renderer');
    const taskProperties = document.querySelector('.main-task-properties');


    
/*
    if(taskRenderer.childNodes.length <= 1){
        taskProperties.classList.add('not-visible');
    }else if(taskRenderer.childNodes || taskRenderer.childNodes[index - 1]){
        renderSubtasks(taskRenderer.childNodes[index - 1]);
    }else{
        renderSubtasks(taskRenderer.childNodes[index])
    }
*/

if(taskRenderer.childNodes.length <= 1){
    taskProperties.classList.add('not-visible');
}else if(taskRenderer.childNodes[0]){
    console.log("first element")
}else{
    console.log("not first element")
}
}

export{renderSubtasks, resetView}