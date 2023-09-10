const generateDateSelector = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('sidebar-date-container');

    const classlists = ['sidebar-today', 'sidebar-important', 'sidebar-all'];
    const iconsSrc = ['../src/assets/attention.svg', '../src/assets/star.svg', '../src/assets/calendar.svg']
    const strings = ['Today', 'Important', 'All Tasks'];

    for(let i = 0; i < strings.length; i++){
        const div = document.createElement('div');
        div.classList.add(classlists[i]);

        const img = document.createElement('img');
        img.src = iconsSrc[i];

        const span = document.createElement('span');
        span.textContent = strings[i];

        div.appendChild(img)
        div.appendChild(span)

        container.appendChild(div);
    }

    parent.appendChild(container);
}

export{generateDateSelector}