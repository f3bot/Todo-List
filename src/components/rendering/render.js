
import { task } from "../../classes/task";
import { clickOnTaskListener } from "../../listeners/mainContentListeners";
import { projectArray } from "../../variables/projectArray"
import { arrayIndex, getCurrentArrayIndex } from "../miscellaneous/getCurrentArrayIndex";

const renderView = () =>{
    const navigator = document.querySelector('.main-navigator')
    const parentContainer = document.querySelector('.task-renderer')
    removeAllChildren('.task-renderer');

    for(let i = 0; i < projectArray.length; i++){
        if(projectArray[i].title === navigator.textContent ){
            projectArray[i].slaveTasks.forEach(task =>{
                const parentDiv = document.createElement('div')
                parentDiv.classList.add('task-div')

                const containerUp = document.createElement('div');           
                containerUp.classList.add('task-div-up')


                const button = document.createElement('input');
                button.type = 'checkbox';
                button.role = 'checkbox';
                button.ariaChecked = false;
                button.classList.add('is-done-checkbox')

                const span = document.createElement('span');
                span.textContent = task.title;
                span.classList.add('task-title')

                containerUp.appendChild(button);
                containerUp.appendChild(span)

                parentContainer.appendChild(containerUp)

                const containerDown = document.createElement('div');

                const subTasksSpan = document.createElement('span');
                subTasksSpan.classList.add('subtasks-counter')

                containerDown.appendChild(subTasksSpan);

                parentDiv.appendChild(containerUp);
                parentDiv.appendChild(containerDown)

                parentContainer.appendChild(parentDiv)

                clickOnTaskListener(parentDiv);
            })
        }
    }
}


const renderNowAdded = (formInput) =>{
    const parentContainer = document.querySelector('.task-renderer');
    const span = document.createElement('span');
    span.textContent = formInput.value;
    parentContainer.appendChild(span);

}

const renderSubtasks = () => {
    const sTasksContainer = document.querySelector('.all-generated-subtasks');
    const taskTitle = document.querySelector('.task-properties-title')

    getCurrentArrayIndex();

    removeAllChildren('.all-generated-subtasks')

    for (let i = 0; i < projectArray[arrayIndex].slaveTasks.length; i++) {
        if(projectArray[arrayIndex].slaveTasks[i].title == taskTitle.textContent){
            console.log("found ", taskTitle.textContent)

            for(let j = 0; j < projectArray[arrayIndex].slaveTasks[i].subtasks.length; j++){
                console.log(projectArray[arrayIndex].slaveTasks[i].subtasks[j])

                const container = document.createElement('div');

                const input = document.createElement('input');
                input.type = 'checkbox';

                const span = document.createElement('span')
                span.textContent = projectArray[arrayIndex].slaveTasks[i].subtasks[j];

                container.appendChild(input);
                container.appendChild(span);

                sTasksContainer.appendChild(container)
            }
        }
    }
}

const removeAllChildren = (string) =>{
    const parentContainer = document.querySelector(string);

    while(parentContainer.firstChild){
        parentContainer.removeChild(parentContainer.firstChild);
    }
}

const renderTaskProperties = (task) =>{
    const taskPropTitle = document.querySelector('.task-properties-title');
    const taskMainTitle = document.querySelector('.task-title');
    const currentProjectSpan = document.querySelector('.main-navigator')

    getCurrentArrayIndex();

    for(let i = 0; i < projectArray[i].slaveTasks.length; i++){

    }
}
export {renderView, renderNowAdded,renderTaskProperties,renderSubtasks}