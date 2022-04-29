import React from 'react'
import Breadcrum from '../comps/Breadcrum'
import Cat from '../comps/Cat'
import Product from '../comps/Product'


function Category({name}) {
  return (
    <>
    <Breadcrum name={name}/>
    <section className="shop-left-sidebar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="shop-sidebar">
                            <aside className="widget widget-categories">
                                <h3 className="widget-title">Categories</h3>
                                <ul>
                                    <li><a href="#">SmartPhones</a><i className="twi-angle-down1"></i></li>
                                    <li><a href="#">Computers</a><i className="twi-angle-down1"></i></li>
                                    <li><a href="#">Smart Watch</a><i className="twi-angle-down1"></i></li>
                                    <li><a href="#">Cameras<span>*</span></a></li>
                                    <li><a href="#">On Sale<span>*</span></a></li>
                                </ul>
                            </aside>
                            <aside className="widget">
                                <h3 className="widget-title">Price</h3>
                                <div className="price_slider_wrapper">
                                    <form action="#" method="get" className="clearfix">
                                        <div id="slider-range"></div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="results">
                                    Showing 9 / 35 results
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="sort-view">
                                    <a className="view-mode active" href="#"><i className="twi-th"></i></a>
                                    <a className="view-mode" href="#"><i className="twi-bars"></i></a>
                                    <div className="sorts">
                                        <select name="sort">
                                            <option value="">Default Sorting</option>
                                            <option selected="selected" value="">low to high</option>
                                            <option value="">high to low</option>
                                            <option value="">Best Seller</option>
                                            <option value="">Popular Products</option>
                                        </select>
                                        <i className="twi-angle-down1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                          <Product/>
                          <Product/>
                          <Product/>
                          <Product/>
                          <Product/>
                          <Product/>
                          <Product/>
                          <Product/>
                          <Product/>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 col-md-12 mt-20">
                                <div className="goru-pagination text-center clearfix">
                                    <a className="prev" href="#"><i className="twi-long-arrow-alt-left"></i></a>
                                    <span className="current">1</span>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <a className="next" href="#"><i className="twi-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
    </section>
    <Cat catName={name}/>

    </>
  )
}

export default Category