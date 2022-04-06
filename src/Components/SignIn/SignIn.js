import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
                console.log(user)
                setUser(user);

                navigate('/profile')


            }).catch((error) => {
                // Handle Errors here.
                console.warn(error);
                // ...
            });

    const handleGithubSignUp = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then((result) => {

                const user = result.user;
                console.log(user)
                setUser(user);

                navigate('/profile')


            }).catch((error) => {
                // Handle Errors here.
                console.warn(error);
                // ...
            });
    }

    return (
        <div className='sign-in'>
            <div className="signin-container">
                <h3>Sign in</h3>
                <button onClick={handleGoogleSignUp} style={{ backgroundColor: "#DB4437" }}>Sign in With Google</button>
                <button style={{ backgroundColor: "#333333" }}>Sign in With Github</button>
                <button style={{ backgroundColor: "#4267B2" }}>Sign in With Facebook</button>
            </div>

        </div>
    );
};

export default SignIn;