import React from 'react'
import Logo from '../assets/logo.png';
import Flag from '../assets/flag.png';
import Cart from '../assets/cart.png';
import { Link } from 'react-router-dom';
import SearchProduct from './SearchProduct';

function Header({handleLogout, session}) {

  function handlele () {
    // handleLogout()
    sessionStorage.removeItem("user_id")
    handleLogout()
  }  

  return (
    <>
      <header className="header-01 fix-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                            <Link  to="/">
                                <img src={Logo} alt="Goru"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="mainmenu mobile-menu">
                            <div className="mobile-btn">
                                <Link to="javascript: void(0);"><span>Menu</span><i className="twi-bars"></i></Link>
                            </div>
                            <ul>
                            <li><Link to="/shop">Shop</Link></li>
                               
                                <li className="menu-item-has-children">
                                   <a href="javascript: void(0);">Categories</a>
                                    <ul className="sub-menu">
                                        <li><Link to="/cat/mens">Mens</Link></li>
                                        <li><Link to="/cat/womens">Womens</Link></li>
                                        <li><Link to="/cat/children">Children</Link></li>
                                    </ul>
                                </li>
                                
                                <li><Link to="/wish-list">Wish List</Link></li>
                                <li><Link to="/cart">Cart</Link></li>

                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="header-cogs">
                            <a className="search search-toggles" href="javascript:void(0);"><i className="twi-search"></i></a>
                            <a className="select-country" to="javascript:void(0);"><img src={Flag} alt=""/>Eng</a>
                            <a className="select-currency" to="javascript:void(0);"><i className="twi-dollar-sign"></i>Usd</a>

                            {!session ? <Link className="user-login" to="/login">
                                <i className="twi-user-circle"></i><span>Login/Signup</span>
                            </Link> : <Link onClick={handlele} className="user-login" to="/">
                                <i className="twi-user-circle"></i><span>Logout</span>
                            </Link>}

                            

                            <Link className="carts" to="/cart"><span>4</span><img src={Cart} alt=""/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="popup-search-sec">
            <div class="popup-search-overlay"></div>
            <div class="overlay-popup">
                <Link to="javascript:void(0);" class="search-closer">x</Link>
                <div class="middle-search">
                    <div class="popup-search-form">
                        <form method="get" action="#">
                            <input type="search" name="s" id="s" placeholder="Search..."/>
                            <button type="submit"><i class="twi-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <SearchProduct/>
        </>
  )
}

export default Header