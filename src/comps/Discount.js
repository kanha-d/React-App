import React from 'react'
import Shape2 from '../assets/home/shape4.png';

function Discount() {
  return (
    <>
        <section class="mailchimp-section" style={{padding: `100px 0px 0px 0px`,backgroundColor:`#f9fbff`}}>


        <div class="container">
        <div class="row">
        <div class="col-lg-8 text-center mx-auto">
        <h3 class="sec-title">Get Discount 30% Off</h3>
        <br/>
        <form class="mailchimp-form" action="#" method="post">
        <input type="email" name="email" placeholder="your email"/>
        <button type="submit">Subscribe</button>
        </form>
        </div>
        </div>
        </div>

        <div class="mailchimp-shape"><img src={Shape2} alt=""/></div>
        </section>
    </>
  )
}

export default Discount