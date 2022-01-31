import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import theme from '../utils/themeconstants';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => {
    if (props.mobilemenu) {
      return 'black';
    }
    if (props.inverted) {
      return 'white';
    }
    return 'var(--link)';
  }};
  :hover {
    opacity: 0.7;
  }
`;

const StyledOutwardLink = styled.a`
  text-decoration: underline;
  color: ${(props) => {
    if (props.mobilemenu) {
      return 'black';
    }
    if (props.inverted) {
      return 'white';
    }
    return 'var(--link)';
  }};
  :hover {
    opacity: 0.7;
  }
`;

export default function link({
  to,
  children,
  inverted,
  mobilemenu,
  href,
  style,
  partiallyActive,
}) {
  return href ? (
    <StyledOutwardLink
      partiallyActive={partiallyActive}
      href={href}
      inverted={inverted}
      mobilemenu={mobilemenu}
      style={style}
      target="_blank"
    >
      {children}
    </StyledOutwardLink>
  ) : (
    <StyledLink
      partiallyActive
      activeStyle={{
        fontWeight: 900,
      }}
      mobilemenu={mobilemenu}
      to={to}
      inverted={inverted}
      style={style}
    >
      {children}
    </StyledLink>
  );
}

link.propTypes = {
  inverted: PropTypes.string,
};
