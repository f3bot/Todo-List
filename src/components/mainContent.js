
const generateMainContent = ( ) =>{
    const main = document.createElement('div');
    main.classList.add('main-content')
    generateMainNavbar(main);


    document.body.appendChild(main);

}


const generateMainNavbar = (parent) =>{

    const container = document.createElement('div');
    container.classList.add('navigation-container');

    const spanDescription = document.createElement('span');
    spanDescription.classList.add('main-navigator');
    spanDescription.textContent = 'All Tasks'

    const buttonContainer = document.createElement('div');

    const deleteBtn = document.createElement('img');
    deleteBtn.classList.add('delete-btn')
    const label = document.createElement('label')
    label.classList.add('label-delete')

    deleteBtn.src = '../src/assets/bin.png'

    buttonContainer.appendChild(deleteBtn);
    buttonContainer.appendChild(label);

    container.appendChild(spanDescription);

    container.appendChild(buttonContainer);

    parent.appendChild(container);
    
}

export{generateMainContent}