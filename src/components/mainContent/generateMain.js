import { generateMainNavigator } from "./mainNavigator";
import { generateTaskContainer } from "./taskContainer";
import { generateTaskProperties } from "./taskProperties";

const generateMainContent = () =>{
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container')

    const mainContainerTask = document.createElement('div');
    mainContainerTask.classList.add('main-container-task');

    generateMainNavigator(mainContainer);
    generateTaskContainer(mainContainerTask);
    generateTaskProperties(mainContainerTask);


    mainContainer.appendChild(mainContainerTask)
    document.body.appendChild(mainContainer);
}

export{generateMainContent}