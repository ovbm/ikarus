import React from 'react';
import styled, { keyframes } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';

import AndreasImg from '../images/ikarus-portrait-andreas-lareida.jpeg';
import RamonImg from '../images/ikarus-portrait-ramon-oliveras.jpeg';
import AnnaImg from '../images/ikarus-portrait-anna-hirsch.jpeg';
import LuccaImg from '../images/ikarus-portrait-lucca-fries.jpeg';
import MoImg from '../images/ikarus-portrait-mo-meyer.jpeg';

export default () => {
  return (
    <Layout>
      <SEO
        title="Ikarus - Band"
        description="Ikarus band members: Ramón Oliveras, Anna Hirsch, Andreas Lareida, Lucca Fries, Mo Meyer."
      />
      <Content>
        <Row>
          <BandMember>
            <Portrait src={RamonImg} alt="Ramón Oliveras, comp, drums" />
            <Description>Ramón Oliveras | comp, drums</Description>
          </BandMember>
          <BandMember>
            <Portrait src={AnnaImg} alt="Anna Hirsch, voc" />
            <Description>Anna Hirsch | voc</Description>
          </BandMember>
          <BandMember>
            <Portrait src={AndreasImg} alt="Andreas Lareida, voc" />
            <Description>Andreas Lareida | voc</Description>
          </BandMember>
          <BandMember>
            <Portrait src={LuccaImg} alt="Lucca Fries, keys" />
            <Description>Lucca Fries | keys</Description>
          </BandMember>
          <BandMember>
            <Portrait src={MoImg} alt="Mo Meyer, bass" />
            <Description>Mo Meyer | bass</Description>
          </BandMember>
        </Row>
      </Content>
    </Layout>
  );
};

const appear = keyframes`
  from {
    transform: translateY(5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const Content = styled.div`
  max-width: 640px;
  min-height: 600px;
  margin: 2em auto;
  animation: ${appear} 0.8s ease;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 0px 1.5em;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const BandMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  &:not(:nth-of-type(3n + 1)) {
    margin-left: 1em;
    @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
      margin-left: 0;
    }
  }
`;

const Portrait = styled.img`
  width: 200px;
  height: 200px;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    width: 80%;
    height: auto;
    margin: 0 auto 1em auto;
  }
`;

const Description = styled.p`
  font-size: 13px;
  text-align: center;
  width: 200px;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    width: 80%;
  }
`;
