import React from 'react'
import { Link } from 'react-router-dom';
import Banner2 from '../assets/shop/banner2.png';

function Breadcrum({name}) {
  return (
    <>
     <section className="page-banner" style={{margin:`140px 0px 60px 0px`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <span className="round-shape"></span>
                        <h2 className="banner-title" style={ {textTransform: `capitalize`}}>{name}</h2>
                        <div className="bread-crumb"><Link to="/">Home</Link> / {name}</div>
                        <div className="banner-img">
                            <img src={Banner2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
 
    </>
  )
}

export default Breadcrum