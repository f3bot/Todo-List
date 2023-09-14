import { task } from "../classes/task";
import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";
import { renderSubtasks, resetView } from "../rendering/taskProperties";

const taskPropertiesNavButtonListeners = () =>{
    priorityBtn();
    deleteBtn();
    doneBtn();
}

const priorityBtn = () =>{
    const taskTitle = document.querySelector('.task-properties-title');
    const priorityBtn = document.querySelector('.task-properties-priority');

    priorityBtn.addEventListener('click', (e) =>{
        for(let i = 0; i < projectArray.length; i++){
            if(getCurrentProject() == projectArray[i].title){
                for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                    if(taskTitle.textContent == projectArray[i].slaveTasks[j].title){
                        if(projectArray[i].slaveTasks[j].priority == true){
                            projectArray[i].slaveTasks[j].priority = false; 
                        }else{projectArray[i].slaveTasks[j].priority = true; console.log(projectArray[i].slaveTasks[j].priority);}
                    }
                }
            }
        }


    })

}

const deleteBtn = () =>{
    const taskTitle = document.querySelector('.task-properties-title');
    const deleteBtn = document.querySelector('.task-properties-delete');
    const taskRenderer = document.querySelector('.main-task-container-renderer');
    const taskProperties = document.querySelector('.main-task-properties');

    deleteBtn.addEventListener('click', (e) =>{

        for(let i = 0; i < projectArray.length; i++){
            if(getCurrentProject() == projectArray[i].title){
                for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                    if(taskTitle.textContent == projectArray[i].slaveTasks[j].title){
                        projectArray[i].slaveTasks.splice(j , 1);
                        if(j == 0 && taskRenderer.childNodes.length >= 2){
                            renderSubtasks(taskRenderer.childNodes[j + 1]);
                        }else if(taskRenderer.childNodes.length == 1){
                            taskProperties.classList.add('not-visible');
                        }else if(taskRenderer.childNodes.length >= 2){
                            renderSubtasks(taskRenderer.childNodes[j - 1]);
                        }
                        taskRenderer.removeChild(taskRenderer.childNodes[j]);
                    }
                }
            }
        }


    })
}

const toggleTaskStatus = (taskTitle, taskRenderer) => {
    for (let i = 0; i < projectArray.length; i++) {
        if (getCurrentProject() == projectArray[i].title) {
            for (let j = 0; j < projectArray[i].slaveTasks.length; j++) {
                if (taskTitle.textContent == projectArray[i].slaveTasks[j].title) {
                    if (projectArray[i].slaveTasks[j].done) {
                        projectArray[i].slaveTasks[j].done = false;
                        taskRenderer.childNodes[j].classList.remove('task-done');

                        for(let k = 0; k < taskRenderer.childNodes.length; k++){
                            if(taskRenderer.childNodes[k].textContent == projectArray[i].slaveTasks[j].title){
                                taskRenderer.childNodes[k].childNodes[0].checked = false;
                            }
                        }
                    } else {
                        projectArray[i].slaveTasks[j].done = true;
                        taskRenderer.childNodes[j].classList.add('task-done');
                        
                        for(let k = 0; k < taskRenderer.childNodes.length; k++){
                            if(taskRenderer.childNodes[k].textContent == projectArray[i].slaveTasks[j].title){
                                taskRenderer.childNodes[k].childNodes[0].checked = true;
                            }
                        }
                    }
                }
            }
        }
    }
};


const doneBtn = () => {
    const taskTitle = document.querySelector('.task-properties-title');
    const doneBtn = document.querySelector('.task-properties-done');
    const taskRenderer = document.querySelector('.main-task-container-renderer');

    doneBtn.addEventListener('click', (e) => {
        toggleTaskStatus(taskTitle, taskRenderer);
    });
};



export{taskPropertiesNavButtonListeners, toggleTaskStatus}