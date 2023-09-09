
const generateMainContent = ( ) =>{
    const main = document.createElement('div');
    main.classList.add('main-content')
    generateMainNavbar(main);


    const taskContainerDiv = document.createElement('div'); //Div that the tasks are rendered in
    taskContainerDiv.classList.add('tasks-main-div')
    generateTaskDiv(taskContainerDiv);
    generateTaskPropertiesDiv(taskContainerDiv)

    main.appendChild(taskContainerDiv);

    document.body.appendChild(main);
}


const generateMainNavbar = (parent) =>{

    const container = document.createElement('div');
    container.classList.add('navigation-container');

    const spanContainer = document.createElement('div');

    
    const spanIcon = document.createElement('img');
    spanIcon.src = '../src/assets/attention.svg'
    spanIcon.classList.add('main-navigator-icon')
    const spanDescription = document.createElement('span');
    spanDescription.classList.add('main-navigator');
    spanDescription.textContent = 'ABC'

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('delete-btn-container');

    const deleteBtn = document.createElement('img');
    deleteBtn.classList.add('delete-btn')
    const label = document.createElement('label')
    label.classList.add('label-delete')

    deleteBtn.src = '../src/assets/delete.svg'

    buttonContainer.appendChild(deleteBtn);
    buttonContainer.appendChild(label);

    spanContainer.classList.add('navigation-small-container')

    spanContainer.appendChild(spanIcon);
    spanContainer.appendChild(spanDescription)

    container.appendChild(spanContainer);

    container.appendChild(buttonContainer);

    parent.appendChild(container);
    
}

const generateTaskDiv = (parent) =>{
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('render-tasks-container');

    const taskHolderDiv = document.createElement('div');
    taskHolderDiv.classList.add('task-renderer');

    const taskCreatorDiv = document.createElement('div');
    taskCreatorDiv.classList.add('task-creator-div');
    const form = document.createElement('form');
    const input = document.createElement('input')
    input.type = 'text';
    input.placeholder = '+ Add task';
    input.classList.add('task-title-input')

    form.appendChild(input);
    form.classList.add('submit-task-form')

    taskCreatorDiv.appendChild(form);

    leftContainer.appendChild(taskHolderDiv)
    leftContainer.appendChild(taskCreatorDiv);

    parent.appendChild(leftContainer);

}

const generateTaskPropertiesDiv = (parent) =>{
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('tasks-properties-container');

    generatePropertiesNav(rightContainer)
    generateTaskTitle(rightContainer)
    generateNotesInput(rightContainer)
    generateSubtasks(rightContainer);
    
    parent.appendChild(rightContainer)
}

const generatePropertiesNav = (parent) =>{
    const nav = document.createElement('div')
    nav.classList.add('task-properties-navbar');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('task-properties-navbar-left');
    const navigationSpan = document.createElement('span');
    navigationSpan.classList.add('task-properties-navigation');
    navigationSpan.innerHTML = 'My lists &nbsp; > &nbsp; Personal'

    leftDiv.appendChild(navigationSpan)

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('task-properties-navbar-right');

    const markAsPriority = document.createElement('img');
    markAsPriority.src = '../src/assets/star.svg'
    markAsPriority.classList.add('priority-btn');

    const markAsDone = document.createElement('img');
    markAsDone.src = '../src/assets/checkbox.svg';
    markAsDone.classList.add('done-btn');

    const markAsArchived = document.createElement('img');
    markAsArchived.src = '../src/assets/delete.svg'
    markAsArchived.classList.add('archive-btn');


    rightDiv.appendChild(markAsPriority);
    rightDiv.appendChild(markAsDone);
    rightDiv.appendChild(markAsArchived);

    nav.appendChild(leftDiv);
    nav.appendChild(rightDiv);

    parent.appendChild(nav)
}

const generateTaskTitle = (parent) =>{
    const span = document.createElement('span')
    span.classList.add('task-properties-title');

    span.textContent = 'test task'

    parent.appendChild(span)
}

const generateNotesInput = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('notes-container');

    const notesTitle = document.createElement('span');
    notesTitle.textContent = 'NOTES'

    const notesInt = document.createElement('textarea')
    notesInt.placeholder = 'Insert your notes here...'

    container.appendChild(notesTitle);
    container.appendChild(notesInt);

    parent.appendChild(container);
}

const generateSubtasks = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('subtasks-container');




    const subtasksTitle = document.createElement('span');
    subtasksTitle.textContent = 'SUBTASKS'


    const subtasksAllContainer = document.createElement('div');
    subtasksAllContainer.classList.add('all-subtask')

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('subtask-input-container')

    const generatedSubtasksHolder = document.createElement('div');
    subtasksAllContainer.appendChild(generatedSubtasksHolder)
    generatedSubtasksHolder.classList.add('all-generated-subtasks')

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.role = 'checkbox';
    checkbox.ariaChecked = false;
    checkbox.classList.add('subtask-input-checkbox')

    const span = document.createElement('span');
    span.textContent = 'Add a new subtask'


    inputContainer.appendChild(checkbox)
    inputContainer.appendChild(span);
    
    container.appendChild(subtasksTitle);

    subtasksAllContainer.appendChild(inputContainer)
    container.appendChild(subtasksAllContainer)

    parent.appendChild(container)
}


export{generateMainContent}