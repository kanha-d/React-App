import React, { useState } from 'react'
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
import Header from './comps/Header';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';



function App() {

    
    let userstr = sessionStorage.getItem("user_id")
    let userlocal = JSON.parse(localStorage.getItem("user_local"))   
    const [user, Setuser] = useState(userstr ? true : false)
    const navigate = useNavigate()

    const handlelogout = () => {
        sessionStorage.removeItem("user_id")
        Setuser(false)
        navigate('/login');
    }

    const setty = () => {
        Setuser(true)
    }

    const handleelogout = () => {
        Setuser(false)
    }
   
  return (
    <>  
      <Header handlelogout={handleelogout} session={user}/>
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
            
            <Route path="/wish-list" element={
                <Protected user={user}>
                    <WishList/>
                </Protected>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginSignup setty={setty} />}/>
           

            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App