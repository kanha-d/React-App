import React from 'react'


function Product({title,imgUrl,price}) {

    const disPrice = (o_price) => {
    const dis = Math.floor(Math.random() * 51);
    return Math.round(o_price - ((dis * o_price) / 100),2) ;
};

  return (
      <>
       <div className="col-lg-4 col-md-6">
                <div className="single-shop-product">
                    <div className="sp-thumb">
                        <img src={imgUrl} alt=""/>
                    </div>
                    <div className="sp-details">
                        <h4>{title}</h4>
                        <div className="product-price clearfix">
                            <span className="price">
                                <del><span><span className="woocommerce-Price-currencySymbol">$</span>{price}.00</span></del>
                                <ins><span><span className="woocommerce-Price-currencySymbol">$</span>{disPrice(price)}</span></ins>
                            </span>         
                        </div>
                        <div className="sp-details-hover">
                            <a className="sp-cart" href="#"><i className="twi-cart-plus"></i><span>Add to cart</span></a>
                            <a className="sp-wishlist" href="#"><i className="twi-heart2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
       </>     
  )
}

export default Product