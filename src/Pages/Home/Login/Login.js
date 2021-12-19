import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Login = () => {
   const { setError, signInWithGoogle, resetPassword, signInWithEmailPassword, error, setUser, saveUser } = useAuth()
   const [email, setEmail] = useState([])
   const [password, setPassword] = useState([])




   const navigate = useNavigate()
   const location = useLocation()


   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }

   const handleSignInEmailPassword = (e) => {
      e.preventDefault()

      signInWithEmailPassword(email, password, navigate, location)
   }

   const handleSignInWithGoogle = () => {
      signInWithGoogle()
         .then((result) => {
            setError("")
            setUser(result.user);
            saveUser(result?.user?.email, result?.user?.displayName, "PUT")
            navigate(location?.state?.from || '/')
            window.location.reload();
         }).catch((error) => {
            setError(error.message);
         });
   }



   const handleResetPassword = () => {
      resetPassword(email)
         .then(() => {
            alert("You can rest your password. check your email")
            setError("")
         })
         .catch((error) => {

            setError(error.message)
         });
   }

   return (
      <>

         <div className="login-form">

            <div className="my-cart">
               <h2>Please login </h2>
               <p className="text-danger">{error}</p>


               <form onSubmit={handleSignInEmailPassword} action="">

                  <input onChange={handleEmail} type="email" required placeholder='Enter your email' />
                  <br />
                  <input onChange={handlePassword} type="password" required placeholder="Enter password" /><br />
                  <input className="login-btn" type="submit" value="Login" /><br />

               </form>
               <Link onClick={handleResetPassword} to="/login">Forgot password</Link>
               <br />
               <div className="mb-2">
                  <span >Create a new account <Link to="/register">Register</Link></span>
               </div><br />
               <p >----- Or login -----</p>
               <button className="online-btn google " onClick={handleSignInWithGoogle}><i className="fab fa-google"></i> Google</button>


            </div>
         </div>
      </>
   );
};

export default Login;