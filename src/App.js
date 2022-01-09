import './App.css';
import NavBar from './components/navBar';
import { useState, useEffect } from 'react';
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

  const { loggedIn, user, setUser } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      setNotes([]);
      setActiveNote();
      return;
    }

    setNotes(user.notes);
    // Fetch notes from firebase
    console.log('fetching notes');
  }, [loggedIn]);

  useEffect(() => {
    if (!loggedIn) return;
    setUser({ ...user, notes });
  }, [notes]);

  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');
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
