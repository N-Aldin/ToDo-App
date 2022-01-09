import './App.css';
import NavBar from './components/navBar';
import { useState, useEffect, useContext } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import { useAuth } from './hooks/useAuth';
import AuthDialog from './components/authDialog';
import Notes from './pages/notes';
import { NotesContext } from './contexts/notesContext';

const App = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});

  const { loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      setNotes([]);
      setActiveNote({});
    }
    // Fetch notes from firebase
    console.log('fetching notes');
  }, [loggedIn]);

  return (
    <Router>
      <Layout>
        <NavBar setOpenAuth={setOpenAuth} />
        <Routes>
          <Route path='/about' element={<></>} />
          <Route
            path='/notes'
            element={
              <NotesContext.Provider
                value={{ notes, activeNote, setActiveNote, setNotes }}
              >
                <Notes />
              </NotesContext.Provider>
            }
          />
          <Route path='/' element={<Typography>Home</Typography>} />
        </Routes>
        <AuthDialog openAuth={openAuth} setOpenAuth={setOpenAuth} />
      </Layout>
    </Router>
  );
};

export default App;
