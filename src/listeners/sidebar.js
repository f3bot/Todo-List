import { project } from "../classes/project";
import { renderNewlyCreatedProject } from "../components/sidebar/ProjectSelector";
import { projectArray } from "../miscellaneous/variables/projectArray";

const formListeners = () =>{
    const closeBtn = document.querySelector('.form-close-btn');
    const overlay = document.querySelector('.overlay');
    const formContainer = document.querySelector('.form-container');
    const addProjectButton = document.querySelector('.add-project-btn');
    const formInput = document.querySelector('.form-add-project-input');

    addProjectButton.addEventListener('click', (e) =>{
        formContainer.classList.toggle('visible');
        overlay.classList.toggle('visible');
    })


    closeBtn.addEventListener('click', (e) =>{
        overlay.classList.toggle('visible');
        formContainer.classList.toggle('visible');
    })

    overlay.addEventListener('click', (e) =>{
        overlay.classList.toggle('visible');
          formContainer.classList.toggle('visible');
    })

    formInput.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            if(formInput.value == '' || formInput.value == null){
                console.log("THROW ERROR HERE")
            }else{
                overlay.classList.toggle('visible');
                formContainer.classList.toggle('visible');

                projectArray.push(new project(formInput.value));
                renderNewlyCreatedProject(formInput.value);


                formInput.value = '';
            }
        }
    })
}

export{formListeners}