import { generateMainContent} from "./components/mainContent";
import { generateSidebar } from "./components/navbar";
import { renderView } from "./components/rendering/render";
import { createAllListeners} from "./listeners/mainContentListeners";
import { projectArray } from "./variables/projectArray";

generateSidebar();
generateMainContent();
renderView('ABC');
createAllListeners();


console.log(projectArray)