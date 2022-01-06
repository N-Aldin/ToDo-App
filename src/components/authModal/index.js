import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import Styled from "styled-components";

const AuthModal = ({ openAuth, setOpenAuth }) => {
  const [openConfirmPass, setConfirmPass] = React.useState(false);

  const handleClose = () => {
    setOpenAuth(false);
    setTimeout(() => {
      setConfirmPass(false);
    }, 250);
  };

  const handleSignUp = async () => {
    setConfirmPass(true);
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
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="name"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
        {openConfirmPass && (
          <TextField
            margin="dense"
            id="name"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
          />
        )}
      </DialogContent>
      <ButtonContainer>
        <Btn onClick={handleClose}>Cancel</Btn>
        <AuthButtons>
          {!openConfirmPass && <Btn onClick={handleSignIn}>Sign in</Btn>}
          <Btn onClick={handleSignUp}>Sign up</Btn>
        </AuthButtons>
      </ButtonContainer>
    </Dialog>
  );
};

const ButtonContainer = Styled(DialogActions)`
    display: flex;
    justify-content: space-between !important;
`;

const AuthButtons = Styled.div`
    display: flex;
`;

const Btn = Styled(Button)`
    margin: 0 .3rem !important; 
`;

export default AuthModal;
