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
    const activities = document.querySelector('.activities');
    const value = document.createElement('p');
    activities.addEventListener('change', (e) => {
        const clicked = e.target;
        const clickedType = clicked.getAttribute("data-day-and-time");
       
        //calculate Value for conference
        const costs = [];
        for (let i = 0; i < checkboxes.length; i++) {
            const checkboxType = checkboxes[i].getAttribute("data-day-and-time");
            if (clickedType == checkboxType && clicked !== checkboxes[i]) {
                if (clicked.checked) {
                    //checkboxes[i].checked = true;
                    checkboxes[i].disabled = true;
                    
                } else {
                    checkboxes[i].disabled = false;
                };
            }else if(checkboxes[i].checked){
                costs.push(checkboxes[i].getAttribute("data-cost"));
            };
        };
        let sum = 0;
        for (let i = 0; i < costs.length; i ++){
            sum = sum + parseInt(costs[i]);
        }
        value.textContent = sum;
        value.className = 'value';
        if ( value.textContent === '0' ) {
            value.style.display = 'none';
        }else{
            value.style.display = '';
            activities.appendChild(value);
        }
        
    });
    
});