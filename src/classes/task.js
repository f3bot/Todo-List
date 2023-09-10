class task{
    constructor(title){
        this.title = title;
        this.notes = '';
        this.priority = false;
        this.done = false;

        this.subtasks = [];
    }
}

export {task}