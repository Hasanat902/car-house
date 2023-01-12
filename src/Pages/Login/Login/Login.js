import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      const navigate = useNavigate();
      let errorElement;

      if(loading || sending){
        return <Loading></Loading>
      }

      if(user){
        navigate(from, { replace: true });
      }
      if (error) {    
        errorElement = <p className='text-danger'>Error: {error.message}</p>
  
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
          await sendPasswordResetEmail(email);
          toast('Sent email');
        }
        else{
          toast('Please enter your email address');
        }
    }

  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <h3 className="text-primary text-center mt-2">Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Car House? <Link to={'/register'} className="text-primary text-decoration-none">Please Register</Link></p>
      <p>Forget Password? <button onClick={resetPassword} className="btn btn-link text-primary text-decoration-none">Reset your password</button></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
