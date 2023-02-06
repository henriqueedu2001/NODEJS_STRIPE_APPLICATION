const StripeController = require('./StripeController');

console.log("Application started!");

StripeController.createCharge(
    500, 
    "tok_mastercard", 
    "test charge with customer",
    "henrique_eduardo_souza@hotmail.com"
);