import { signOut } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../../App';
import './Profile.css'

const Profile = () => {
    const auth = useContext(AuthContext);
    const [user, setUser] = useContext(UserContext);
    const {displayName,photoURL} =user;
    const navigate = useNavigate();

    console.log('photoURL',photoURL)
    useEffect(()=>{
        
    if(!user.uid){
        navigate('/signin')
    }
    },[user])

    const signOutProfile= () =>{
        signOut(auth)
        .then()
        .catch()

        setUser({});
    }
    return (
        <div className='profile'>
            <div className="profile-container">
            <h3>Profile</h3>
            
            <img src={photoURL} alt="" />
            <h2>{displayName}</h2>
            <button onClick={signOutProfile}>Log Out</button>
            </div>

        </div>
    );
};

export default Profile;