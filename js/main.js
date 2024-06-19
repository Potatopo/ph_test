document.addEventListener('DOMContentLoaded', function () {
    const otherReceiverCheckbox = document.getElementById('otherReceiver');
    const otherReceiverFields = document.querySelectorAll('.checkout-form__group--hidden');
    const receiveOffersCheckbox = document.getElementById('receiveOffers');
    const noteText = document.querySelector('.checkout-form__note');
    const form = document.getElementById('checkoutForm');
    let inputs = document.querySelectorAll('.checkout-form__input');

    // Function to update inputs collection
    function updateInputs() {
        inputs = document.querySelectorAll('.checkout-form__input');
    }

    // Toggle visibility of additional receiver fields when 'Other Receiver' checkbox is clicked
    otherReceiverCheckbox.addEventListener('change', function () {
        otherReceiverFields.forEach(field => {
            field.classList.toggle('checkout-form__group--hidden');
        });
        updateInputs(); // Update inputs collection after toggling visibility
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
        phone: /^\+48\s\d{2}\s\d{7}$/,
        country: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        postcode: /^[0-9]{2}-[0-9]{3}$/,
        city: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        address: /^[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/,
        otherEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        otherFullname: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        otherPhone: /^\+48\s\d{2}\s\d{7}$/,
        otherCountry: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        otherPostcode: /^[0-9]{2}-[0-9]{3}$/,
        otherCity: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/,
        otherAddress: /^[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/
    };

    // Validation function
    function validateInput(input) {
        const inputValue = input.value.trim();
        const inputName = input.getAttribute('name');

        // Check if there is a validator for the input name
        if (validators.hasOwnProperty(inputName)) {
            const isValid = validators[inputName].test(inputValue);

            if (inputValue === '') {
                input.classList.add('error');
                input.classList.add('filled');
                input.classList.remove('validated');
                return false;
            } else if (isValid) {
                input.classList.add('validated');
                input.classList.remove('error');
                input.classList.remove('not-validated');
                return true;
            } else {
                input.classList.add('not-validated');
                input.classList.add('error');
                input.classList.add('filled');
                input.classList.remove('validated');
                return false;
            }
        } else {
            console.error(`Validator for ${inputName} not found.`);
            return false;
        }
    }

    // Apply initial state and event listeners to all inputs
    function initializeInputs() {
        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                input.classList.add('filled');
            }

            input.addEventListener('focus', function () {
                input.classList.add('filled');
            });

            input.addEventListener('blur', function () {
                validateInput(input);
            });
        });
    }

    initializeInputs(); // Initialize inputs on page load

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isFormValid = true;

        inputs.forEach(input => {
            if (!validateInput(input)) {
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
});
