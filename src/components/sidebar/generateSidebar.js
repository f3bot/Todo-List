import { generateProjectSelector } from "./ProjectSelector";
import { generateDateSelector } from "./dateSelector";
import { generateUserOverview } from "./userOverview";

const generateSidebar = () => {
    const nav = document.createElement('div');
    nav.classList.add('sidebar');

    generateUserOverview(nav);
    generateDateSelector(nav)
    generateProjectSelector(nav)

    document.body.appendChild(nav);
}


export {generateSidebar}