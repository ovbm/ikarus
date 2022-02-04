import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import theme from '../utils/themeconstants';
import Link from './link';

function Footer({ activeSide }) {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then((data) => {
        setResult(data);
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data);
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  return (
    <Container activeSide={activeSide}>
      <Content>
        <div style={{ textAlign: 'center', fontSize: 15 }}>
          <form
            style={{ margin: '0 8px', display: 'flex' }}
            onSubmit={handleSubmit}
          >
            <EmailInput
              style={{ fontSize: 15, width: '100%' }}
              type="email"
              placeholder="Newsletter Signup"
              value={email}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={handleEmailChange}
            />
            <SubmitButton type="submit">Subscribe</SubmitButton>
          </form>
          {result ? <ResultMessage>{result.msg}</ResultMessage> : null}
        </div>
      </Content>
      <p
        style={{
          textAlign: 'center',
          marginTop: 16,
          fontSize: 15,
          lineHeight: 2,
        }}
      >
        Contact:
        <Link target="_blank" href="mailto:contact@ikarus.band">
          contact@ikarus.band
        </Link>
        {' / '}
        <Link
          outward
          target="_blank"
          href="https://www.dropbox.com/sh/9n82xtffo7wp53r/AAADk_QRZxsO3BnQ3XADts0Ca?dl=0"
        >
          Presskit
        </Link>
        {' / '}
        Label:
        <Link
          outward
          target="_blank"
          href="https://www.nikbaertsch.com/ronin-rhythm-records.html"
        >
          Ronin Rhythm Records
        </Link>
        {' / '}
        PR Germany:
        <Link outward target="_blank" href="https://www.cubus-music.de/">
          Cubus Music
        </Link>
        {' / '}
        PR and Booking Japan:
        <Link
          outward
          target="_blank"
          href="http://www.bigstream.co.jp/music/index.html"
        >
          Real &amp; True
        </Link>
      </p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  z-index: 999;
  padding: 4em;
  background-color: ${(props) =>
    props.activeSide
      ? `var(--bg-${props.activeSide})`
      : theme.colors.bgPrimary};
  transition: background-color 2s cubic-bezier(0.2, 1, 0.3, 1);
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 1.5em;
  }
`;

const Content = styled.div`
  max-width: ${theme.dim.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .column {
    align-content: center;
    margin: 0 1.5em;
    p {
      margin: 0;
    }
  }
`;

const SubmitButton = styled.button`
  border: 0;
  border-radius: 4px;
  font-size: 15;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  color: white;
  display: inline-block;
  text-transform: none;
  transition: all 0.3s ease 0s;
  margin: 0 0 0 16px;
  &:hover {
    letter-spacing: 0.1em;
    transition: all 0.3s ease 0s;
  }
  &:active {
    outline: 0;
    border: none;
  }
`;

const EmailInput = styled.input`
  border: 0;
  border-radius: 4px;
  padding: 2.5px 6px;
  background-color: rgba(255, 255, 255, 0.7);
  &:focus {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const ResultMessage = styled.p`
  font-size: 10px;
  text-align: left;
  margin-top: 4px;
`;
