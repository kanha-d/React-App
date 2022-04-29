import React from 'react'
import item from '../assets/cart/1.jpg';

function CartItem() {
  return (
    <>
    <tr className="cart-item">
                                        <td className="product-thumbnail-title">
                                            <a href="#">
                                                <img src={item} alt=""/>
                                            </a>
                                            <a className="product-name" href="#">Wirless Headset</a> 
                                        </td>
                                        <td className="product-unit-price">
                                            <div className="product-price clearfix">
                                                <span className="price">
                                                    <span><span className="woocommerce-Price-currencySymbol">$</span>79.00</span>
                                                </span>           
                                            </div>
                                        </td>
                                        <td className="product-quantity clearfix">
                                            <div className="quantityd clearfix">
                                                <button className="qtyBtn btnMinus"><span>-</span></button>
                                                <input name="qty" value="1" title="Qty" className="input-text qty text carqty" type="text"/>
                                                <button className="qtyBtn btnPlus">+</button>
                                            </div>
                                        </td>
                                        <td className="product-total">
                                            <div className="product-price clearfix">
                                                <span className="price">
                                                    <span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span>
                                                </span>           
                                            </div>
                                        </td>
                                        <td className="product-remove">
                                            <a href="#"></a>
                                        </td>
    </tr>
                                    </>
  )
}

export default CartItem