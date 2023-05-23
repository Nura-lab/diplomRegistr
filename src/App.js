import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import TradionalFoods from './pages/TradionalFoods/tradionalFoods';
import Publick from "./pages/Publick";
import Tradional from "./pages/Tradional/Tradional";
import About from "./components/About/about";
import Home from "./pages/Home/index";
import ActionAreaCard from "./components/ActionAreaCard/index";
import NotFound from "./pages/notfound/index";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import Forgot from "./pages/auth/Forgot";
import Admin from "./pages/Admin/index";
import css from "./styles/index.css";
// import "./styles/index.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="TradionalFoods" element={<TradionalFoods />} />
          <Route exact path="About" element={<About />} />
          {/* <Route exact path="/user" element={<UserProfile/>} /> */}
          <Route exact path="auth/signin" element={<SignIn />} />
          <Route exact path="auth/signup" element={<SignUp />} />
          <Route exact path="Forgot" element={<Forgot />} />
          <Route exact path="Publick" element={<Publick/>} />
          <Route exact path="ActionAreaCard" element={<ActionAreaCard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
