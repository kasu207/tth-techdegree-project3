document.addEventListener('DOMContentLoaded', () =>{
    const  firstInput = document.querySelector('#name');
    firstInput.autofocus = true;

    const selectTitle = document.querySelector('#title');
    selectTitle.addEventListener('change', () => {
        if(selectTitle.value === 'other'){
            const inputOtherRole = document.createElement('input');
            inputOtherRole.type = 'text';
            inputOtherRole.autofocus = true;
            inputOtherRole.id = 'otherRole';
            inputOtherRole.style.display = 'none';
            selectTitle.parentNode.insertBefore(inputOtherRole, selectTitle.nextSibling);
            inputOtherRole.style.display = '';
        }else if(selectTitle !== 'other'){
        }
    });  
});

