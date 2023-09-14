import { clearMainScreen, generateToday, renderToday } from "../components/homeScreen/generateTodayScreen";
import { projectArray } from "../miscellaneous/variables/projectArray";
import { prioTaskCounter, renderImportant } from "../rendering/renderingSingular/renderImportant";

const addTodayListener = () =>{
    const todaySpan = document.querySelector('.sidebar-today');

    const todayContainer = document.querySelector('.today-container');
    const mainContainer = document.querySelector('.main-container')
    const button = document.querySelector('.today-next-button');

    todaySpan.addEventListener('click', (e) =>{
        todayContainer.classList.remove('not-visible')
        button.classList.remove('not-visible');
        mainContainer.classList.remove('visible');
        clearMainScreen();
        renderToday();

        
    })
}

const addImportantListener = () =>{
    const importantSpan = document.querySelector('.sidebar-important');
    const todayContainer = document.querySelector('.today-container');
    const mainContainer = document.querySelector('.main-container');
    const button = document.querySelector('.today-next-button');


    importantSpan.addEventListener('click', (e) =>{
        if(prioTaskCounter()){
            clearMainScreen();
            todayContainer.classList.add('not-visible');
            mainContainer.classList.add('visible');
            button.classList.add('not-visible');
            renderImportant();
        }else{
            alert("No important tasks")
        }

    })
}

const generateButtonListener = () =>{
    const projectsContainer = document.querySelector('.sidebar-projects-container');
    const mainContainer = document.querySelector('.main-container')
    const div = document.querySelector('.today-next-button');

    console.log('funckja wywołana')
    console.log(div)
    

    div.addEventListener('click', (e) =>{

        console.log('got heeeeeeeeeere       22')        
        if(projectsContainer.childNodes.length != 0){
            console.log('got heeeeeeeeeere')
            div.classList.add('animation-active');
            mainContainer.classList.add('main-animation');

            setTimeout(function() {
                div.classList.add('animation-not-active');

            }, 1400)


            setTimeout(function(){
                projectsContainer.childNodes[0].click();
            }, 1500)

            setTimeout(function(){
                mainContainer.style.opacity = 1;
                
            }, 1450)

            setTimeout(function(){
                console.log("HEREEE")
                div.classList.remove('animation-active');
                div.classList.remove('animation-not-active');
                div.classList.add('not-visible');
            },2700);

        }else{
            alert("No projects error");
        }

    })


}


export{addTodayListener, addImportantListener, generateButtonListener}