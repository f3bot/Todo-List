import { task } from "../classes/task"
import { projectArray } from "./variables/projectArray";

const fillWithTasks = () =>{
    const strings = [    "Finish writing the report",
    "Call the client for a follow-up",
    "Buy groceries",
    "Attend the team meeting",
    "Send out meeting invitations",
    "Plan the weekend getaway",
    "Pay the bills",
    "Complete the coding assignment",
    "Schedule a dentist appointment",
    "Clean the house",
    "Review the project proposal",
    "Prepare a presentation",
    "Go for a run",
    "Study for the upcoming exam",
    "Walk the dog",
    "Organize the closet",
    "Research vacation destinations",
    "Update the resume",
    "Water the plants",
    "Read a chapter of the new book"];

    for(let i = 0; i < projectArray.length; i++){
        for(let j = 0; j < 5; j++){
            projectArray[i].slaveTasks.push(new task(strings[j]));
        }

        console.log(projectArray[i].slaveTasks)
    }

    
}

export {fillWithTasks}