import React, { useState } from 'react';
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  FormHelperText,
} from '@mui/material';
import { ButtonContainer, Button, AuthButtons } from './authDialog.styled';
import { useAuth } from '../../hooks/useAuth';

const AuthDialog = ({ openAuth, setOpenAuth }) => {
  const [openConfirmPass, setConfirmPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchError, setMatchError] = useState(false);

  const { user, signUp, signIn } = useAuth();

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick') return;

    setOpenAuth(false);

    setTimeout(() => {
      setConfirmPass(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setMatchError(false);
    }, 250);
  };

  const handleSignUp = async () => {
    if (!openConfirmPass) {
      setConfirmPass(true);
      return;
    }

    if (password !== confirmPassword) setMatchError(true);

    // Firebase will provide verification for the data entered
    try {
      await signUp(email, password);
      console.log(user);
      handleClose();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      console.log(user);
      handleClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Dialog open={openAuth} onClose={handleClose} maxWidth='xs' fullWidth>
      <DialogTitle>Sign in</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='email'
          label='Email Address'
          type='email'
          fullWidth
          variant='standard'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          margin='dense'
          id='password'
          label='Password'
          type='password'
          fullWidth
          variant='standard'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMatchError(false);
          }}
        />
        {openConfirmPass && (
          <>
            <TextField
              autoFocus
              margin='dense'
              id='confirmPassword'
              label='Confirm Password'
              type='password'
              fullWidth
              variant='standard'
              value={confirmPassword}
              aria-describedby='passwordsDontMatch'
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setMatchError(false);
              }}
            />
            {matchError && (
              <FormHelperText error id='passwordsDontMatch' color>
                Passwords don't match
              </FormHelperText>
            )}
          </>
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
