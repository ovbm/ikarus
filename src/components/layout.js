import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from '../utils/themeconstants';
import Header from './header';
import Footer from './footer';
import MobileNav from './mobilenav';
import FontStyles from '../utils/fontstyles';

const ContentBody = styled.div`
  z-index: 10;
  position: relative;
  top: 0;
  transform-origin: right;
  background-color: ${(props) =>
    props.dark ? 'black' : theme.colors.bgPrimary};
  transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
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

const Layout = ({ children, parent, dark }) => {
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
      <FontStyles />
      <ContentBody
        dark={dark}
        mobileNavExpanded={mobileNavExpanded}
        height={windowHeight}
        contentFullHeight={contentFullHeight}
        onClick={() => mobileNavExpanded && handleNavExpand()}
      >
        <Header
          siteTitle="Tomorrow"
          burgerClick={() => handleNavExpand()}
          parent={parent}
          dark={dark}
        />
        {children}
        <Footer />
      </ContentBody>
      <MobileNav mobileNavExpanded={mobileNavExpanded} />
      <CloseButton
        mobileNavExpanded={mobileNavExpanded}
        onClick={() => handleNavExpand()}
      >
        Close
      </CloseButton>
    </>
  );
};

export default Layout;
