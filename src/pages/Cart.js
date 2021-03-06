import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrum from '../comps/Breadcrum';
import CartItem from '../comps/CartItem';

function Cart() {
  return (
    <>
    <Breadcrum name={"Cart"}/>
    <section className="cart-section nes">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="woocommerce-cart-form" action="#">
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th className="product-name-thumbnail">Product Name</th>
                                        <th className="product-price">Unit Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-total">Total</th>
                                        <th className="product-remove">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <tr>
                                        <td colspan="6" className="actions">
                                            <button type="submit" className="button clear-cart">Clear Shopping Cart</button>
                                            <button type="submit" className="button update">Update Shopping Cart</button>
                                            <button type="submit" className="button continue-shopping">Continue Shopping</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="coupon">
                                        <h3>Counpon discount</h3>
                                        <p>
                                            Enter your code if you have one. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                        </p>
                                        <input type="text" name="coupon_code" placeholder="Enter Your code Here"/> 
                                        <button type="submit" className="button" name="apply_coupon">Apply coupon</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cart-totals">
                                        <h2>Cart Totals</h2>
                                        <table className="shop-table">
                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Sub Total</th>
                                                    <td data-title="Subtotal">
                                                        <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>42.00</span>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Grand Total</th>
                                                    <td data-title="Subtotal">
                                                        <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>48.00</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="wc-proceed-to-checkout">
                                            <Link to="/checkout" className="checkout-button">Proceed to checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    </>
  )
}

export default Cart