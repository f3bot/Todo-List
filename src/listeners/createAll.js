import { addSubtaskListener, submitTaskListener } from "./mainContentListeners";
import { dateListener } from "./navbarListeners"

const createAllListeners = ( ) =>{
    submitTaskListener();
    dateListener();
    addSubtaskListener();
}

export{createAllListeners}