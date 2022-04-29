import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function Signup() {

const navigate = useNavigate();

  const [userReg, setuserReg] = useState({
        name: "",
        gender: "",
        mobile: "",
        email: "",
        password: "",
        rpassword: "",
        register: ""
  });


  const handleIn = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setuserReg({ ... userReg, [name]: value});
  }

  const handleSubmit = (e) =>{
      
        e.preventDefault();
        const newUser = {...userReg,id:userReg.email}
       
        localStorage.setItem("user_local",JSON.stringify(newUser));
        sessionStorage.setItem("user_id",newUser.id);
        navigate('/');
       
  }

  return (
    <>
       <div class="col-lg-6 col-md-6">
                        <h3 class="sec-title">Register account now</h3>
                        <p class="sec-desc">
                            Pellentesque habitant morbi tristique senectus et netus et
                        </p>
                        <div class="register-form">
                            <form action="#" method="post" onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="text" onChange={handleIn} value={userReg.name} name="name" placeholder="Your Name"/>
                                    </div>
                                    <div class="col-lg-6">
                                        <select  className='form-control' name="gender" onChange={handleIn}>
                                        <option>Select Gender</option>
                                        <option>Men</option>
                                            <option>Women</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="text" onChange={handleIn} value={userReg.mobile} name="mobile" placeholder="Mobile"/>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="email" onChange={handleIn} value={userReg.email} name="email" placeholder="Email"/>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="password" onChange={handleIn} value={userReg.password} name="password" placeholder="Password"/>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="password" onChange={handleIn} value={userReg.rpassword} name="rpassword" placeholder="Re Password"/>
                                    </div>
                                </div>
                                <div class="keep-log-regi">
                                    <input type="radio" id="register" name="register"  value="keep-register"/>
                                    <label for="register">
                                        I accept the terms and conditions, including the Privacy Policy
                                    </label>   
                                </div>
                                <input type="submit" name="submit" value="register"/>
                            </form>
                        </div>
                        <div class="social-log-regi">
                            <h5>OR Register WITH</h5>
                            <a href="#"><i class="twi-facebook-f"></i></a>
                            <a href="#"><i class="twi-twitter"></i></a>
                            <a href="#"><i class="twi-google-plus-g"></i></a>
                            <a href="#"><i class="twi-instagram"></i></a>
                        </div>
                    </div>
                    </>
  )
}

export default Signup