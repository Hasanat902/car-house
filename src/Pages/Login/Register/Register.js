import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email' />
                <input type="password" name="password" id="" placeholder='Password' />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to={'/login'} className="text-primary text-decoration-none">Please Login</Link></p>
        </div>
    );
};

export default Register;