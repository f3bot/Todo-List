import { project } from "../classes/project";
import { projectArray } from "../variables/projectArray";
import { createOverlay } from "./miscellaneous/overlay";

const generateSidebar = () => {
    const div = document.createElement('div');
    div.classList.add('sidebar');
  
    createProjectForm(div);
  
    generateProfileUserDiv(div);
    generateDateSelection(div);
    generateProjectSelector(div);
    document.body.appendChild(div);

    createOverlay();
};
  

const generateProfileUserDiv = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('user-overview')

    const pfp = document.createElement('img');
    pfp.classList.add('profile-pic')
    pfp.src = '../src/assets/iar.jpg'

    const nameContainer = document.createElement('div');
    const spanOne = document.createElement('span');
    const pTwo = document.createElement('p')

    spanOne.textContent = 'Michał'
    pTwo.textContent = 'Free Account'

    nameContainer.appendChild(spanOne);
    nameContainer.appendChild(pTwo)

    container.appendChild(pfp);
    container.appendChild(nameContainer)
    parent.appendChild(container);

}

const generateDateSelection = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('date-selector-sidebar')

    generateSelector(container,'../src/assets/attention.svg','Today')
    generateSelector(container,'../src/assets/calendar.svg','Next 7 Days')
    generateSelector(container,'../src/assets/calendar.svg','All My Tasks')

    parent.appendChild(container);
}

const generateSelector = ( parent, src, content ) =>{ 
    const container = document.createElement('div');
    container.classList.add('date-selector-individual')

    const ico = document.createElement('img');
    ico.src = src;
    ico.classList.add('date-selector-icon');

    const span = document.createElement('span');
    span.textContent = content




    container.appendChild(ico);
    container.appendChild(span)

    parent.appendChild(container);

}

const generateProjectSelector = (parent ) =>{
    const container = document.createElement('div');
    container.classList.add("projects-selector-sidebar")


    const titleDiv = document.createElement('div');
    titleDiv.classList.add('project-container-title')
    
    generateTitleDivContent(titleDiv);


    container.appendChild(titleDiv);

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projects-container')

    projectArray.forEach(project =>{
        const span = document.createElement('span');
        span.textContent = project.title;
        projectContainer.appendChild(span)
    })

    container.appendChild(projectContainer)
    parent.appendChild(container);
}

const generateTitleDivContent = (parent) =>{ 
    const span = document.createElement('span')
    span.textContent = 'My Projects'

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-project-btn')
    addBtn.textContent = '+'

    addBtn.addEventListener('click', (e) =>{
        const form = document.querySelector('.form-container');

        form.classList.toggle('visible')
        
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('visible')

    })

    parent.appendChild(span);
    parent.appendChild(addBtn)
}

const createProjectForm = (parent) =>{
    const formContainer = document.createElement('div');
    const form = document.createElement('form');

    const closeContainer = document.createElement('div');
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕'

    closeContainer.classList.add('close-btn-container')

    closeBtn.addEventListener('click', (e) =>{
        e.preventDefault();


        const overlay = document.querySelector('.overlay');
        formContainer.classList.toggle('visible')
        overlay.classList.toggle('visible')
    })

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container')
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = "What you gon' do?"


    titleInput.addEventListener('keypress', (e) =>{
        if(e.key === 'Enter'){
            projectArray.push(new project(titleInput.value))
            form.reset();
            console.log(projectArray)
        }
    })

    const submitContainer = document.createElement('div');
    submitContainer.classList.add('submit-btn-container')
    const submit = document.createElement('input')
    submit.type = 'submit';
    submit.value = 'Continue'

    submit.addEventListener('click', (e) =>{
        e.preventDefault();
        formContainer.classList.toggle('visible');
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('visible')

        projectArray.push(new project(titleInput.value))

        console.log(projectArray)
    })


    closeContainer.appendChild(closeBtn);
    inputContainer.appendChild(titleInput);
    submitContainer.appendChild(submit);

    form.appendChild(closeContainer);
    form.appendChild(inputContainer);
    form.appendChild(submitContainer);

    formContainer.appendChild(form);

    parent.appendChild(formContainer)

    formContainer.classList.add('form-container');
}

const createProjectSpan = () =>{
    
}

export {generateSidebar}