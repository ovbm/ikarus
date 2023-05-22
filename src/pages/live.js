import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import fetch from 'node-fetch';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';
import Link from '../components/link';

const BandsInTown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="77"
    viewBox="0 0 512 77"
    fill="none"
    style={{ width: 120, height: '100%', verticalAlign: 'middle' }}
  >
    <path
      d="M119.09 44.32C119.09 37.59 114.74 32.82 108.29 32.82C101.7 32.82 97.4896 37.59 97.4896 44.32C97.4896 51.05 101.84 55.82 108.29 55.82C114.74 55.68 119.09 51.06 119.09 44.32ZM97.3496 56.95H97.2096V62.28H89.6396V7.84999H97.2096V31.7H97.3496C99.5896 27.77 103.52 25.25 109.27 25.25C118.67 25.25 126.52 32.4 126.52 44.33C126.52 56.25 118.66 63.41 109.27 63.41C103.52 63.4 99.5896 60.73 97.3496 56.95ZM132 44.32C132 32.4 139.86 25.24 149.25 25.24C155.14 25.24 158.93 27.76 161.17 31.69H161.31V26.36H168.88V62.13H161.31V56.8H161.17C158.93 60.73 155 63.25 149.25 63.25C139.99 63.4 132 56.25 132 44.32ZM162.44 44.32C162.44 37.59 158.09 32.82 151.64 32.82C145.05 32.82 140.84 37.59 140.84 44.32C140.84 51.05 145.19 55.82 151.64 55.82C158.23 55.68 162.44 51.06 162.44 44.32ZM211.25 40.25V62.27H203.68V41.51C203.68 35.34 200.59 32.81 195.54 32.81C190.07 32.81 186.14 36.18 186.14 45.15V62.26H178.57V26.35H186.14V31.82H186.28C188.52 27.75 192.45 25.23 197.78 25.23C205.5 25.25 211.25 29.31 211.25 40.25ZM218.97 44.18C218.97 32.26 226.83 25.1 236.22 25.1C242.11 25.1 245.9 27.62 248.14 31.55H248.28V7.70999H255.85V62.14H248.28V56.81H248.14C245.9 60.74 241.97 63.26 236.22 63.26C226.82 63.4 218.97 56.25 218.97 44.18ZM249.27 44.32C249.27 37.59 244.92 32.82 238.47 32.82C231.88 32.82 227.67 37.59 227.67 44.32C227.67 51.05 232.02 55.82 238.47 55.82C245.06 55.68 249.27 51.06 249.27 44.32ZM262.31 59.61L265.68 52.88C269.05 54.84 272.69 56.25 276.9 56.25C280.55 56.25 282.37 55.13 282.37 52.88C282.37 51.34 281.67 50.36 278.58 48.81L272.13 45.58C266.8 43.06 264.7 39.41 264.7 35.2C264.7 28.61 269.47 25.1 277.32 25.1C281.39 25.1 285.88 26.22 289.52 27.91L286.43 34.5C283.76 33.38 280.4 32.12 277.03 32.12C273.66 32.12 272.68 33.24 272.68 34.79C272.68 36.47 273.66 37.6 276.75 39L283.34 42.23C287.97 44.33 290.35 47.56 290.35 52.33C290.35 59.62 284.88 63.13 276.6 63.13C271.71 63.4 266.38 62 262.31 59.61ZM298.08 62.28V26.37H305.65V62.28H298.08ZM348.02 40.25V62.27H340.45V41.51C340.45 35.34 337.36 32.81 332.31 32.81C326.84 32.81 322.91 36.18 322.91 45.15V62.26H315.34V26.35H322.91V31.82H323.05C325.29 27.75 329.22 25.23 334.69 25.23C342.27 25.25 348.02 29.31 348.02 40.25ZM367.1 32.82V51.48C367.1 54 368.22 55.13 370.75 55.13H372.57V62.14H369.2C363.17 62.14 359.8 58.77 359.8 52.88V32.68H353.63V26.23H359.8V11.92H367.23V26.23H374.24V32.68H367.09V32.82H367.1ZM416.47 44.32C416.47 55.26 408.19 63.4 396.97 63.4C385.75 63.4 377.47 55.4 377.47 44.32C377.47 33.38 385.75 25.24 396.97 25.24C408.19 25.24 416.47 33.24 416.47 44.32ZM386.03 44.32C386.03 51.19 390.66 55.82 397.39 55.82C404.12 55.82 408.75 51.33 408.75 44.32C408.75 37.45 404.12 32.82 397.39 32.82C390.8 32.82 386.03 37.31 386.03 44.32ZM472.86 26.37L461.08 62.28H454.21L445.79 36.47L437.37 62.28H430.5L418.72 26.37H427L434.15 52.32L442.29 26.37H449.58L457.72 52.32L464.87 26.37H472.86ZM512 40.25V62.27H504.43V41.51C504.43 35.34 501.34 32.81 496.29 32.81C490.82 32.81 486.89 36.18 486.89 45.15V62.26H479.32V26.35H486.89V31.82H487.03C489.27 27.75 493.2 25.23 498.53 25.23C506.25 25.25 512 29.31 512 40.25ZM307.9 13.18C307.9 16.13 305.52 18.65 302.43 18.65C299.48 18.65 296.96 16.27 296.96 13.18C296.96 10.23 299.34 7.70999 302.43 7.70999C305.52 7.70999 307.9 10.24 307.9 13.18Z"
      fill="#fff"
    />
    <path d="M71.1203 0H56.5303V39H71.1203V0Z" fill="#00CEC8" />
    <path d="M51.6203 20.48H37.0303V39H51.6203V20.48Z" fill="#00CEC8" />
    <path d="M33.1095 20.48H18.5195V39H33.1095V20.48Z" fill="#00CEC8" />
    <path
      d="M0 0V76.02H55.41H56.53H71.26V44.18H18.94V58.07H56.53V62.14H14.73V0H0Z"
      fill="#00CEC8"
    />
  </svg>
);

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Live = () => {
  const [gigs, setGigs] = useState([]);
  const [upcoming, setUpcoming] = useState(true);

  const getGigs = () => {
    const url =
      'https://rest.bandsintown.com/artists/Ikarus/events?app_id=mockingbird&date=all';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGigs(data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    getGigs();
  }, []);

  const today = new Date();

  const filteredGigs = upcoming
    ? gigs.filter((gig) => new Date(gig.datetime) >= today)
    : gigs.filter((gig) => new Date(gig.datetime) < today).reverse();

  return (
    <Layout>
      <SEO
        title="Ikarus - Live tour dates"
        description="IKARUS tour dates. Currently on tour with their second Album Mosaismic."
      />
      <Content>
        <ButtonContainer>
          <Button
            type="button"
            active={upcoming}
            onClick={() => setUpcoming(true)}
          >
            UPCOMING
          </Button>
          <Button
            type="button"
            active={!upcoming}
            onClick={() => setUpcoming(false)}
          >
            PAST
          </Button>
        </ButtonContainer>
        <p style={{ textAlign: 'center' }}>
          powered by{' '}
          <a href="https://www.bandsintown.com/a/36650-ikarus">
            <BandsInTown />
          </a>
        </p>

        {!upcoming && (
          <>
            <h3 style={{ textAlign: 'center' }}>Highlights</h3>
            <p style={{ textAlign: 'center' }}>
              EFG London Jazz Festival EN, Jazzfestival Reykjavik IS, Jazzahead
              Showcase Bremen DE, Internationale Jazzwoche Burghausen DE,
              Schaffhauser Jazzfestival CH, Festival Jazz Area Metropolitana
              Dolo IT, RAG Kyoto JP, Airegin Yokohama JP, Outreach Festival AT,
              Jazztage Görlitz DE, Moods Zurich CH, Beeflat Bern CH,
              Festspielhaus Hellerau DE, Festival di Jazz Chiasso CH
            </p>
            <h3 style={{ textAlign: 'center' }}>All</h3>
          </>
        )}

        {filteredGigs.map((concert) => {
          // split out the date string
          const dateItem = concert.datetime.split('-');
          // grab the first two characters of the last part of the split out date string
          const day = dateItem[2].substr(0, 2);
          // create a date object
          const formattedDate = new Date(dateItem[0], dateItem[1] - 1, day);
          // set the date
          const dd = formattedDate.getDate();
          // set the month and reference the month name from the monthNames array
          const mm = monthNames[formattedDate.getMonth()];
          const yyyy = formattedDate.getFullYear();
          return (
            <div key={concert.datetime}>
              <p style={{ textAlign: 'center' }}>
                {!upcoming ? (
                  `${dd} ${mm} ${yyyy}, ${concert.venue.name}, ${concert.venue.city} ${concert.venue.country} `
                ) : (
                  <>
                    <span>{`${dd} ${mm} ${yyyy}`}</span>
                    <br />
                    <City>{concert.venue.city}</City>
                    <br />
                    <VenueLink>
                      <Link href={concert.description} outward>
                        {concert.venue.name}
                      </Link>
                    </VenueLink>
                    <br />
                    <span>{concert.venue.country}</span>
                  </>
                )}
              </p>
            </div>
          );
        })}
        {upcoming && (
          <p style={{ textAlign: 'center' }}>more dates to be announced</p>
        )}
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
  max-width: 960px;
  min-height: 600px;
  margin: 0 auto;
  animation: ${appear} 0.8s ease;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  padding: 0px 1.5em;
`;

const ButtonContainer = styled.div`
  margin: 2em auto 2.5em auto;
  width: 100%;
  max-width: 40em;
  text-align: center;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    margin: 1.5em auto 2em auto;
  }
`;

const Button = styled.button`
  margin: 0 1em;
  background: none;
  color: white;
  border: none;
  padding: 0;
  font-size: 1.4em;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  outline: inherit;
  transition: all 0.3s ease 0s;
  &:hover {
    letter-spacing: 0.1em;
  }
`;

const VenueLink = styled.span`
  font-size: 19px;
  font-weight: bold;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    font-size: 17px;
  }
`;

const City = styled.span`
  font-size: 24px;
  font-weight: bold;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    font-size: 20px;
  }
`;

export default Live;
