import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import Profile from './Components/Profile/Profile';
import { createContext, useState } from 'react';

  const UserContext = createContext();

  function App() {
    const [user,setUser] = useState({});
  return (
    <UserContext.Provider className="App" value={[user,setUser]}>
      <Routes>
        <Route path='/' element={<SignIn></SignIn>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
