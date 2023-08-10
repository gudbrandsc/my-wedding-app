import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle, Grid, Link, Stack, Typography } from '@mui/material';

function FridaySection({ setTab }) {
  return (
    <Grid container spacing={4} sx={{ placeContent: 'center' }}>
      <Grid item xs={12}>
        <Alert severity={'info'}>
          <AlertTitle sx={{ fontWeight: 600 }}>Location Changed</AlertTitle>
          Please not that the event location has changed, since the previous location is now under
          water. The event will <b>now</b> take place at the <u>same</u> location as the wedding.
          Please help us communicate this message, if you know others who are attending this event.
        </Alert>
      </Grid>
      <Grid item xs={6} alignSelf={'center'}>
        <Stack spacing={2} textAlign={'center'}>
          <Typography color={'primary'} variant={'h5'}>
            Friday Get Together
          </Typography>
          <Stack spacing={2} direction={'row'} alignSelf={'center'}>
            <b>Address</b>:{' '}
            <Link href={'https://goo.gl/maps/5wYKTbximTrB9bub9'} sx={{ pl: 0 }}>
              Address: Sandakerveien 377, 3519 Hønefoss
            </Link>
          </Stack>
          <Typography>
            We invite our guests to join us on Friday the 11th of August from 16.00, for a casual
            get together with bbq, drinks,and games.
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
    </Grid>
  );
}

FridaySection.propTypes = {
  setTab: PropTypes.func.isRequired
};

FridaySection.defaultProps = {};

export default FridaySection;
