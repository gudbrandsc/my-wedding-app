import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link, Stack, Typography } from '@mui/material';
import FridayMap from './FridayMap/FridayMap';

function FridaySection({ setTab }) {
  return (
    <Grid container spacing={4} sx={{ placeContent: 'center' }}>
      <Grid item xs={6} alignSelf={'center'}>
        <Stack spacing={2} textAlign={'center'}>
          <Typography color={'primary'} variant={'h5'}>
            Beach Party at Storøya
          </Typography>
          <Stack spacing={2} direction={'row'} alignSelf={'center'}>
            <b>Address</b>:{' '}
            <Link href={'https://goo.gl/maps/aWDw5MaEfmTCijFW8'} sx={{ pl: 0 }}>
              Dronning Tyras vei 48, 3531 Krokkleiva
            </Link>
          </Stack>
          <Typography>
            We invite our guests to join us on Friday the 11th of August from 16.00, for a casual
            beach party with bbq, drinks, water sports and games.
            <Typography sx={{ pl: 0 }}>
              Please let us know if you want to attend{' '}
              <span style={{ color: '#83ac8a', cursor: 'pointer' }} onClick={() => setTab(7)}>
                here
              </span>
              . If you have already filled out the form then send us a PM.
            </Typography>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} alignSelf={'center'}>
        <FridayMap />
      </Grid>
    </Grid>
  );
}

FridaySection.propTypes = {
  setTab: PropTypes.func.isRequired
};

FridaySection.defaultProps = {};

export default FridaySection;
