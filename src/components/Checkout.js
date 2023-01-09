import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.png";



import "../styles.css";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51MOOwdDTXSw8EknMKrQ8fc0k41bml80He3LVadJYdhHWSvweTnlHbCqzY4LWuEqm1WppQiz0C7ex1X6uomZcaNkp00V5juu15K');
  }
  return stripePromise;
};

const Checkout = () => {
  const [isLoading, setLoading] = useState(false);


  const redirectToCheckout = async () => {
    // setLoading(true);
    const stripe = await getStripe();
    // setLoading(false);
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1MOP0LDTXSw8EknMhxggA1u3',
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/Success`,
      cancelUrl: `http://localhost:3000/Cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
    
  };


  return (
  
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Test</p>
      <p className="checkout-description">Dell Laptop</p>
      <h1 className="checkout-price">$10</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
        <button
          className="checkout-button"
          onClick={redirectToCheckout}
          //disabled={isLoading}
        >
          <div className="grey-circle">
            <div className="purple-circle">
              <img className="icon" src={CardIcon} alt="credit-card-icon" />
            </div>
          </div>
          <div className="text-container">
            <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
          </div>
        </button>
    </div>
  );
};

export default Checkout;
