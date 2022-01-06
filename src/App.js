import "./App.css";
import NavBar from "./components/header";
import { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { useAuth } from "./hooks/useAuth";
import AuthModal from "./components/authModal";

const testAcc = { email: "test@gmail.com", password: "password123" };

const App = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const { signUp, signIn, logout } = useAuth();

  const testAuth = async () => {
    try {
      await signIn(testAcc.email, testAcc.password);
      // await logout();
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    testAuth();
  }, []);

  return (
    <>
      <Router>
        <NavBar setOpenAuth={setOpenAuth} />
        <Layout>
          <Routes>
            <Route
              path="/signup"
              element={
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  alias porro labore quibusdam similique tenetur assumenda id,
                  excepturi atque eius ducimus deserunt vero dolores deleniti.
                  Facilis aliquam voluptates accusamus ducimus nesciunt
                  accusantium eligendi at nisi ipsa, nemo laudantium iure a.
                  Facere est animi eos fugit culpa maxime iste veniam deserunt.
                </Typography>
              }
            />
            <Route path="/login" element={<Typography>Login</Typography>} />
            <Route
              path="/create"
              element={<Typography>create todo</Typography>}
            />
            <Route
              path="/todoView"
              element={<Typography>My To do's</Typography>}
            />
            <Route path="/" element={<Typography>Home</Typography>} />
          </Routes>
          <AuthModal openAuth={openAuth} setOpenAuth={setOpenAuth} />
        </Layout>
      </Router>
    </>
  );
};

export default App;
