let currentProject = '';

const setCurrentProject = (value) =>{
    currentProject = value;
    console.log("current project ", currentProject)
}

const getCurrentProject = () =>{
    return currentProject;
}

export {setCurrentProject, getCurrentProject};