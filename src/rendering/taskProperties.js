import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";

const renderSubtasks = (item) =>{
    
    const container = document.querySelector('.task-properties-subtask-div');

    console.log(container)

    clearSubtasks();




    for(let i = 0; i < projectArray.length; i++){
        if(getCurrentProject() == projectArray[i].title){
            for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                console.log(projectArray[i].slaveTasks[0])
                if(projectArray[i].slaveTasks[j].title == item.textContent || projectArray[i].slaveTasks[j].title == item.title){
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

                        container.appendChild(div);
                    }
                }
            }
        }
    }


}

const clearSubtasks = () =>{
    const nodes = document.querySelectorAll('.subtasks-title-div');

    nodes.forEach((node) =>{
        node.remove();
    })

    
    
}

export{renderSubtasks}