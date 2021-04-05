import React from 'react';
import styled from 'styled-components';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';

import Link from './link';
import theme from '../utils/themeconstants';

const Header = ({ dark, siteTitle, burgerClick, parent }) => {
  const linkcolor = 'white';

  return (
    <TopHeader>
      <Container>
        <SocialLinks>
          <Link href="https://www.facebook.com/ikarusonline" outward target="_blank">
            <IoLogoFacebook />
          </Link>
          <Link href="https://www.instagram.com/ikarus_band" outward target="_blank">
            <IoLogoInstagram />
          </Link>
          <Link href="https://www.youtube.com/channel/UCF5VD2G4hRGEJuScWgYWN6A?spfreload=10" outward target="_blank">
            <IoLogoYoutube />
          </Link>
        </SocialLinks>
        <Navigation>
          <List>
            <Item className="primary">
              <List>
                <Item dark={dark}>
                  <Link to="/" linkcolor={linkcolor}>
                    Music
                  </Link>
                </Item>
                <Item dark={dark}>
                  <Link to="/live" linkcolor={linkcolor}>
                    Live
                  </Link>
                </Item>
                <Item dark={dark}>
                  <Link to="/band" linkcolor={linkcolor}>
                    Band
                  </Link>
                </Item>
                <Item dark={dark}>
                  <Link to="/video" linkcolor={linkcolor}>
                    Video
                  </Link>
                </Item>
              </List>
            </Item>
            <Item
              className="burger"
              onClick={burgerClick}
              linkcolor={linkcolor}
            >
              Menu
            </Item>
          </List>
        </Navigation>
      </Container>
    </TopHeader>
  );
};

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
  width: 100%;
  margin: 0 auto;
  padding: 0 4em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 0 1.5em;
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  display: flex;
  font-size: 1.5em;
  z-index:1;
  a {
    margin-right: 1em;
    line-height: 0;
  }
`;

const Navigation = styled.nav`
  display: block;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    justify-content: flex-end;
  }
  li a {
    margin: 0 1em;
    font-weight: 400;
  }
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  a {
    white-space: nowrap;
    text-shadow: ${(props) =>
      props.dark && !props.isSticky ? '0px 0px 10px rgba(0,0,0,0.8)' : null};
    transition: text-shadow 0.2s;
  }
  &.logo {
    a {
      margin: 0;
    }
  }
  &.primary {
    display: flex;
    justify-content: center;
    @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
      display: none;
    }
  }
  &.burger {
    color: ${(props) => props.linkcolor};
    display: none;
    font-weight: bold;
    cursor: pointer;
    @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
      display: list-item;
    }
  }
`;
