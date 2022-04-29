import React from 'react'
import Breadcrum from '../comps/Breadcrum'
import Login from '../comps/Login'
import Signup from '../comps/Signup'

function LoginSignup({setty}) {

  return (
    <>
    <Breadcrum name={"Login / Register"}/>

    <section class="login-section">
            <div class="container">
                <div class="row">
                    <Login setty={setty}/>  
                    <Signup setty={setty}/>
                 
                </div>
            </div>
        </section>
    </>
  )
}

export default LoginSignup