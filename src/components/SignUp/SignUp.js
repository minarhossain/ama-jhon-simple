import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }


    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Password Did not match')
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters')
        }
        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className="form-container">
            <div>
                <form onSubmit={handleCreateUser}>
                    <h3 className="form-title">Sign Up </h3>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" />
                        <p style={{ color: 'red' }}>{error}</p>
                    </div>

                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className="form-link" to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;