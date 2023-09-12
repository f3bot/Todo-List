let currentProject = '';

const setCurrentProject = (value) =>{
    currentProject = value;
}

const getCurrentProject = () =>{
    return currentProject;
}

export {setCurrentProject, getCurrentProject};