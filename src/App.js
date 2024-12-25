import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from "react";

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return(

    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/signup" element = {<Signup></Signup>} />
        <Route path="/dashboard" element = {<Dashboard></Dashboard>} />

      </Routes>

    </div>

  ) 
}

export default App;
