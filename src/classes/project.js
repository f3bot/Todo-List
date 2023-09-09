import { task } from "./task";

class project{
    constructor(titleValue){
        this.title = titleValue;
        this.slaveTasks = [];
    }

    fillTasks(){
        let taskE = new task("task eeeee")
        taskE.fillWithSubtasks();

        this.slaveTasks.push(new task('task a'));
        this.slaveTasks.push(new task('task b'));
        this.slaveTasks.push(new task('task c'));
        this.slaveTasks.push(new task('task d'));
        this.slaveTasks.push(taskE);

        console.log(taskE)
    }
}

export{project}