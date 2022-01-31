import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import fetch from 'node-fetch';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';
import Link from '../components/link';

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
const today = new Date();

const Live = () => {
  const [gigs, setGigs] = useState([]);
  const getGigs = (time) => {
    const url = `https://rest.bandsintown.com/artists/Ikarus/events?app_id=mockingbird${
      time === 'past' ? '&date=past' : ''
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGigs(time === 'past' ? data.reverse() : data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    getGigs();
  }, []);

  return (
    <Layout>
      <SEO
        title="Ikarus - Live tour dates"
        description="IKARUS tour dates. Currently on tour with their second Album Mosaismic."
      />
      <Content>
        <ButtonContainer>
          <Button type="button" onClick={() => getGigs('upcoming')}>
            UPCOMING
          </Button>
          <Button type="button" onClick={() => getGigs('past')}>
            PAST
          </Button>
        </ButtonContainer>
        {gigs.map((concert) => {
          // split out the date string
          const dateItem = concert.datetime.split('-');
          // grab the first two characters of the last part of the split out date string
          const day = dateItem[2].substr(0, 2);
          // create a date object
          const formattedDate = new Date(dateItem[0], dateItem[1] - 1, day);
          const isPastGig = formattedDate < today;
          // set the date
          const dd = formattedDate.getDate();
          // set the month and reference the month name from the monthNames array
          const mm = monthNames[formattedDate.getMonth()];
          const yyyy = formattedDate.getFullYear();
          return (
            <div key={concert.venue.name}>
              <p style={{ textAlign: 'center' }}>
                {isPastGig ? (
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
        <p style={{ textAlign: 'center' }}>more dates to be announced</p>
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
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 0px 1.5em;
  }
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
