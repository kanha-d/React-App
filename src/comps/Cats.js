import React from 'react'
import CatIcon from './CatIcon'
import Product from './Product'

function Cats() {


const cats_arr = [
    {  
        linkstr : "",
        icon : "flaticon-smart-watch"
    },
    {   
        linkstr : "",
        icon : "flaticon-drone"
    },
    {   
        linkstr : "/",
        icon : "flaticon-pc"
    },
    {   
        linkstr : "",
        icon : "flaticon-console"
    },
    {  
        linkstr : "",
        icon : "flaticon-smartphone"
    },
    {   
        linkstr : "",
        icon : "flaticon-television"
    },
    {  
        linkstr : "",
        icon : "flaticon-headphones"
    },
    {   
        linkstr : "",
        icon : "flaticon-photo-camera"
    },
    {  
        linkstr : "",
        icon : "flaticon-wifi-router"
    }]
const pros_arr = [
        {  
            name : "Bluetooth Keyboard",
            url :"https://snvservices.com/wp-content/uploads/2021/08/placeholder-product-image.png",
            price : 400
        },
        {  
            name : "Bluetooth Mouse",
            url :"https://snvservices.com/wp-content/uploads/2021/08/placeholder-product-image.png",
            price : 200
        },
        {  
            name : "Expandable Mac",
            url :"https://snvservices.com/wp-content/uploads/2021/08/placeholder-product-image.png",
            price : 600
        },
        {  
            name : "Mac Book Pro",
            url :"https://snvservices.com/wp-content/uploads/2021/08/placeholder-product-image.png",
            price : 300
        },
        {  
            name : "Donald Duck",
            url :"https://snvservices.com/wp-content/uploads/2021/08/placeholder-product-image.png",
            price : 700
        },
        {  
            name : "Hp Alexa Laptop",
            url :"https://snvservices.com/wp-content/uploads/2021/08/placeholder-product-image.png",
            price : 400
        },
       ]
    
  return (
   <>
   <section class="categorie-section" style={{ marginTop: `200px` }}>

<div class="sec-heading rotate-rl">Product <span> Categories</span></div>

<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="sec-title">Product Categories</h2>
            <p class="sec-desc">
                Sed ut perspiciatis unde omnis iste natus<br/> er sit voluptatem accusantium dolore.
            </p>
        </div>
    </div>
    <div class="row">
      {cats_arr.map((cat,i) =>
        <CatIcon key={i} url={cat.linkstr} icon={cat.icon}/>
      )}
    </div>
</div>



<div class="container" style={{marginTop:`100px`}}>
    <div class="row">
        <div class="col-lg-12">
            <h2 class="sec-title">Special Products</h2>
            <p class="sec-desc">
                Sed ut perspiciatis unde omnis iste natus<br/> er sit voluptatem accusantium dolore.
            </p>
        </div>
    </div>
    <div class="row">
      {pros_arr.map((pro,i) =>
        <Product key={i} title={pro.name} imgUrl={pro.url} price={pro.price}/>
      )}
    </div>
</div>


<div class="cate-shage"><img src="assets/images/home/shape1.png" alt=""/></div>
</section>
   </>
  )
}

export default Cats