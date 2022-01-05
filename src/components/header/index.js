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

const NavBar = () => {
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
          <LinkWrap to="/login">
            <Button
              variant="contained"
              style={{ color: "#000", backgroundColor: "#fff" }}
            >
              Sign in
            </Button>
          </LinkWrap>
        </Container>
        {/* Material UI to do logo that changes color if its on home page */}
      </Nav>
    </Fade>
  );
};

export default NavBar;
