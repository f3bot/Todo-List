import { getCurrentProject } from "../miscellaneous/variables/currentProject";
import { projectArray } from "../miscellaneous/variables/projectArray";

const addNewSubtaskListener = () =>{
    const addSubtaskDiv = document.querySelector('.task-properties-subtasks-input-div');
    const container = document.querySelector('.task-properties-subtask-div');

    addSubtaskDiv.addEventListener('click', (e) =>{
        e.preventDefault();

        const newDiv = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false;

        const input = document.createElement('input');
        input.type = 'text';
        addInputListener(input, newDiv);

        newDiv.appendChild(checkbox);
        newDiv.appendChild(input);

        for(let i = 0; i < projectArray.length; i++){
            if(getCurrentProject() == projectArray[i].title){
                for(let j = 0; j < projectArray[i].slaveTasks.length; j++){
                    if(projectArray[i].slaveTasks[j].title == 'Send out meeting invitations'){
                        console.log("Task found or something can push now")
                    }
                }
            }
        }

        container.appendChild(newDiv);

        input.focus();
    })
}

const addInputListener = (item, parent) =>{
    item.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            if(item.value == '' || item.value == null){
                parent.remove();
            }else{
                console.log("a")
            }
        }
    })

    item.addEventListener('blur', (e) =>{
        if(item.value == '' || item.value == null){
            parent.remove();
        }
    })

}


export {addNewSubtaskListener}