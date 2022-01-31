import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from '../utils/themeconstants';
import Header from './header';
import Footer from './footer';
import MobileNav from './mobilenav';

const ContentBody = styled.div`
  z-index: 10;
  position: relative;
  top: 0;
  transform-origin: right;
  background-color: var(--bg);
  transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1),
    background-color 2s cubic-bezier(0.2, 1, 0.3, 1);
  transform: ${(props) =>
    props.mobileNavExpanded
      ? 'scale(0.84) translateX(-93vw) translateZ(0)!important'
      : 'none'};
  width: 100%;
  overflow: ${(props) => (props.contentFullHeight ? 'visible' : 'hidden')};
  height: ${(props) =>
    props.contentFullHeight ? '100%' : `${props.height}px`};
  min-height: 100vh;
`;

const CloseButton = styled.button`
  position: fixed;
  cursor: pointer;
  top: 30px;
  right: 30px;
  z-index: 6;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
  transform-origin: center;
  transform: ${(props) => (props.mobileNavExpanded ? 'scale(0.9)' : 'none')};
`;

const Layout = ({ children, activeSide }) => {
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
  const [contentFullHeight, setContentFullHeight] = useState(true);
  const [windowHeight, setWindowHeight] = useState();

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof document !== 'undefined') {
        const body = document.getElementsByTagName('body')[0];
        const height =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          body.clientHeight;
        setWindowHeight(height);
      }
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleNavExpand = () => {
    if (mobileNavExpanded) {
      setMobileNavExpanded((prevState) => !prevState);
      setTimeout(() => {
        setContentFullHeight((prevState) => !prevState);
      }, 800);
    } else {
      setMobileNavExpanded((prevState) => !prevState);
      setContentFullHeight((prevState) => !prevState);
    }
  };

  return (
    <>
      <ContentBody
        activeSide={activeSide}
        mobileNavExpanded={mobileNavExpanded}
        height={windowHeight}
        contentFullHeight={contentFullHeight}
        onClick={() => mobileNavExpanded && handleNavExpand()}
      >
        <Header burgerClick={() => handleNavExpand()} />
        {children}
        <Footer activeSide={activeSide} />
      </ContentBody>
      <MobileNav mobileNavExpanded={mobileNavExpanded} />
      <CloseButton
        mobileNavExpanded={mobileNavExpanded}
        onClick={() => handleNavExpand()}
      >
        Close
      </CloseButton>
      <style>
        {`
          :root {
            --text: ${
              activeSide === 'show-back' || activeSide === 'show-right'
                ? 'black'
                : 'white'
            };
            --link: ${
              activeSide === 'show-back' || activeSide === 'show-right'
                ? theme.colors.bgPrimary
                : '#FDE497'
            };
            --bg: ${
              activeSide === 'show-front'
                ? theme.colors.bgPrimary
                : activeSide === 'show-right'
                ? theme.colors.bgMosaismic
                : activeSide === 'show-left'
                ? theme.colors.bgChronosome
                : activeSide === 'show-back'
                ? theme.colors.bgEcho
                : theme.colors.bgPrimary
            };
          }
        `}
      </style>
    </>
  );
};

export default Layout;
