const addTodayListener = () =>{
    const todaySpan = document.querySelector('.sidebar-today');

    const todayContainer = document.querySelector('.today-container');
    const mainContainer = document.querySelector('.main-container')

    todaySpan.addEventListener('click', (e) =>{
        todayContainer.classList.remove('not-visible')
        mainContainer.classList.remove('visible');
    })
}

export{addTodayListener}