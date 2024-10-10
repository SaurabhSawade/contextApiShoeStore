import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

function PaymentPage() {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="payment-page p-10 flex justify-center border-spacing-x-8 ml-80 gap-8 border-2 border-black 	rounded-3xl">
      <form className="payment-form border-spacing-14 ">
        <h3>Enter Credit Card Details</h3>
        <div>
          <label>Card Number :  </label>
          <input type="text" placeholder=" 1234 5678 9012 3456" />
        </div>
        <div>
          <label>Expiration Date :</label>
          <input type="text" placeholder=" MM/YY" />
        </div>
        <div>
          <label>CVV :</label>
          <input type="text" placeholder=" 123" />
        </div>
        <button type="submit" className='w-80'>Confirm Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;