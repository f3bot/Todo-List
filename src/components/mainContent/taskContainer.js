const generateTaskContainer = (parent) =>{
    const taskContainerDiv = document.createElement('div');
    taskContainerDiv.classList.add('main-task-container');

    const taskRendererDiv = document.createElement('div');
    taskRendererDiv.classList.add('main-task-container-renderer')

    const taskInputFormDiv = document.createElement('div');
    taskInputFormDiv.classList.add('main-task-input-div');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = '+ Add task'
    input.classList.add('main-content-add-task')
    taskInputFormDiv.appendChild(input);

    taskContainerDiv.appendChild(taskRendererDiv)
    taskContainerDiv.appendChild(taskInputFormDiv);

    parent.appendChild(taskContainerDiv);
}   

export{generateTaskContainer}