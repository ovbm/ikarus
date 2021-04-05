import React from 'react';
import styled from 'styled-components';

import Link from './link';

export default class mobilenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: 'company',
    };
  }

  handleExpand = (value) => {
    this.setState({
      expanded: value,
    });
  }

  render() {
    const { mobileNavExpanded } = this.props;
    const { expanded } = this.state;
    return (
      <SlideOutNav>
        <Container>
          <MenuContainer mobileNavExpanded={mobileNavExpanded}>
            <List>
              <Item>
                <StyledLink>
                  <Link mobilemenu="true" to="/">Music</Link>
                </StyledLink>
              </Item>
              <Item>
                <StyledLink>
                  <Link mobilemenu="true" to="/live">Live</Link>
                </StyledLink>
              </Item>
              <Item>
                <StyledLink>
                  <Link mobilemenu="true" to="/band">Band</Link>
                </StyledLink>
              </Item>
              <Item>
                <StyledLink>
                  <Link mobilemenu="true" to="/video">Video</Link>
                </StyledLink>
              </Item>
            </List>
          </MenuContainer>
        </Container>
      </SlideOutNav>
    );
  }
}
const StyledLink = styled.h3`
  font-weight: 500;
  margin-bottom: 1em !important;
`;

const SlideOutNav = styled.div`
  width: 80vw;
  min-width: 300px;
  padding: 3em;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 5;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
  transform: ${(props) => (props.mobileNavExpanded ? 'translateX(0px)' : 'translateX(100px)')};
`;

const List = styled.ul`
  list-style: none;
  margin-left: 0; 
  &.sublist {
    margin-left: 1.666em; 
    li{
      opacity: ${(props) => (props.expanded ? 1 : 0)};
      transition: opacity 0.4s cubic-bezier(0.2, 1, 0.3, 1);
      a {
          white-space: nowrap;
        }
    }
    li:nth-child(1) {
      transition-delay: 0.1s;
    }
    li:nth-child(2) {
      transition-delay: 0.2s;
    }
    li:nth-child(3) {
      transition-delay: 0.3s;
    }
    li:nth-child(4) {
      transition-delay: 0.4s;
    }
  }
`;

const Item = styled.li`
`;