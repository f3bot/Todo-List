
const generateMainContent = ( ) =>{
    const main = document.createElement('div');
    main.classList.add('main-content')
    generateMainNavbar(main);




    document.body.appendChild(main);


    const taskContainerDiv = document.createElement('div'); //Div that the tasks are rendered in
    generateTaskDiv(taskContainerDiv);

    main.appendChild(taskContainerDiv);
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

export{generateMainContent}