import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.STRIPE_API_KEY}`);
  }

  console.log(stripePromise);
  return stripePromise;
};

export default getStripe;
