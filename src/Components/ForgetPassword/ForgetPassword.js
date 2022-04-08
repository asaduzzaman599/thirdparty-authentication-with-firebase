import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import './Forgetpassword.css'
const ForgetPassword = () => {
    const auth = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (event)=>{
        event.preventDefault();
       if(email){
            
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            setEmail('')
            toast('Password Reset Mail Has Been Sent.')})
        .catch(error=>toast.error(error.message))
       }
  }
    return (
        <div className='forget-password'>
        <div className="forget-password-container">
            <div className='back-button' onClick={()=>navigate(-1)}>
            <img src="https://img.icons8.com/fluency/344/circled-left-2.png" alt="" />
            </div>
            <h3>Forgot Password</h3>
            <form onSubmit={handleSubmit}>
                
                    <input onChange={(event)=>setEmail(event.target.value)} type="email" placeholder='Your Email' name="" id="" />
                    
                    <button  style={{ backgroundColor: "#00AFC1" }}>Submit</button>
                

            </form>
            


        </div>

    </div>
    );
};

export default ForgetPassword;