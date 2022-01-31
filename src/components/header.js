import React from 'react';
import styled from 'styled-components';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';

import Link from './link';
import theme from '../utils/themeconstants';

const Header = ({ burgerClick }) => (
  <TopHeader>
    <Container>
      <SocialLinks>
        <Link href="https://www.facebook.com/ikarusonline">
          <IoLogoFacebook />
        </Link>
        <Link href="https://www.instagram.com/ikarus_band">
          <IoLogoInstagram />
        </Link>
        <Link href="https://www.youtube.com/channel/UCF5VD2G4hRGEJuScWgYWN6A?spfreload=10">
          <IoLogoYoutube />
        </Link>
      </SocialLinks>
      <Navigation>
        <Link to="/" partiallyActive={false}>Music</Link>
        <Link to="/live">Live</Link>
        <Link to="/band">Band</Link>
        <Link to="/video">Video</Link>
      </Navigation>
      <Burger className="burger" onClick={burgerClick}>
        Menu
      </Burger>
    </Container>
  </TopHeader>
);

export default Header;

const TopHeader = styled.header`
  padding: 30px 0px;
  width: 100%;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s;
`;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 4em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 0 1.5em;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  font-size: 1.5em;
  z-index: 1;
  a {
    margin-right: 1em;
    line-height: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    display: none;
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
	color: inherit;
	border: none;
  cursor: pointer;
  font-weight: bold;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    display: list-item;
  }
`;
