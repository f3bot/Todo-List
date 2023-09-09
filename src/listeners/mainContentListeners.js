import { allTasks } from "../variables/allTasks";
import { task } from "../classes/task";
import { projectArray } from "../variables/projectArray";
import { renderNowAdded, renderSubtasks, renderView } from "../components/rendering/render";

const clickOnTaskListener = (item) =>{
    const taskPropTitle = document.querySelector('.task-properties-title');
    item.addEventListener('click', (e) =>{
        taskPropTitle.textContent = item.textContent;
        renderSubtasks();


    })
}

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
            }
        }

        renderNowAdded(input);

        input.value = '';
        console.log("all tasks => ")
        console.log(allTasks);
    })
}



const addSubtaskInputItemListener = (item, parent) =>{
    const taskMainTitle = document.querySelector('.task-title');
    const taskPropTitle = document.querySelector('.task-properties-title')
    let arrIndex = 0;
    item.addEventListener('keypress', (e) =>{
        if(e.key === "Enter"){
            if(item.value === null || item.value == ''){
                console.log('hi')
            }else{
                const newSpan = document.createElement('span')
                newSpan.textContent = item.value;

                for(let i = 0; i < projectArray.length; i++){
                    if(taskMainTitle.textContent == projectArray[i].title){
                        arrIndex = i;
                    }
                }

                for(let i = 0; i < projectArray[arrIndex].slaveTasks.length; i++){
                    if(projectArray[arrIndex].slaveTasks[i].title == taskPropTitle.textContent){
                        projectArray[arrIndex].slaveTasks[i].subtasks.push(item.value);

                        console.log(projectArray[arrIndex])
                        console.log(projectArray[arrIndex].slaveTasks[i].subtasks);
                    }
                }

                

                item.parentNode.replaceChild(newSpan, item);

            }
        }
    })

    item.addEventListener('blur', (e) =>{
        if(item.value === null || item.value == ''){
            parent.remove();
        }else{
            const newSpan = document.createElement('span')
            newSpan.textContent = item.value;

            item.parentNode.replaceChild(newSpan, item);
        }
    })
}

const addSubtaskListener = () =>{
    const container = document.querySelector('.all-generated-subtasks');
    const inputContainer = document.querySelector('.subtask-input-container')
    const input = document.querySelector('.subtask-input');

    inputContainer.addEventListener('click', (e) =>{
        const container_ = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.role = 'checkbox';
        checkbox.ariaChecked = false;

        const inputText = document.createElement('input');
        inputText.classList.add('input-text-subtask-in')
        inputText.type = 'text'

        container_.appendChild(checkbox);
        container_.appendChild(inputText);

        container.appendChild(container_);

        inputText.focus();
        addSubtaskInputItemListener(inputText,container_)
    })

}


export{submitTaskListener,addSubtaskListener,clickOnTaskListener}