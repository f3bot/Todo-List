import { generateToday } from "./components/homeScreen/generateTodayScreen";
import { generateMainContent } from "./components/mainContent/generateMain";
import { generateForm } from "./components/sidebar/ProjectSelector";
import { generateSidebar } from "./components/sidebar/generateSidebar";
import { changeViewListener, formListeners } from "./listeners/sidebar";
import { addTaskListener } from "./listeners/taskContainer";
import { addNewSubtaskListener } from "./listeners/taskProperties";
import { addTodayListener } from "./listeners/today";
import { fillWithProjects } from "./miscellaneous/fillWithProjects";
import { fillWithTasks } from "./miscellaneous/fillWithTasks";
import { renderSidebarProjects } from "./rendering/sidebarProjects";

fillWithProjects();
fillWithTasks();


//Generating structures
generateSidebar();
generateForm();
generateToday();
generateMainContent();

//Rendering
renderSidebarProjects();


//Listeners
formListeners();
changeViewListener();
addTodayListener();
addTaskListener();
addNewSubtaskListener();