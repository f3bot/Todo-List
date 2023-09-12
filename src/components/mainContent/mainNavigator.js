const generateMainNavigator = (parent) =>{
    const navDiv = document.createElement('div');
    navDiv.classList.add('main-content-nav');

    const mainNavSpan = document.createElement('span');
    mainNavSpan.classList.add('main-navigator-span');

    mainNavSpan.textContent = 'Test Project';

    const separator = document.createElement('div');
    separator.classList.add('main-nav-separator');


    navDiv.appendChild(mainNavSpan);
    navDiv.appendChild(separator)
    generateButtons(navDiv);
    parent.appendChild(navDiv);
}

const generateButtons = (parent) =>{
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('main-navigator-button-div');

    const btnDelete = document.createElement('img');
    btnDelete.src = '../src/assets/delete2.svg';
    btnDelete.classList.add('main-navigator-delete');

    const btnPrint = document.createElement('img');
    btnPrint.src = '../src/assets/print.svg';
    btnPrint.classList.add('main-navigator-print');

    buttonContainer.appendChild(btnDelete);
    buttonContainer.appendChild(btnPrint);

    parent.appendChild(buttonContainer);
}


export{generateMainNavigator}