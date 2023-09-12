import { renderNewlyCreatedTask } from "../rendering/mainContent";

const addTaskListener = () =>{
    const input = document.querySelector('.main-content-add-task')
    const parentContainer = document.querySelector('.main-task-container-renderer')

    input.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            if(input.value == '' || input.value == null){
                console.log("Throw error here");
            }else{
                renderNewlyCreatedTask(parentContainer, input);
            }
        }
    })

}

const addTaskDivListener = (item) =>{
    const spanTarget = document.querySelector('.task-properties-title');

    item.addEventListener('click', (e) =>{
        spanTarget.textContent = item.textContent;
    })
}

export{addTaskListener, addTaskDivListener}