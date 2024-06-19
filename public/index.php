<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\Controller\CheckoutController;

$controller = new CheckoutController();
$controller->showCheckoutPage();
