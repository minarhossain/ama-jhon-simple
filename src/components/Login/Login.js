import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="form-container">
            <div>
                <form >
                    <h3 className="form-title">Login </h3>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className="form-submit" type="submit" value="Login" required/>
                </form>
                <p>
                    New to Ema-John? <Link className="form-link" to="/signup"required>Create an Account</Link>
                </p>
                <div className="or-container">
                    <div className="one"></div>
                    <div>or</div>
                    <div className="one"></div>
                </div>
                
                    <button className="button"> Contunue with Google</button>
               
            </div>
        </div>
    );
};

export default Login;