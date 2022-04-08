import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import Profile from './Components/Profile/Profile';
import { createContext, useState } from 'react';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import SignUp from './Components/SignUp/SignUp';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';

export const UserContext = createContext();
export const AuthContext = createContext()


function App() {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={auth}>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path='/' element={<SignIn></SignIn>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/forget-password' element={<ForgetPassword></ForgetPassword>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
