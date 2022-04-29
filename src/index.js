import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Import Css
import './style/animate.css';
import './style/bootstrap.min.css';
 import './style/bootstrap.min.css.map';
 import './style/flaticon.css';
import './style/lightcase.css';
import './style/owl.carousel.min.css';
import './style/owl.theme.default.min.css';
import './style/pe-icon-7-stroke.css';
import './style/preset.css';
import './style/responsive.css';
import './style/settings.css';
import './style/theme.css';
import './style/themewar-icons.css';


import Header from './comps/Header';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './comps/Footer';
import About from './pages/About';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import LoginSignup from './pages/LoginSignup';
import WishList from './pages/WishList';
import Protected from './comps/Protected';

var user = false;
if(sessionStorage.getItem("user_id") !== null){
  user = true;
 
}
   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Router>    
      <Header session={user}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>

            <Route path="/cat">
              <Route path="mens" element={<Category name={"mens"}/>} />
              <Route path="womens" element={<Category name={"womens"}/>} />
              <Route path="children" element={<Category name={"children"}/>} />
            </Route>

            <Route  path="/profile"  element={
                <Protected user={user}>
                  <Home />
                </Protected>} 
            />

            
         
            <Route path="/wish-list" element={<WishList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
           

            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
    </Router>

    

    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
