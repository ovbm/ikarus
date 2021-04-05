import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import theme from '../utils/themeconstants';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${
  (props) => {
    if (props.mobilemenu) {
      return 'black';
    }
    if (props.inverted) {
      return 'white';
    }
    if (props.linkcolor) {
      return props.linkcolor;
    }
    return theme.colors.blue;
  }
};
  transition: opacity 0.4s, color 0.4s;
  :hover {
    opacity: 0.8;
  }
`;

const StyledOutwardLink = styled.a`
  text-decoration: underline;
  color: ${
  (props) => {
    if (props.mobilemenu) {
      return 'black';
    }
    if (props.inverted) {
      return 'white';
    }
    if (props.linkcolor) {
      return props.linkcolor;
    }
    return 'white';
  }
};  transition: color 0.4s, opacity 0.4s;
  :hover {
    opacity: 0.8;
    color: ${theme.colors.primary};
  }
`;


export default function link({
  to,
  children,
  inverted,
  mobilemenu,
  linkcolor,
  outward,
  href,
  style,
  partiallyActive,
}) {
  return (outward ? (
    <StyledOutwardLink
      partiallyActive={partiallyActive}
      href={href}
      inverted={inverted}
      linkcolor={linkcolor}
      mobilemenu={mobilemenu}
      style={style}
      target="_blank"
    >
      {children}
    </StyledOutwardLink>
  ) : (
    <StyledLink
      partiallyActive={partiallyActive}
      activeStyle={
            mobilemenu ? {
              color: theme.colors.blue,
            } : {
              color: linkcolor,
              fontWeight: 900,
            }
        }
      mobilemenu={mobilemenu}
      to={to}
      inverted={inverted}
      linkcolor={linkcolor}
      style={style}
    >
      {children}
    </StyledLink>
  ));
}

link.propTypes = {
  inverted: PropTypes.string,
};
