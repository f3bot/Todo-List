const checkMobile = () =>{
    const navbar = document.createElement('div');
    const navbar_ = document.querySelector('.sidebar-menu-mobile');
    const projectNav = document.querySelector('.main-navigator-span');
    const deleteBtn = document.querySelector('.main-navigator-delete');
    const cont = document.querySelector('.main-content-nav');
    const menuBtn = document.querySelector('.menu-btn');
    const todayBtn = document.querySelector('.today-next-button');
    const taskPropDiv = document.querySelector('.task-properties-title');
    if(window.innerWidth < 700){
        console.log(deleteBtn)
        navbar_.appendChild(projectNav);
        navbar_.appendChild(deleteBtn);
        cont.remove();
        taskPropDiv.textContent = 'No task selected';
    }

    menuBtn.addEventListener('click', (e) =>{
        todayBtn.classList.toggle('low-z-index');

    })
    
}

export{checkMobile}