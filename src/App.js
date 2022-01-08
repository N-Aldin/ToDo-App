import './App.css';
import NavBar from './components/navBar';
import { useState, useEffect, useContext } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import { useAuth } from './hooks/useAuth';
import AuthDialog from './components/authDialog';
import Notes from './pages/notes';

const App = () => {
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <>
      <Router>
        <Layout>
          <NavBar setOpenAuth={setOpenAuth} />
          <Routes>
            <Route path='/notes' element={<Notes></Notes>} />
            <Route path='/about' element={<></>} />
            <Route path='/' element={<Typography>Home</Typography>} />
          </Routes>
          <AuthDialog openAuth={openAuth} setOpenAuth={setOpenAuth} />
        </Layout>
      </Router>
    </>
  );
};

export default App;
