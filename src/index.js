import { generateToday } from "./components/homeScreen/generateTodayScreen";
import { generateForm } from "./components/sidebar/ProjectSelector";
import { generateSidebar } from "./components/sidebar/generateSidebar";
import { formListeners } from "./listeners/sidebar";
import { fillWithProjects } from "./miscellaneous/fillWithProjects";
import { fillWithTasks } from "./miscellaneous/fillWithTasks";
import { renderSidebarProjects } from "./rendering/sidebarProjects";

fillWithProjects();
fillWithTasks();


//Generating structures
generateSidebar();
generateForm();
generateToday();

//Listeners
formListeners();

//Rendering
renderSidebarProjects();