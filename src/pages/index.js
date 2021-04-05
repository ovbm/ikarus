import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Link from '../components/link';

let defaultWidth

if (typeof window !== `undefined`) {
  defaultWidth = window.outerWidth
}

export default () => {
  const front = useRef();
  const back = useRef();
  const right = useRef();
  const left = useRef();
  const top = useRef();
  const bottom = useRef();
  const cubecontainer = useRef();
  const cube = useRef();
  const [cubeWidth, setCubeWidth] = useState(defaultWidth)

  useEffect(() => {
    function handleResize() {
      setCubeWidth(Math.max(Math.min(window.outerWidth, 600), 312));
    } 
    window.addEventListener("resize", handleResize);    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      front.current.style.transform = `translate3d(0,0,${cubeWidth / 2}px)`;
      back.current.style.transform = `rotateX(-180deg) translate3d(0,0,${
        cubeWidth / 2
      }px)`;
      left.current.style.transform = `rotateY(-90deg) translate3d(0,0,${
        cubeWidth / 2
      }px)`;
      right.current.style.transform = `rotateY(90deg) translate3d(0,0,${
        cubeWidth / 2
      }px)`;
      top.current.style.transform = `rotateX(90deg) translate3d(0,0,${
        cubeWidth / 2
      }px)`;
      bottom.current.style.transform = `rotateX(-90deg) translate3d(0,0,${
        cubeWidth / 2
      }px)`;
      cubecontainer.current.style.width = `${cubeWidth}px`;
      cubecontainer.current.style.height = `${cubeWidth}px`;
      cube.current.style.transform = `translate3d(0,0,${-cubeWidth / 2}px)`;
  }, [cubeWidth]);

  const onButtonClick = function (side) {
    // eslint-disable-next-line default-case
    switch (side) {
      case 'show-front':
        cube.current.style.transform = `translate3d(0,0,${-cubeWidth / 2}px)`;
        break;
      case 'show-back':
        cube.current.style.transform = `translate3d(0,0,${
          -cubeWidth / 2
        }px) rotateX(-180deg)`;
        break;
      case 'show-right':
        cube.current.style.transform = `translate3d(0,0,${
          -cubeWidth / 2
        }px) rotateY(-90deg)`;
        break;
      case 'show-left':
        cube.current.style.transform = `translate3d(0,0,${
          -cubeWidth / 2
        }px) rotateY(90deg)`;
        break;
      case 'show-top':
        cube.current.style.transform = `translate3d(0,0,${
          -cubeWidth / 2
        }px) rotateX(-90deg)`;
        break;
      case 'show-bottom':
        cube.current.style.transform = `translate3d(0,0,${
          -cubeWidth / 2
        }px) rotateX(90deg)`;
        break;
    }
  };

  return (
    <Layout>
      <SEO
        title="IKARUS - Music, Mosiasmic out now"
        description="Official page of the Zurich based band IKARUS. Compositions by Ramón Oliveras. Currently on tour with their second Album Mosaismic."
      />
      <Content>
        <ButtonContainer>
          <Button type="button" onClick={() => onButtonClick('show-front')}>
            MOSAISMIC
          </Button>
          {/* <Button type="button" onClick={() => onButtonClick('show-right')}>
            MUSIC
          </Button> */}
          <Button onClick={() => onButtonClick('show-left')} type="button">
            CHRONOSOME
          </Button>
          {/* <Button onClick={() => onButtonClick('show-top')} type="button">
            BAND
          </Button> */}
          {/* <Button onClick={() => onButtonClick('show-bottom')} type="button">
            LIVE
          </Button> */}
          <Button onClick={() => onButtonClick('show-back')} type="button">
            ECHO
          </Button>
        </ButtonContainer>

        <div id="wrapper">
          <CubeContainer
            ref={cubecontainer}
            id="cubecontainer"
            className="container"
          >
            <Cube width={cubeWidth} ref={cube} id="cube" className="show-front">
              <Side ref={front} id="frontside" className="side front">
                <ContentBox>
                  <IFrameBox>
                    <ResponsiveIFrame
                      title="Mosaismic"
                      style={{ border: 0 }}
                      src="https://bandcamp.com/EmbeddedPlayer/album=3587457344/size=large/bgcol=transparent/linkcol=63b2cc/minimal=true/transparent=true/"
                      seamless
                    >
                      <a href="http://roninrhythmrecords.bandcamp.com/album/mosaismic">
                        Mosaismic by IKARUS
                      </a>
                    </ResponsiveIFrame>
                  </IFrameBox>
                  <p style={{ color: 'white' }}>
                    <Link
                      outward
                      href="http://roninrhythmrecords.bandcamp.com/album/mosaismic"
                      target="_blank"
                    >
                      Bandcamp
                    </Link>
                    {' '}
                    <Link
                      outward
                      href="https://itunes.apple.com/ch/album/mosaismic/1456623755?l=en"
                      target="_blank"
                    >
                      Apple Music
                    </Link>
                    {' '}
                    <Link
                      outward
                      href="https://open.spotify.com/album/5mV7SxyBEXZZRIGsCP2OpK"
                      target="_blank"
                    >
                      Spotify
                    </Link>
                  </p>
                </ContentBox>
              </Side>

              <Side ref={back} id="backside" className="side back">
                <ContentBox>
                  <IFrameBox>
                    <ResponsiveIFrame
                      title="Mosaismic"
                      style={{ border: 0 }}
                      src="https://bandcamp.com/EmbeddedPlayer/album=4284248548/size=large/bgcol=transparent/linkcol=63b2cc/minimal=true/transparent=true/"
                      seamless
                    >
                      <a href="https://roninrhythmrecords.bandcamp.com/album/echo">
                        Echo by IKARUS
                      </a>
                    </ResponsiveIFrame>
                  </IFrameBox>
                  <p>
                    <Link
                      outward
                      href="https://roninrhythmrecords.bandcamp.com/album/echo"
                      target="_blank"
                    >
                      Bandcamp
                    </Link>
                    {' '}
                    <Link
                      outward
                      href="https://itunes.apple.com/ch/album/echo/980401683?l=en"
                      target="_blank"
                    >
                      Apple Music
                    </Link>
                    {' '}
                    <Link
                      outward
                      href="https://open.spotify.com/album/3RON3rug8YFHwMi2JEcmDD"
                      target="_blank"
                    >
                      Spotify
                    </Link>
                  </p>
                </ContentBox>
              </Side>

              <Side ref={right} id="rightside" className="side right" />

              <Side ref={left} id="leftside" className="side left">
                <ContentBox>
                  <IFrameBox>
                    <ResponsiveIFrame
                      title="Mosaismic"
                      style={{ border: 0 }}
                      src="https://bandcamp.com/EmbeddedPlayer/album=2100488339/size=large/bgcol=transparent/linkcol=63b2cc/minimal=true/transparent=true/"
                      seamless
                    >
                      <a href="http://roninrhythmrecords.bandcamp.com/album/chronosome-24-bit-882-khz">
                        Chronosome by IKARUS
                      </a>
                    </ResponsiveIFrame>
                  </IFrameBox>
                  <p>
                    <Link
                      outward
                      href="https://roninrhythmrecords.bandcamp.com/album/chronosome-24-bit-882-khz"
                      target="_blank"
                    >
                      Bandcamp
                    </Link>
                    {' '}
                    <Link
                      outward
                      href="https://itunes.apple.com/ch/album/chronosome/1410685423?l=en"
                      target="_blank"
                    >
                      Apple Music
                    </Link>
                    {' '}
                    <Link
                      outward
                      href="https://open.spotify.com/album/06z7uZ5PiYF8xEMiSMnauQ"
                      target="_blank"
                    >
                      Spotify
                    </Link>
                  </p>
                </ContentBox>
              </Side>

              <Side ref={top} id="topside" className="side top" />
              <Side ref={bottom} id="bottomside" className="side bottom" />
            </Cube>
          </CubeContainer>
        </div>
        <p style={{ textAlign: 'center' }}>
          physical CD and LP sales at -
          <Link
            outward
            href="https://roninrhythmrecords.bandcamp.com/album/mosaismic"
            target="_blank"
          >
            Ronin Rhythm Records Shop
          </Link>
          <br />
          <Link
            outward
            id="vinylcodedisabled"
            target="_blank"
            href="http://www.protectdisc.com/App/CodeLoad/Download.aspx"
          >
            vinyl digital download
          </Link>
        </p>
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
  animation: ${appear} 0.8s ease;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const ButtonContainer = styled.div`
  margin: 2em auto;
  width: 100%;
  max-width: 40em;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 1em;
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: all 0.3s ease 0s;
  &:hover {
    letter-spacing: 0.1em;
  }
`;

const CubeContainer = styled.section`
  width: 600px;
  height: 600px;
  position: relative;
  margin: 0 auto 40px;
  border: none;
  perspective: 1000px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: ${props => `translate3d(0,0,${-props.width/2}px)`};
  transform-style: preserve-3d;
  transition: transform 3s;
`;

const Side = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #9bc5d5;
  backface-visibility: hidden;
`;

const ContentBox = styled.div`
  margin: 0;
  text-align: center;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const IFrameBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 87%;
  padding-top: 87%; /* 1:1 Aspect Ratio (divide 9 by 16 = 0.5625) */
  margin: 0 auto 1em;
`;

const ResponsiveIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
