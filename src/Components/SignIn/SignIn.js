import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../../App';
import './SignIn.css'
const SignIn = () => {
    const auth = useContext(AuthContext);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

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

    return (
        <div className='sign-in'>
            <div className="signin-container">
                <h3>Sign in</h3>
                <form >
                <input type="email" placeholder='Your Email' name="" id="" />
                <input type="password" placeholder='Your Password' name="" id="" />
                <button style={{ backgroundColor: "#00AFC1" }}><img src='https://img.icons8.com/cute-clipart/344/login-rounded-right.png'/>Login</button>
                
                <p>Don't have any account? <Link to='/signup'>Signup</Link></p>
                </form>
                <div className='or'><hr /> OR <hr /></div>
                <button onClick={handleGoogleSignUp} style={{ backgroundColor: "#DB4437" }}><img src='https://img.icons8.com/color/344/google-logo.png'  />Sign in With Google</button>
                <button onClick={handleGithubSignUp} style={{ backgroundColor: "#333333" }}><img src='https://img.icons8.com/ios-glyphs/344/github.png' />Sign in With Github</button>
                <button onClick={handleFacebookSignUp} style={{ backgroundColor: "#4267B2" }}><img src='https://img.icons8.com/fluency/344/facebook-new.png' />Sign in With Facebook</button>
                
                
            </div>

        </div>
    );
};

export default SignIn;