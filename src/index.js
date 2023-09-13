import { generateToday, renderToday } from "./components/homeScreen/generateTodayScreen";
import { generateMainContent } from "./components/mainContent/generateMain";
import { generateForm } from "./components/sidebar/ProjectSelector";
import { generateSidebar } from "./components/sidebar/generateSidebar";
import { mainNavigatorListeners } from "./listeners/mainNavbarButtons";
import { changePropertiesListener, changeViewListener, formListeners } from "./listeners/sidebar";
import { addTaskListener } from "./listeners/taskContainer";
import { addNewSubtaskListener, addNotesListener } from "./listeners/taskProperties";
import { taskPropertiesNavButtonListeners } from "./listeners/taskPropertiesButtons";
import { addAllTaskListener, addImportantListener, addTodayListener } from "./listeners/today";
import { init, projectArrayGetter } from "./localStorage";
import { fillWithProjects } from "./miscellaneous/fillWithProjects";
import { fillWithTasks } from "./miscellaneous/fillWithTasks";
import { projectArray } from "./miscellaneous/variables/projectArray";
import { renderSidebarProjects } from "./rendering/sidebarProjects";

init();

//fillWithProjects();
//fillWithTasks();


//Generating structures
generateSidebar();
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

window.addEventListener('beforeunload', (e) =>{
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
})

