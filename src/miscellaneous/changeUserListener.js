const changeUserName = () =>{
    const span = document.querySelector('.user-overview-span');
    span.textContent = 'User';

    const parent = document.querySelector('.user-overview-user-div');

    span.addEventListener('click', (e) =>{
        const input = document.createElement('input');
        input.type = 'text';

        parent.replaceChild(input, span);

        input.focus();

        input.addEventListener('keypress', (e) =>{
            if(e.key == 'Enter'){
                let value = input.value;

                span.textContent = value;

                parent.replaceChild(span, input);
            }
        })
        
        input.addEventListener('blur', (e) =>{
            parent.replaceChild(span,input);
        })
    })
}

export {changeUserName}