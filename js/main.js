document.addEventListener('DOMContentLoaded', function () {
    const otherReceiverCheckbox = document.getElementById('otherReceiver');
    const otherReceiverFields = document.querySelectorAll('.checkout-form__group--hidden');
    const receiveOffersCheckbox = document.getElementById('receiveOffers');
    const noteText = document.querySelector('.checkout-form__note');

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

    const inputs = document.querySelectorAll('.checkout-form__input');

    inputs.forEach(input => {
        // Add class if input has value on page load
        if (input.value.trim() !== "") {
            input.classList.add('filled');
        }

        // Toggle class on input focus and blur
        input.addEventListener('focus', function () {
            input.classList.add('filled');
        });

        input.addEventListener('blur', function () {
            if (input.value.trim() === "") {
                input.classList.remove('filled');
            }
        });
    });
});
