import Styled from "styled-components";
import { DialogActions, Button as Btn } from "@mui/material";

export const ButtonContainer = Styled(DialogActions)`
    display: flex;
    justify-content: space-between !important;
`;

export const AuthButtons = Styled.div`
    display: flex;
`;

export const Button = Styled(Btn)`
    margin: 0 .3rem !important; 
`;
