import React from 'react';
import styled, { keyframes } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';

import BandImg from '../images/ikarus-band-image.jpg';

const Band = () => (
  <Layout>
    <SEO
      title="Ikarus - Band"
      description="Ikarus band members: Ramón Oliveras, Anna Hirsch, Andreas Lareida, Lucca Fries, Mo Meyer."
    />
    <Content>
      <Row>
        <Portrait src={BandImg} alt="Ikarus Band image" />
        <Description>
          ltr: Mo Meyer, bass | Anna Hirsch, voc | Lucca Fries, keys |{' '}
          <a href="http://www.ramonoliveras.com" rel="noreferrer" target="_blank">
            Ramón Oliveras
          </a>
          , drums and artistic director | Andreas Lareida, voc
        </Description>
      </Row>
    </Content>
  </Layout>
);

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

const Portrait = styled.img`
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    width: 100%;
    height: auto;
    margin: 0 auto 1em auto;
  }
`;

const Description = styled.p`
  font-size: 13px;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    width: 100%;
  }
`;

export default Band;
