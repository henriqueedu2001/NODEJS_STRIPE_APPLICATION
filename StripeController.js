var privateKey = "yourkey";
const stripe = require('stripe')(privateKey);

async function createCharge(amountInCents, source, description, customerEmail) {
    const charge = await stripe.charges.create({
        amount: amountInCents,
        currency: 'brl',
        source: source,
        description: description,
        receipt_email: customerEmail
      });
}

module.exports = {
    createCharge
}