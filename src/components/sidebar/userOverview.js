const generateUserOverview = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('sidebar-user-overview')

    const pfpImg = document.createElement('img');
    pfpImg.classList.add('sidebar-profile-pic');
    pfpImg.src = "../src/assets/iar.jpg"
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('user-overview-user-div')
    const spanBig = document.createElement('span');
    spanBig.classList.add('user-overview-span');
    spanBig.textContent = 'Michał';
    const pSmall = document.createElement('p');
    pSmall.textContent = 'Workspace account'

    rightDiv.appendChild(spanBig);
    rightDiv.appendChild(pSmall);

    container.appendChild(pfpImg);
    container.appendChild(rightDiv);

    parent.appendChild(container)

}

export {generateUserOverview}