import React, { useState } from "react";
import { TextField, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ButtonContainer, Button, AuthButtons } from "./authDialog.styled";
import { useAuth } from "../../hooks/useAuth";

const AuthDialog = ({ openAuth, setOpenAuth }) => {
  const [openConfirmPass, setConfirmPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp, signIn, logout } = useAuth();

  const handleClose = () => {
    setOpenAuth(false);
    setTimeout(() => {
      setConfirmPass(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }, 250);
  };

  const handleSignUp = async () => {
    if (!openConfirmPass) setConfirmPass(true);

    // Verify fields have correct values
    // Use states to get the values from the fields
    // Send the signUp request
  };

  const handleSignIn = async () => {
    return;
  };

  return (
    <Dialog open={openAuth} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Sign in</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {openConfirmPass && (
          <TextField
            autoFocus
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        )}
      </DialogContent>
      <ButtonContainer>
        <Button onClick={handleClose}>Cancel</Button>
        <AuthButtons>
          {!openConfirmPass && <Button onClick={handleSignIn}>Sign in</Button>}
          <Button onClick={handleSignUp}>Sign up</Button>
        </AuthButtons>
      </ButtonContainer>
      {/* Add option to go back to sign in */}
    </Dialog>
  );
};

export default AuthDialog;
