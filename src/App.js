import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import Profile from './Components/Profile/Profile';
import { createContext, useState } from 'react';
import app from './firebase.init';
import { getAuth } from "firebase/auth";

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
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
