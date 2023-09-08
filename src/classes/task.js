class task{
    constructor(titleValue){
        this.title = titleValue;
        this.dueDate = '';
        this.description = '';
        this.priority = false;
        this.todo = false;
        this.doing = false;
        this.done = false;
    }

    markAsDone(){
        this.done = true;
    }

    markAsDoing(){
        this.doing = true;
    }

    markAsTodo(){
        this.todo = true;
    }


}

export {task}