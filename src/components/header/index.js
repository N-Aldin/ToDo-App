import Styled from 'styled-components'
import { Button, Fade } from '@mui/material'
import { NavLink as Link } from 'react-router-dom'
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const NavBar = () => {

  return (
    <Fade in={true} timeout={{ enter: 1200, exit: 1000 }}>
      <Nav>
        <Container>
          <Logo fontSize='large' />
          {/* Add hover effect on letters to split apart - letter spacing */}
          <LogoText>AppNameHere</LogoText>
        </Container>
        <NavMenu>
          <NavLink to='/' activeStyle>Home</NavLink>
          <NavLink to='/create' activeStyle>Create</NavLink>
          <NavLink to='/login' activeStyle>My ToDo's</NavLink>
          <NavLink to='/signup' activeStyle>Sign in</NavLink>
        </NavMenu>
        <Container>
          <Button variant="contained" style={{ color: '#000', backgroundColor: '#fff' }}>Sign in</Button>
        </Container>
        {/* Material UI to do logo that changes color if its on home page */}
      </Nav>
    </Fade>
  )
}

const Container = Styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  color: white;
  width: 25%;
  // background-color: red;
`

const Logo = Styled(StickyNote2Icon)`
  margin-right: .5rem;
`

const LogoText = Styled.h2`
  font-style: italic;
`

const NavLink = Styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  color: white;
  padding: .5rem 1.2rem;
  // font-weight: 400;
  // font-family: 'Oxygen', sans-serif;
  font-family: 'Nunito', sans-serif;
  transition: all 10s;


  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    background-color: rgba(255,255,255,0.25);
    border-radius: 2rem;
    transform: scale(0, 1);
  }

  &.active::before, :hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &.active {
    font-style: italic;
  }
`

const NavMenu = Styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  // background-color: red;
`

const Nav = Styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 10px 10px -2px rgba(0,0,0,.3);
  background-color: #262626;
  height: 3.5rem;
`

const NavContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  // justify-content: center;
  // border-bottom: 1px solid whitesmoke;
  box-shadow: 0 10px 10px -2px rgba(0,0,0,.3);
  background-color: #262626;
  height: 4rem;
`

export default NavBar;