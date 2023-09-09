import { generateMainContent, generateTaskPropertiesDiv} from "./components/mainContent";
import { fillProjects } from "./components/miscellaneous/fillWithDoneProjects";
import { generateSidebar } from "./components/navbar";
import { renderView } from "./components/rendering/render";
import { createAllListeners } from "./listeners/createAll";
import { projectArray } from "./variables/projectArray";

generateSidebar();
generateMainContent();
createAllListeners();
fillProjects();