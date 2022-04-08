import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../../App';
import './SignIn.css'
const SignIn = () => {
    const auth = useContext(AuthContext);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleSignIn = (event) => {
        event.preventDefault()
        
        if(email && password){
            
        signInWithEmailAndPassword(auth, email, password)
        .then(res =>{ 
            setUser(res.user)
            
            navigate('/profile')
        })
        .catch(error => toast.error(error.message))
        }
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
                toast.error(error.message);
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
                toast.error(error.message);
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

    return (
        <div className='sign-in'>
            <div className="signin-container">
                <h3>Sign in</h3>
                <form onSubmit={handleSignIn}>
                    
                        <input onChange={(event)=>setEmail(event.target.value)} type="email" placeholder='Your Email' name="" id="" />
                        <input onChange={(event)=>setPassword(event.target.value)}  type="password" placeholder='Your Password' name="" id="" />
                        <button  style={{ backgroundColor: "#00AFC1" }}><img src='https://img.icons8.com/cute-clipart/344/login-rounded-right.png' />Login</button>
                    

                    <p>Don't have any account? <Link to='/signup'>Signup</Link></p>
                    <p><Link to='/forget-password'>Forgot Password?</Link></p>
                </form>
                <div className='or'><hr /> OR <hr /></div>
                <button onClick={handleGoogleSignUp} style={{ backgroundColor: "#DB4437" }}><img src='https://img.icons8.com/color/344/google-logo.png' />Sign in With Google</button>
                <button onClick={handleGithubSignUp} style={{ backgroundColor: "#333333" }}><img src='https://img.icons8.com/ios-glyphs/344/github.png' />Sign in With Github</button>
                <button onClick={handleFacebookSignUp} style={{ backgroundColor: "#4267B2" }}><img src='https://img.icons8.com/fluency/344/facebook-new.png' />Sign in With Facebook</button>


            </div>

        </div>
    );
};

export default SignIn;