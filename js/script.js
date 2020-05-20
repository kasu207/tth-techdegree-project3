document.addEventListener('DOMContentLoaded', () => {
    //Constants
    //Input Check
    const name = document.querySelector('#name');
    //Input Roles
    const selectTitle = document.querySelector('#title');
    const inputOtherRole = document.querySelector('#otherVal');
    //Color Selection
    const design = document.querySelector('#design');
    const color = document.querySelector('#color');
    const divColor = document.querySelector('#colors-js-puns');
    //Activities
    const checkboxes = document.querySelectorAll('.activities input');
    const activities = document.querySelector('.activities');
    //Payment
    const paymentOption = document.querySelector('#payment');
    const divCard = document.querySelector('#credit-card');
    const divPaypal = document.querySelector('#paypal');
    const divBitcoin = document.querySelector('#bitcoin');

    //Validation
    const mail = document.querySelector('#mail');
    const ccNum = document.querySelector('#cc-num');
    const zipCode = document.querySelector('#zip');
    const cvv = document.querySelector('#cvv');

    //Submit
    const submitButton = document.querySelector('button');
    const form = document.querySelector('form');
    //Error
    const error = document.createElement('small');

    /* Tasks*/
    //Autofocus - Name Field
    name.focus();

    //Role
    inputOtherRole.style.display = 'none';
    selectTitle.addEventListener('change', () => {
        if (selectTitle.value === 'other') {
            inputOtherRole.type = 'text';
            //inputOtherRole.autofocus = true;
            inputOtherRole.id = 'otherRole';
            inputOtherRole.style.display = '';
        } else if (selectTitle !== 'other') {
            inputOtherRole.style.display = 'none';
        }
    });

    //Color Selection
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

    //Tshirt Selection
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
    //Add Error Messages to every Field
    //Name
    const errName = document.createElement('small');
    name.parentNode.insertBefore(errName, name.nextSibling);
    //Mail
    const errMail = document.createElement('small');
    mail.parentNode.insertBefore(errMail, mail.nextSibling);
    //Activity
    const errActi = document.createElement('small');
    activities.parentNode.insertBefore(errActi, activities.nextSibling);
    //Credit Card
    //Card
    const errCard = document.createElement('small');
    ccNum.parentNode.insertBefore(errCard, ccNum.nextSibling);
    //zip
    const errZip = document.createElement('small');
    zipCode.parentNode.insertBefore(errZip, zipCode.nextSibling);
    //cvv
    const errCVV = document.createElement('small');
    cvv.parentNode.insertBefore(errCVV, cvv.nextSibling);
    /*
     * Email 
     ** Checks if mail input field hast the correct input
     ** takes the mail element as input
     * Activities 
     ** checks, if at least one activitiy is chossen
     *+ takes the .activity class as input
     */
    function mailVal(mail) {
        return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail.value);
    };

    function activitiesVal() {
        let chcked = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                chcked += 1;
            }
        }
        if (chcked.length == 0) {
            return false;
        } else {
            return true;
        }
    };
    /*
    Function to check the input if the needed input fiels
    * checks name
    * checks mail
    * checks activities
    * checks credit card details if creditcard is selected
    */
    function checkInputs() {
        //check with the input values
        const nameVal = name.value;
        const emailVal = mail.value;
        let errors = [];
        if (nameVal === '') {
            errors += 1;
            setErrorFor(name, 'Name cannot be blank - please insert a username')
        } else {
            setSuccessFor(name);
        }
        if (emailVal === '' || !mailVal(mail)) {
            setErrorFor(mail, 'Email is not valid');
            errors += 1;
        } else {
            setSuccessFor(mail);
        }

        if (!activitiesVal(activities)) {
            errors += 1;
            setErrorFor(activities, 'At least one actitvity must be selected')
        } else {
            setSuccessFor(activities);
        }
        if (paymentOption[1].selected) {
            if (!(/^(\d{13}|\d{16})$/.test(ccNum.value))) {
                errors += 1;
                setErrorFor(ccNum, 'Please insert correct card details!')
            } else {
                setSuccessFor(ccNum);
            }
            if (!(/^\d{5}$/.test(zipCode.value))) {
                errors += 1;
                setErrorFor(zipCode, 'It seems that your zip Code is not in the right format!');
            } else {
                setSuccessFor(zipCode);
            }
            if (!(/^\d{3}$/.test(cvv.value))) {
                errors += 1;
                setErrorFor(cvv, 'It seems that your CVV is not in the right format!');
            } else {
                setSuccessFor(cvv);
            }
        }
        if(errors.length === 0){
            form.submit();
        };
    }
    /*Set Error Function
     * Goal: make input field with error visible
     * Inputs:
     ** input: Element where the error happend
     ** message: Display error message regarding to the field 
     */
    //Error Message
    function setErrorFor(input, message) {
        //input Parent
        const small = input.nextElementSibling;
        //input.focus();
        input.style.border = "2px crimson solid";
        //input.parentNode.insertBefore(small, input.nextSibling);
        input.style.marginBottom = '5px';
        small.textContent = message;
        small.style.color = "crimson";
        small.style.display = '';
    }

    function setSuccessFor(input) {
        input.style.border = "2px #3CB371 solid";
        const small = input.nextElementSibling;
        small.style.display = 'none';
    }

    //Exceed for Real-Time Validation on Mail
    mail.addEventListener('keyup', () => {
        if (!mailVal(mail) || mail.value === '') {
            setErrorFor(mail, 'Email ist not valid!')
        }else{
            setSuccessFor(mail);
        }
    })

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkInputs();   
    });


});