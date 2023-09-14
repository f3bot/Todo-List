import { generateToday, renderToday } from "./components/homeScreen/generateTodayScreen";
import { generateMainContent } from "./components/mainContent/generateMain";
import { generateForm } from "./components/sidebar/ProjectSelector";
import { generateSidebar } from "./components/sidebar/generateSidebar";
import { mainNavigatorListeners } from "./listeners/mainNavbarButtons";
import { changePropertiesListener, changeViewListener, formListeners } from "./listeners/sidebar";
import { addTaskListener } from "./listeners/taskContainer";
import { addNewSubtaskListener, addNotesListener } from "./listeners/taskProperties";
import { taskPropertiesNavButtonListeners } from "./listeners/taskPropertiesButtons";
import { addAllTaskListener, addImportantListener, addTodayListener, generateButtonListener } from "./listeners/today";
import { init, projectArrayGetter } from "./localStorage";
import { fillWithProjects } from "./miscellaneous/fillWithProjects";
import { fillWithTasks } from "./miscellaneous/fillWithTasks";
import { projectArray } from "./miscellaneous/variables/projectArray";
import { changeUserName } from "./miscellaneous/changeUserListener";
import { renderSidebarProjects } from "./rendering/sidebarProjects";
import { createHamburgerMenu } from "./components/sidebar/hamburgerIcon";
import {checkMobile} from "./miscellaneous/checkForMobile";

init();

//fillWithProjects();
//fillWithTasks();


//Generating structures
generateSidebar();
createHamburgerMenu();
generateForm();
generateToday();
renderToday();
generateMainContent();

//Rendering
renderSidebarProjects();


//Listeners
formListeners();
changeViewListener();
addTodayListener();
addImportantListener();
addTaskListener();
addNewSubtaskListener();
changePropertiesListener();
taskPropertiesNavButtonListeners();
addNotesListener();
mainNavigatorListeners();
generateButtonListener();
changeUserName();

window.addEventListener('beforeunload', (e) =>{
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
})


checkMobile();

