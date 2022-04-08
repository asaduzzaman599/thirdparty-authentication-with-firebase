import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../../App';
import "./SignUp.css"
const SignUp = () => {
    const auth = useContext(AuthContext);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const [firstName, setFirtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');


    const handleSignUp = (event) => {
        event.preventDefault()
        if (firstName && lastName && email) {
            if (password === confirmedPassword) {

                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        updateProfile(auth.currentUser, {
                            displayName: `${firstName} ${lastName}`
                        }).then(() => {
                            toast.success('Check Your Mail For Varification.')
                            navigate('/signin');
                        }).catch((error) => {
                            
                        });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        
                        
                    });
            }
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
        <div className='sign-up'>

            <div className="signup-container">
                <h3>Sign up</h3>
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder='First Name' onChange={(event) => setFirtName(event.target.value)} name="" value={firstName} id="" required />
                    <input type="text" placeholder='Last Name' onChange={(event) => setLastName(event.target.value)} name="" id="" required />
                    <input type="email" placeholder='Your Email' onChange={(event) => setEmail(event.target.value)} name="" id="" required />
                    <input type="password" placeholder='Your Password' title='Minimum 8 character.' onChange={(event) => setPassword(event.target.value)} name="" id="" required />
                    <input type="password" placeholder='Confirm Password' title='Minimum 8 character.' onChange={(event) => setConfirmedPassword(event.target.value)} name="" id="" required />
                    <button style={{ backgroundColor: "#00AFC1" }}><img src='https://img.icons8.com/cute-clipart/344/login-rounded-right.png' />Sign Up</button>

                    <p>Already have account? <Link to='/signin'>Signin</Link></p>
                </form>
                <div className='or'><hr /> OR <hr /></div>
                <button onClick={handleGoogleSignUp} style={{ backgroundColor: "#DB4437" }}><img src='https://img.icons8.com/color/344/google-logo.png' />Sign up With Google</button>
                <button onClick={handleGithubSignUp} style={{ backgroundColor: "#333333" }}><img src='https://img.icons8.com/ios-glyphs/344/github.png' />Sign up With Github</button>
                <button onClick={(handleFacebookSignUp)} style={{ backgroundColor: "#4267B2" }}><img src='https://img.icons8.com/fluency/344/facebook-new.png' />Sign up With Facebook</button>


            </div>

        </div>
    );
};

export default SignUp;