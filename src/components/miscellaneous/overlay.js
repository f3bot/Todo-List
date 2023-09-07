const createOverlay = () =>{
    const overlay = document.createElement('div');
    overlay.classList.add('overlay')

    overlay.addEventListener('click', (e ) =>{
        const form = document.querySelector('.form-container')
        overlay.classList.toggle('visible')
        form.classList.toggle('visible')
    })

    document.body.appendChild(overlay)
}

export {createOverlay}