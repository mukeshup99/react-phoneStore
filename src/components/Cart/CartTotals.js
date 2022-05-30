import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className='row'>
      <div className='col-10 ml-auto mr-1 col-sm-6 ml-auto mr-2 col-md-4 mt-2  col-lg-3 ml-auto mr-4 text-capitalize text-right'>
        <Link to='/'>
          <button
            className='btn btn-outline-danger text-uppercase px-5'
            onClick={() => {
              clearCart();
            }}
          >
            clear cart
          </button>
        </Link>
        <h3 className='text-uppercase text-title text-center my-2'>
          subtotal :${cartSubTotal}
        </h3>
        <h3 className='text-uppercase text-title text-center my-2'>
          cartTax :${cartTax}
        </h3>
        <h3 className='text-uppercase text-title text-center my-2'>
          total :${cartTotal}
        </h3>
      </div>
    </div>
  );
}
