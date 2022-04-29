import React from 'react'
import Truck from '../assets/home/truck.png';
import headphone from '../assets/home/headphone.png';
import Undo from '../assets/home/undo.png';


function Features() {
  return (
   <>
      <section class="service-section" style={{padding: `100px 30px`,backgroundColor:`#f9fbff`}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-service">
                            <img src={Truck} alt="" />
                            <h4>100% Free Shipping</h4>
                            <p>We ship all our products for free as long as you buying within the USA.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-service">
                            <img src={headphone} alt="" />
                            <h4>24/7 Support</h4>
                            <p>Our support team is extremely active, you will get response within 2 minutes.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-service">
                            <img src={Undo} alt="" />
                            <h4>30 Day Return</h4>
                            <p>Our 30 day return program is open from customers, just fill up a simple form.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Features