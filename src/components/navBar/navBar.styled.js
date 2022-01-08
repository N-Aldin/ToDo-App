import Styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

export const LinkWrap = Styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
`;

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  color: white;
  width: 25%;
  // background-color: red;
`;

export const Logo = Styled(StickyNote2Icon)`
  margin-right: .5rem;
`;

export const LogoText = Styled.h2`
  font-style: italic;
`;

export const NavItem = Styled(NavLink)`
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
`;

export const NavMenu = Styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  // background-color: red;
`;

export const Nav = Styled.nav`
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 10px 10px -2px rgba(0,0,0,.3);
  background-color: #262626;
  height: 4rem;
  min-height: 4rem;
  // width: 100vw;
  // z-index: 100;
`;
