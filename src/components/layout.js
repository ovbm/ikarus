import React from 'react';
import PropTypes from 'prop-types';
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

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavExpanded: false,
      contentFullHeight: true,
      windowHeight: undefined,
    };
  }

  updateDimensions = () => {
    if (typeof document !== 'undefined') {
      const body = document.getElementsByTagName('body')[0];
      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        body.clientHeight;
      this.setState({ windowHeight: height });
    }
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  handleNavExpand = () => {
    const { mobileNavExpanded } = this.state;
    if (mobileNavExpanded) {
      this.setState((prevState) => ({
        mobileNavExpanded: !prevState.mobileNavExpanded,
      }));
      setTimeout(() => {
        this.setState((prevState) => ({
          contentFullHeight: !prevState.contentFullHeight,
        }));
      }, 800);
    } else {
      this.setState((prevState) => ({
        mobileNavExpanded: !prevState.mobileNavExpanded,
        contentFullHeight: !prevState.contentFullHeight,
      }));
    }
  };

  render() {
    const { children, parent, dark } = this.props;
    const { mobileNavExpanded, windowHeight, contentFullHeight } = this.state;
    return (
      <>
        <FontStyles />
        <ContentBody
          dark={dark}
          mobileNavExpanded={mobileNavExpanded}
          height={windowHeight}
          contentFullHeight={contentFullHeight}
          onClick={() => mobileNavExpanded && this.handleNavExpand()}
        >
          <Header
            siteTitle="Tomorrow"
            burgerClick={this.handleNavExpand}
            parent={parent}
            dark={dark}
          />
          {children}
          <Footer />
        </ContentBody>
        <MobileNav mobileNavExpanded={mobileNavExpanded} />
        <CloseButton
          mobileNavExpanded={mobileNavExpanded}
          onClick={this.handleNavExpand}
        >
          Close
        </CloseButton>
      </>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
