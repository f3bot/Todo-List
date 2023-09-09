import { generateMainContent, generateTaskPropertiesDiv} from "./components/mainContent";
import { fillProjects } from "./components/miscellaneous/fillWithDoneProjects";
import { generateSidebar } from "./components/navbar";
import { createAllListeners } from "./listeners/createAll";


generateSidebar();
generateMainContent();
fillProjects();
createAllListeners();