import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setty}) {

const navigate = useNavigate();

const [userLog, setuserLog] = useState({
      email: "",
      password: ""
});

const handleIn = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserLog({ ... userLog, [name]: value});
}

const handleSubmit = (e) =>{
    e.preventDefault();
    var user = JSON.parse(localStorage.getItem('user_local'));
    if(user.email == userLog.email && user.password == userLog.password){
        sessionStorage.setItem("user_id",user.email);
        setty();
        navigate('/profile');
    }else{
        alert('Error login!');
        setuserLog({email:'',password:''}   )
    }
   
}
  return (
   <>
   <div class="col-lg-6 col-md-6">
                        <h3 class="sec-title">Login your account</h3>
                        <p class="sec-desc">
                            Login to your account to discovery all great features in this item
                        </p>
                        <div class="login-form">
                            <form action="#" onSubmit={handleSubmit} method="post">
                            <input type="email" name="email" value={userLog.email} onChange={handleIn} placeholder="Your Email"/>
                            <input type="password" name="password" value={userLog.password} onChange={handleIn} placeholder="Your Password"/>
                                <div class="keep-log-regi">
                                    <input type="radio" id="login" name="login" value="keep-login"/>
                                    <label for="login">Keep me logged in</label>   
                                </div>
                                <a href="#">Forgot your password?</a>
                                <input type="submit" name="submit" value="login"/>
                            </form>
                        </div>
                        <div class="social-log-regi">
                            <h5>OR LOGIN WITH</h5>
                            <a href="#"><i class="twi-facebook-f"></i></a>
                            <a href="#"><i class="twi-twitter"></i></a>
                            <a href="#"><i class="twi-google-plus-g"></i></a>
                            <a href="#"><i class="twi-instagram"></i></a>
                        </div>
                    </div>
   </>
  )
}

export default Login