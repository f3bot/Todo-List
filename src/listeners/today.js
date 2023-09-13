import { clearMainScreen, generateToday, renderToday } from "../components/homeScreen/generateTodayScreen";
import { projectArray } from "../miscellaneous/variables/projectArray";
import { prioTaskCounter, renderImportant } from "../rendering/renderingSingular/renderImportant";

const addTodayListener = () =>{
    const todaySpan = document.querySelector('.sidebar-today');

    const todayContainer = document.querySelector('.today-container');
    const mainContainer = document.querySelector('.main-container')

    todaySpan.addEventListener('click', (e) =>{
        todayContainer.classList.remove('not-visible')
        mainContainer.classList.remove('visible');
        clearMainScreen();
        renderToday();
    })
}

const addImportantListener = () =>{
    const importantSpan = document.querySelector('.sidebar-important');
    const todayContainer = document.querySelector('.today-container');
    const mainContainer = document.querySelector('.main-container')


    importantSpan.addEventListener('click', (e) =>{
        if(prioTaskCounter()){
            clearMainScreen();
            todayContainer.classList.add('not-visible');
            mainContainer.classList.add('visible');
            renderImportant();
        }else{
            alert("something")
        }

    })
}


export{addTodayListener, addImportantListener}