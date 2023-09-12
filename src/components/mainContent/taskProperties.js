import { sub } from "date-fns";

const generateTaskProperties = (parent) =>{
    const taskPropertiesContainer = document.createElement('div');
    taskPropertiesContainer.classList.add('main-task-properties');

    generateNavbar(taskPropertiesContainer);    
    generateTaskTitle(taskPropertiesContainer);
    generateTaskNotes(taskPropertiesContainer);
    generateSubtasks(taskPropertiesContainer);

    parent.appendChild(taskPropertiesContainer)
}

const generateNavbar = (parent) =>{
    const navDiv = document.createElement('div');
    navDiv.classList.add('task-properties-navbar');

    const leftDiv = document.createElement('div');

    const span = document.createElement('span')
    span.classList.add('main-task-properties-nav')
    span.innerHTML = 'Projects &nbsp; > &nbsp; Personal'

    leftDiv.appendChild(span);

    const rightButtonDiv = document.createElement('div');

    rightButtonDiv.classList.add('task-properties-button-div');

    const btnOne = document.createElement('img');
    btnOne.src = '../src/assets/delete.svg';
    btnOne.classList.add('task-properties-delete');

    const btnTwo = document.createElement('img');
    btnTwo.src = '../src/assets/star.svg';
    btnTwo.classList.add('task-properties-priority');

    const btnThree = document.createElement('img');
    btnThree.src = '../src/assets/checkbox.svg'
    btnThree.classList.add('task-properties-done');

    rightButtonDiv.appendChild(btnOne);
    rightButtonDiv.appendChild(btnTwo);
    rightButtonDiv.appendChild(btnThree);

    navDiv.appendChild(leftDiv);
    navDiv.appendChild(rightButtonDiv);

    parent.appendChild(navDiv)
}

const generateTaskTitle = (parent) =>{
    const span = document.createElement('span');
    span.textContent = 'test task aaa';

    span.classList.add('task-properties-title');

    parent.appendChild(span);
}

const generateTaskNotes = (parent) =>{
    const div = document.createElement('div');
    div.classList.add('task-properties-textarea-container');

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Add your notes here';
    textarea.classList.add('task-properties-text-area')


    div.appendChild(textarea);

    parent.appendChild(div);
}

const generateSubtasks = (parent) =>{
    const subtaskContaienr = document.createElement('div');
    subtaskContaienr.classList.add("task-properties-subtask-container");

    const subtaskContainerHolder = document.createElement('div');
    subtaskContainerHolder.classList.add('task-properties-subtask-div');

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('task-properties-subtasks-input-div')

    const checkbox = document.createElement('button');

    checkbox.classList.add('task-properties-subtasks-checkbox');

    const input = document.createElement('button');
    input.textContent = 'Add a new subtask'
    input.classList.add('task-properties-subtasks-input');

    inputDiv.appendChild(checkbox);
    inputDiv.appendChild(input);

    subtaskContaienr.appendChild(subtaskContainerHolder);
    subtaskContaienr.appendChild(inputDiv);

    parent.appendChild(subtaskContaienr);
}   

export{generateTaskProperties}