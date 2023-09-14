const createHamburgerMenu = () =>{
    const container = document.createElement('div');
    container.classList.add('sidebar-menu-mobile');

    createHamburger(container);

    document.body.appendChild(container);
}

const createHamburger = (parent) =>{
    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menu-btn');

    const menuBtnBurger = document.createElement('div');
    menuBtnBurger.classList.add('menu-btn__burger');

    menuBtn.appendChild(menuBtnBurger);
    const sidebar = document.querySelector('.sidebar');


    let menuOpen = false;

    menuBtn.addEventListener('click', (e) =>{
        if(!menuOpen){
            menuBtn.classList.add('open');
            menuOpen = true;
            sidebar.style.left = '0';
            
        }else{
            menuBtn.classList.remove('open');
            menuOpen = false;
            sidebar.style.left = '-100%';
        }
    })

    parent.appendChild(menuBtn);
}



export{createHamburgerMenu}