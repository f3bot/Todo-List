import { addTaskDivListener } from "../../listeners/taskContainer";
import { projectArray } from "../../miscellaneous/variables/projectArray";
import { clearContainer } from "../mainContent";

const prioTaskCounter = () =>{
    let counter = 0;

    for(let i = 0; i < projectArray.length; i++){
        for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
            if(projectArray[i].slaveTasks[j].priority == true){
                counter++;
            }
        }
    }

    console.log("counter, ", counter);
    
    
    if(counter > 0 ){
        return true;
    }else{return false};

}

const renderImportant = () =>{
    const mainContainer = document.querySelector('.main-task-container-renderer');
    const mainNavSpan = document.querySelector('.main-navigator-span');
    mainNavSpan.textContent = 'Important';
    const mainTaskProperties = document.querySelector('.main-task-properties');
    mainTaskProperties.classList.add('not-visible');
    const mainNavigator = document.querySelector('.main-navigator-delete');
    mainNavigator.classList.add('not-visible');

    clearContainer();


    for(let i = 0; i < projectArray.length; i++){
        console.log(projectArray[i].title)
        

        for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
            if(projectArray[i].slaveTasks[j].priority == true && projectArray[i].slaveTasks[j].done == false){
                const divContainer = document.createElement('div'); 
                divContainer.classList.add('task-div');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                const span = document.createElement('span');
                span.textContent = projectArray[i].slaveTasks[j].title;
                console.log(projectArray[i].slaveTasks[j]);

                divContainer.appendChild(checkbox);
                divContainer.appendChild(span);

                addTaskDivListener(span);

                mainContainer.appendChild(divContainer)
                
            }
        }
    }

}

export{renderImportant, prioTaskCounter}