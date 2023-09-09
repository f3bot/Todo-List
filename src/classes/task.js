class task{
    constructor(titleValue){
        this.title = titleValue;
        this.dueDate = '';
        this.description = '';
        this.priority = false;
        this.toDo = true;
        this.subtasks = [];
        this.notes = [];
    }

    markAsDone(){
        this.toDo = false;
    }

    fillWithSubtasks(){
        this.subtasks.push('ABC');
        this.subtasks.push('ABC');
        this.subtasks.push('ABC');
        this.subtasks.push('ABC');
        this.subtasks.push('ABC');
    }
}

export {task}