document.addEventListener('DOMContentLoaded', () => {
    const firstInput = document.querySelector('#name');
    firstInput.autofocus = true;

    const selectTitle = document.querySelector('#title');
    const inputOtherRole = document.createElement('input');
    selectTitle.parentNode.insertBefore(inputOtherRole, selectTitle.nextSibling);
    inputOtherRole.style.display = 'none';
    selectTitle.addEventListener('change', () => {
        if (selectTitle.value === 'other') {
            inputOtherRole.type = 'text';
            inputOtherRole.autofocus = true;
            inputOtherRole.id = 'otherRole';
            inputOtherRole.style.display = '';
        } else if (selectTitle !== 'other') {
            inputOtherRole.style.display = 'none';
        }
    });

    const color = document.querySelector('#color');
    for (let i = 0; i < color.length; i++) {
        color[i].style.display = 'none';
    };

    const colorOption = document.createElement('option');
    colorOption.textContent = 'Please select a T-shirt theme';
    colorOption.value = 'plsSelectShirt';
    colorOption.selected = true;
    //color.insertBefore(colorOption, color.firstChild);
    color.add(colorOption, 0);

    const design = document.querySelector('#design');
    design.addEventListener('change', () => {
        for (let i = 0; i < color.length; i++) {
            color[i].style.display = 'none';
        };
        if (design.value === 'js puns') {
            color.add(colorOption, 0);
            colorOption.selected = true;
            for (let i = 0; i <= 3; i++) {
                color[i].style.display = '';
            };
        } else if (design.value === 'heart js') {
            color.add(colorOption, 4);
            colorOption.selected = true;
            for (let i = 3; i <= 6; i++) {
                color[i].style.display = '';
            };
        };
    });
    // Register Activities
    //trigger function if inputs are trigered
    const checkboxes = document.querySelectorAll('.activities input');
    document.querySelector('.activities').addEventListener('change', (e) => {
        const clicked = e.target;
        const clickedType = clicked.getAttribute("data-day-and-time");
        for (let i = 0; i < checkboxes.length; i++) {
            const checkboxType = checkboxes[i].getAttribute("data-day-and-time");
            if (clickedType == checkboxType && clicked !== checkboxes[i]) {
                if(clicked.checked){
                    //checkboxes[i].checked = true;
                    checkboxes[i].disabled = true;
                }else{
                    checkboxes[i].disabled = false;
                };
            }
        };
    });

    //calculate Value for Workshop
    const value = document.createElement('p');




});