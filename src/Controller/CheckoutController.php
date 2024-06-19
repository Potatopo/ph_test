<?php

namespace App\Controller;

class CheckoutController
{
    public function showCheckoutPage()
    {
        require_once __DIR__ . '/../views/checkout.php';
    }
}
