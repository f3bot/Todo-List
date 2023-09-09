import { renderView } from "../components/rendering/render";

const projectListener = (item) =>{
    const target = document.querySelector(".main-navigator")
    item.addEventListener('click', (e) =>{
        target.textContent = item.textContent;
        renderView();
    })
}

const dateListener = () => {
    const dateDivs = document.querySelectorAll('.date-selector-individual');
    const dateSpan = document.querySelectorAll('.date-selector-span');
    const target = document.querySelector('.main-navigator');

    for(let i = 0; i < dateDivs.length; i++){
        dateDivs[i].addEventListener('click', (e) =>{
            target.textContent = dateSpan[i].textContent;
            renderView();
        })
    }


}


export{projectListener, dateListener}