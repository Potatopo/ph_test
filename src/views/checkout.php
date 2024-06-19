<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Дані отримувача</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet">
</head>
<body>
    <header class="site-header">
        <div class="site-header__logo">
            <img src="/images/logo.png" alt="Site Logo">
        </div>
    </header>
    <div class="checkout-form">
        <h2 class="checkout-form__title">Дані отримувача</h2>
        
        <div class="checkout-present">
            <img src="/images/gift.svg" alt="Загадковий подарунок" class="checkout-present__image">
            <span class="checkout-present__title">Загадковий подарунок</span>
            <span class="checkout-present__desc">Подарунок-сюрприз йде разом з вашим замовленням. Не пропустіть! (це не пробник)</span>
        </div>
        
        <form id="checkoutForm">
            <div class="checkout-form__group">
                <input type="email" id="email" name="email" class="checkout-form__input">
                <label for="email" class="checkout-form__label">Email *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group">
                <input type="text" id="fullname" name="fullname" class="checkout-form__input">
                <label for="fullname" class="checkout-form__label">Ім’я та прізвище *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group">
                <input type="tel" id="phone" name="phone" class="checkout-form__input">
                <label for="phone" class="checkout-form__label">Phone *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group">
                <input type="text" id="country" name="country" class="checkout-form__input">
                <label for="country" class="checkout-form__label">Країна *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group">
                <input type="text" id="postcode" name="postcode" class="checkout-form__input">
                <label for="postcode" class="checkout-form__label">Поштовий код *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group">
                <input type="text" id="city" name="city" class="checkout-form__input">
                <label for="city" class="checkout-form__label">Місто *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group">
                <input type="text" id="address" name="address" class="checkout-form__input">
                <label for="address" class="checkout-form__label">Вулиця і номер будинку *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            
            <div class="checkout-form__group checkout-form__group--checkbox">
                <input type="checkbox" id="otherReceiver" name="otherReceiver" class="checkout-form__checkbox">
                <label for="otherReceiver" class="checkout-form__label">Інший одержувач (внести дані для іншого одержувача)</label>
            </div>
            
            <div class="checkout-form__group checkout-form__group--hidden">
                <input type="email" id="otherEmail" name="otherEmail" class="checkout-form__input">
                <label for="otherEmail" class="checkout-form__label">Email *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group checkout-form__group--hidden">
                <input type="text" id="otherFullname" name="otherFullname" class="checkout-form__input">
                <label for="otherFullname" class="checkout-form__label">Ім’я та прізвище *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group checkout-form__group--hidden">
                <input type="tel" id="otherPhone" name="otherPhone" class="checkout-form__input">
                <label for="otherPhone" class="checkout-form__label">Phone *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group checkout-form__group--hidden">
                <input type="text" id="otherCountry" name="otherCountry" class="checkout-form__input">
                <label for="otherCountry" class="checkout-form__label">Країна *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group checkout-form__group--hidden">
                <input type="text" id="otherPostcode" name="otherPostcode" class="checkout-form__input">
                <label for="otherPostcode" class="checkout-form__label">Поштовий код *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group checkout-form__group--hidden">
                <input type="text" id="otherCity" name="otherCity" class="checkout-form__input">
                <label for="otherCity" class="checkout-form__label">Місто *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            <div class="checkout-form__group checkout-form__group--hidden">
                <input type="text" id="otherAddress" name="otherAddress" class="checkout-form__input">
                <label for="otherAddress" class="checkout-form__label">Вулиця і номер будинку *</label>
                <span class="checkout-form__checkmark"></span>
            </div>
            
            <div class="checkout-form__group">
                <input type="checkbox" id="receiveOffers" name="receiveOffers" class="checkout-form__checkbox">
                <label for="receiveOffers" class="checkout-form__label">Я хочу першим отримувати акційні пропозиції та поради від експертів на електронну пошту</label>
            </div>
            
            <p class="checkout-form__note" style="display: none;">Тепер ви можете продовжити покупки. Після оформлення замовлення ви отримаєте посилання для підтвердження реєстрації акаунту.</p>
            
            <button type="submit" class="checkout-form__submit">Перейти до доставки</button>
        </form>
    </div>
    
    <script src="js/main.js"></script>
</body>
</html>
