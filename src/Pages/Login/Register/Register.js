import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

      if(user){
        navigate('/home');
      }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Car house Terms and Conditions</label>
                <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to={'/login'} className="text-primary text-decoration-none">Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;