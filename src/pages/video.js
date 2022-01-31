import React from 'react';
import styled, { keyframes } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';

const Video = () => (
  <Layout>
    <SEO title="Ikarus - Vieos" description="" />
    <Content>
      <h3>Ikarus - Oumuamua</h3>
      <VideoContainer>
        <iframe
          title="Ikarus - Oumuamua"
          width="480"
          height="270"
          src="https://www.youtube.com/embed/MMCtCtnmXxY?rel=0&amp;controls=0&amp;showinfo=1"
          frameBorder="0"
          allowFullScreen
        />
      </VideoContainer>
      <h3>Ikarus - London Jazz Festival</h3>
      <VideoContainer>
        <iframe
          title="Ikarus - London Jazz Festival"
          width="480"
          height="270"
          src="https://www.youtube.com/embed/9bVNkJonqgc?rel=0&amp;controls=0&amp;showinfo=1"
          frameBorder="0"
          allowFullScreen
        />
      </VideoContainer>
    </Content>
  </Layout>
);

const appear = keyframes`
  from {
    transform: translateY(50px);
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

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  margin: 0 auto 3em;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Video;
