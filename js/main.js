document.addEventListener('DOMContentLoaded', function () {
    const otherReceiverCheckbox = document.getElementById('otherReceiver');
    const otherReceiverFields = document.querySelectorAll('.checkout-form__group--hidden');
    const receiveOffersCheckbox = document.getElementById('receiveOffers');
    const noteText = document.querySelector('.checkout-form__note');
    const form = document.getElementById('checkoutForm');
    const inputs = document.querySelectorAll('.checkout-form__input');

    // Toggle visibility of additional receiver fields when 'Other Receiver' checkbox is clicked
    otherReceiverCheckbox.addEventListener('change', function () {
        otherReceiverFields.forEach(field => {
            field.classList.toggle('checkout-form__group--hidden');
        });
    });

    // Display confirmation note when 'Receive Offers' checkbox is checked
    receiveOffersCheckbox.addEventListener('change', function () {
        if (receiveOffersCheckbox.checked) {
            noteText.style.display = 'block';
        } else {
            noteText.style.display = 'none';
        }
    });

    // Regular expressions for validation
    const validators = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        fullname: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        phone: /^\+48[0-9]{9}$/,
        country: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        postcode: /^[0-9]{2}-[0-9]{3}$/,
        city: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        address: /^[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/
    };

    function validateInput(input) {
        const inputValue = input.value.trim();
        const inputName = input.getAttribute('name');
        const isValid = validators[inputName].test(inputValue);

        if (inputValue === '') {
            input.classList.add('error');
            input.classList.add('filled');
            input.classList.remove('validated');
        } else if (isValid) {
            input.classList.add('validated');
            input.classList.remove('error');
        } else {
            input.classList.add('not-validated');
            input.classList.add('error');
            input.classList.add('filled');
            input.classList.remove('validated');
        }
    }

    inputs.forEach(input => {
        // Add class if input has value on page load
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        }

        // Toggle class on input focus and blur
        input.addEventListener('focus', function () {
            input.classList.add('filled');
        });

        input.addEventListener('blur', function () {
            validateInput(input);
        });
    });

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isFormValid = true;

        inputs.forEach(input => {
            const isValid = validateInput(input);
            if (!isValid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            console.log('Form is valid. Proceeding with submission.');
            // form.submit(); // Uncomment this line to actually submit the form
        } else {
            console.log('Form is not valid. Please check your inputs.');
        }
    });

    // Event listeners for input focus and blur to handle 'filled' class
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        }

        input.addEventListener('focus', function () {
            input.classList.add('filled');
        });

        input.addEventListener('blur', function () {
            if (input.value.trim() === '') {
                input.classList.remove('filled');
            }
        });
    });
});
