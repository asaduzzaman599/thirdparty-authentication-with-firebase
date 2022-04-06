import React from 'react';
import './SignIn.css'
const SignIn = () => {
    return (
        <div className='sign-in'>
            <div className="signin-container">
            <h3>Sign in</h3>
                <button style={{backgroundColor:"#DB4437"}}>Sign in With Google</button>
                <button style={{backgroundColor:"#333333"}}>Sign in With Github</button>
                <button style={{backgroundColor:"#4267B2"}}>Sign in With Facebook</button>
            </div>

        </div>
    );
};

export default SignIn;