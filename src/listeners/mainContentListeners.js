import { allTasks } from "../variables/allTasks";
import { task } from "../classes/task";
import { projectArray } from "../variables/projectArray";

const submitTaskListener = () =>{
    const form = document.querySelector('.submit-task-form');
    const input = document.querySelector('.task-title-input');
    const main_navigator = document.querySelector('.main-navigator')
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        allTasks.push(new task(input.value));

        for(let i = 0; i < projectArray.length; i++){
            if(projectArray[i].title === main_navigator.innerHTML ){
                projectArray[i].slaveTasks.push(new task(input.value));
                console.log("Slave tasks")
                console.log(projectArray[i].slaveTasks)
            }
        }

        input.value = '';
        console.log("all tasks => ")
        console.log(allTasks);
    })
}

const createAllListeners = () =>{
    submitTaskListener();
}

export{createAllListeners}