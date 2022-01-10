import './App.css';
import NavBar from './components/navBar';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import { useAuth } from './hooks/useAuth';
import AuthDialog from './components/authDialog';
import Notes from './pages/notes';
import Home from './pages/home';
import { NotesContext } from './contexts/notesContext';

const App = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState();
  const updateDB = useRef();

  const { loggedIn, user, setUser, updateUser } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      setNotes([]);
      setActiveNote();
      return;
    }

    setNotes(user.notes);
  }, [loggedIn]);

  useEffect(() => {
    if (!loggedIn) return;
    setUser({ ...user, notes });

    // Call to update user with the updated notes
    // This is done since setUser is a promise that won't necessairly
    // be done

    clearTimeout(updateDB.current);

    // Updates the database in 10s intervals after notes has changed
    updateDB.current = setTimeout(() => {
      if (!loggedIn) return; // In case user logs out before updateUser is called
      updateUser(notes);
    }, 10000);
  }, [notes]);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
          <Route path='/' element={<Home />} />
        </Routes>
        <AuthDialog openAuth={openAuth} setOpenAuth={setOpenAuth} />
      </Layout>
    </Router>
  );
};

export default App;
