import { project } from "../classes/project";
import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";

const addNewSubtaskListener = () =>{
    const addSubtaskDiv = document.querySelector('.task-properties-subtasks-input-div');
    const container = document.querySelector('.task-properties-subtask-div');

    addSubtaskDiv.addEventListener('click', (e) =>{
        e.preventDefault();

        const newDiv = document.createElement('div');
        newDiv.classList.add('subtasks-title-div');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false;

        const input = document.createElement('input');
        input.type = 'text';
        addInputListener(input, newDiv);

        newDiv.appendChild(checkbox);
        newDiv.appendChild(input);

        container.appendChild(newDiv);

        input.focus();
    })
}

const addInputListener = (item, parent) =>{
    const taskTitle = document.querySelector('.task-properties-title')

    item.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            if(item.value == '' || item.value == null){
                parent.remove();
            }else{
                const span  =document.createElement('span');
                span.textContent = item.value;

                parent.replaceChild(span, item);

                for(let i = 0; i < projectArray.length; i++){
                    if(getCurrentProject() == projectArray[i].title){
                        for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                            if(projectArray[i].slaveTasks[j].title == taskTitle.textContent){
                                projectArray[i].slaveTasks[j].subtasks.push(item.value);
                            }
                        }
                    }
                }
            }
        }
    })

    item.addEventListener('blur', (e) =>{
        if(item.value == '' || item.value == null){
            parent.remove();
        }
    })

}

const addNotesListener = () =>{
    const textarea = document.querySelector('.task-properties-text-area');
    const taskTitle = document.querySelector('.task-properties-title')
    textarea.addEventListener('input', (e) =>{
        for(let i = 0; i <projectArray.length; i++){
            if(projectArray[i].title == getCurrentProject()){
                for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                    if(projectArray[i].slaveTasks[j].title == taskTitle.textContent){
                        projectArray[i].slaveTasks[j].notes = e.target.value;
                        console.log(projectArray[i].slaveTasks[j].notes)
                    }
                }
            }
        }

    })

}


export {addNewSubtaskListener, addNotesListener}