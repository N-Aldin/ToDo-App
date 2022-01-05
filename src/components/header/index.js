import { Button, Fade } from "@mui/material";
import {
  Nav,
  Container,
  LinkWrap,
  Logo,
  LogoText,
  NavMenu,
  NavItem,
} from "./header.styled";
import { useAuth } from "../../hooks/firebase";

const NavBar = () => {
  const { user } = useAuth();

  const logoutBtn = { color: "#000", backgroundColor: "#ff1000" };
  const signInOutBtn = { color: "#000", backgroundColor: "#fff" };

  return (
    <Fade in={true} timeout={{ enter: 1200, exit: 1000 }}>
      <Nav>
        <Container>
          <LinkWrap to="/">
            <Logo fontSize="large" />
            {/* Add hover effect on letters to split apart - letter spacing */}
            <LogoText>AppNameHere</LogoText>
          </LinkWrap>
        </Container>

        {/* Add hamburger menu here */}
        {/* Likely using breakpoints */}

        <NavMenu>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/create">My To Do's</NavItem>
          <NavItem to="/todoView">Create To Do's</NavItem>
          <NavItem to="/signup">Sign up</NavItem>
        </NavMenu>

        <Container>
          <LinkWrap to={user ? "/" : "/login"}>
            <Button variant="contained" style={user ? logoutBtn : signInOutBtn}>
              {user ? "Logout" : "Sign In/Up"}
            </Button>
          </LinkWrap>
        </Container>
        {/* Material UI notes logo that changes color if its on home page */}
      </Nav>
    </Fade>
  );
};

export default NavBar;
