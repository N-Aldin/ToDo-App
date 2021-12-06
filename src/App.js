import './App.css';
import NavBar from './components/header'
import { useState, useEffect } from 'react'
import f from "./firebase"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/signup' element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, alias porro labore quibusdam similique tenetur assumenda id, excepturi atque eius ducimus deserunt vero dolores deleniti. Facilis aliquam voluptates accusamus ducimus nesciunt accusantium eligendi at nisi ipsa, nemo laudantium iure a. Facere est animi eos fugit culpa maxime iste veniam deserunt.</p>} />
          <Route path='/login' element={<p>Login</p>} />
          <Route path='/create' element={<p>create todo</p>} />
          <Route path='/todoView' element={<p>My To do's</p>} />
          <Route path='/' element={<p>Home</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
