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

    const design = document.querySelector('#design');
    const color = document.querySelector('#color');
    const divColor = document.querySelector('#colors-js-puns');

    const colorOption = document.createElement('option');
    colorOption.textContent = 'Please select a T-shirt theme';
    colorOption.value = 'plsSelectShirt';
    colorOption.selected = true;
    colorOption.disabled = true;
    color.add(colorOption, 0);

    //Exceed: Hide Color and selct Menu until a Tshirt design is selected
    if (design.value == 'Select Theme' && design.selected == true) {
        divColor.style.display = '';
    } else {
        divColor.style.display = 'none';
    };

    for (let i = 0; i < color.length; i++) {
        color[i].style.display = 'none';
    };
    design.addEventListener('change', () => {
        for (let i = 0; i < color.length; i++) {
            color[i].style.display = 'none';
        };
        if (design.value === 'js puns') {
            color.add(colorOption, 0);
            colorOption.selected = true;
            divColor.style.display = '';
            for (let i = 0; i <= 3; i++) {
                color[i].style.display = '';
            };
        } else if (design.value === 'heart js') {
            color.add(colorOption, 4);
            colorOption.selected = true;
            divColor.style.display = '';
            for (let i = 3; i <= 6; i++) {
                color[i].style.display = '';
            };
        } else {
            color.add(colorOption, 0);
            colorOption.selected = true;
            divColor.style.display = 'none';
            for (let i = 1; i < color.length; i++) {
                color[i].style.display = 'none';
            };
        };
    });

    // Register Activities
    //trigger function if inputs are trigered
    const checkboxes = document.querySelectorAll('.activities input');
    const activities = document.querySelector('.activities');
    const value = document.createElement('p');
    activities.appendChild(value);
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
            } else if (checkboxes[i].checked) {
                costs.push(checkboxes[i].getAttribute("data-cost"));
            };
        };

        //Add Value to End
        let sum = 0;
        for (let i = 0; i < costs.length; i++) {
            sum = sum + parseInt(costs[i]);
        }
        value.textContent = `Total: $${sum}`;
        value.className = 'value';
        if (sum === 0) {
            value.style.display = 'none';
        } else {
            value.style.display = '';
        };
    });

    //Payment Info Section
    const paymentOption = document.querySelector('#payment');
    const divCard = document.querySelector('#credit-card');
    const divPaypal = document.querySelector('#paypal');
    const divBitcoin = document.querySelector('#bitcoin');
    for (let i = 0; i < paymentOption.length; i++) {
        if (paymentOption[i].value == 'credit card') {
            paymentOption[i].selected = true;
            divCard.style.display = '';
            divPaypal.style.display = 'none';
            divBitcoin.style.display = 'none';
        } else if (paymentOption[i].value == 'select method') {
            paymentOption[i].disabled = true;
        };
    };
    paymentOption.addEventListener('change', (e) => {
        const selected = e.target;
        if (selected.value == 'credit card') {
            divCard.style.display = '';
            divPaypal.style.display = 'none';
            divBitcoin.style.display = 'none';
        } else if (selected.value == 'paypal') {
            divPaypal.style.display = '';
            divBitcoin.style.display = 'none';
            divCard.style.display = 'none';
        } else if (selected.value == 'bitcoin') {
            divBitcoin.style.display = '';
            divCard.style.display = 'none';
            divPaypal.style.display = 'none';
        }
    });

    //Form Validation
    const validation = () => {

    };
    validation();

});