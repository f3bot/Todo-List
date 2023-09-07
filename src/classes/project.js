const projectArray = ['Project A', 'Project B', 'Project C'];

class project{
    constructor(){
        this.title = 'ABC';
        projectArray.push(this.title);
        console.log(projectArray)
        this.slaveTasks = [];
    }

}

export{project, projectArray}