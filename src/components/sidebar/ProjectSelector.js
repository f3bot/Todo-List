const generateProjectSelector = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('sidebar-project-selector');

    const titleDiv = document.createElement('div');
    const span = document.createElement('span');
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-project-btn')

    span.textContent = 'Projects';
    addBtn.textContent = '+';

    titleDiv.appendChild(span);
    titleDiv.appendChild(addBtn);

    titleDiv.classList.add('sidebar-project-title')

    const projectContainer = document.createElement('div');
    projectContainer.classList.add("project-container");

    container.appendChild(titleDiv);


    parent.appendChild(container);
}

const generateForm = () =>{

    const container = document.createElement('div');
    container.classList.add('form-container');

    const closeBtnDiv = document.createElement('div')
    closeBtnDiv.classList.add('form-close-btn-div')
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('form-close-btn');
    closeBtn.textContent = '✕'
    
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('form-add-project-input')
    titleInput.placeholder = 'Add your task here';

    const addProjectButtonDiv = document.createElement('div')
    addProjectButtonDiv.classList.add('form-add-project-btn-div')


    const addProjectForm = document.createElement('button');
    addProjectForm.classList.add('form-add-project-btn');
    addProjectForm.textContent = 'Continue';

    closeBtnDiv.appendChild(closeBtn)
    addProjectButtonDiv.appendChild(addProjectForm);

    container.appendChild(closeBtnDiv);
    container.appendChild(titleInput);
    container.appendChild(addProjectButtonDiv);

    document.body.appendChild(container);

    generateOverlay();

}

const generateOverlay = () =>{
    const overlay = document.createElement('div');  
    overlay.classList.add('overlay')

    document.body.appendChild(overlay)
}

const renderNewlyCreatedProject = (value) =>{
    const container = document.querySelector('.sidebar-projects-container');

    const span = document.createElement('span');
    span.textContent = value;

    container.appendChild(span)
}

export {generateProjectSelector, generateForm, renderNewlyCreatedProject}