import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../../App';
import "./SignUp.css"
const SignUp = () => {
    const auth = useContext(AuthContext);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const [firstName,setFirtName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmedPassword,setConfirmedPassword]=useState('');


    const handleSignUp =(event)=>{
        event.preventDefault()

        event.target.email.value="2"
    }
    const handleGoogleSignUp = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                
                setUser(user);

                navigate('/profile')


            }).catch((error) => {
                // Handle Errors here.
                console.warn(error);
                // ...
            });
        }

    const handleGithubSignUp = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then((result) => {

                const user = result.user;
               
                setUser(user);

                navigate('/profile')


            }).catch((error) => {
                // Handle Errors here.
                console.warn(error);
                // ...
            });
    }

    
    const handleFacebookSignUp = () => {

        alert('Sorry! We are not allowing Facebook Login :( ')
        /* const FacebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, FacebookProvider)
            .then((result) => {

                const user = result.user;
               
                setUser(user);

                navigate('/profile')


            }).catch((error) => {
                // Handle Errors here.
                console.warn(error);
                // ...
            }); */
        }
        console.log(firstName)

    return (
        <div className='sign-up'>
        <div className="signup-container">
            <h3>Sign up</h3>
            <form onSubmit={handleSignUp}>
            <input type="text" placeholder='First Name' onChange={(event)=>setFirtName(event.target.value)} name="" value={firstName} id="" />
            <input type="text" placeholder='Last Name' name="" id="" />
            <input type="email" placeholder='Your Email' name="" id="" />
            <input type="password" placeholder='Your Password' name="" id="" />
            <input type="password" placeholder='Confirm Password' name="" id="" />
            <button style={{ backgroundColor: "#00AFC1" }}><img src='https://img.icons8.com/cute-clipart/344/login-rounded-right.png'/>Sign Up</button>
            
            <p>Already have account? <Link to='/signin'>Signin</Link></p>
            </form>
            <div className='or'><hr /> OR <hr /></div>
            <button onClick={handleGoogleSignUp} style={{ backgroundColor: "#DB4437" }}><img src='https://img.icons8.com/color/344/google-logo.png'  />Sign up With Google</button>
            <button onClick={handleGithubSignUp} style={{ backgroundColor: "#333333" }}><img src='https://img.icons8.com/ios-glyphs/344/github.png' />Sign up With Github</button>
            <button onClick={handleFacebookSignUp} style={{ backgroundColor: "#4267B2" }}><img src='https://img.icons8.com/fluency/344/facebook-new.png' />Sign up With Facebook</button>
            
            
        </div>

    </div>
    );
};

export default SignUp;