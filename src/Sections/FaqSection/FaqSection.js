import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function FaqSection({ setTab }) {
  // const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={4} sx={{ placeContent: 'center' }}>
      <Grid item xs={6} alignSelf={'center'}>
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography color={'primary'} variant={'h6'} sx={{ fontWeight: 600, pl: 0 }}>
            Transportation
          </Typography>
          <Stack textAlign={'start'}>
            <Typography variant={'subtitle1'} sx={{ fontWeight: 600, pl: 0 }}>
              Arriving by bus
            </Typography>
            <ul style={{ margin: 0 }}>
              <li>
                <b>Skøyen Station</b> to the church, leaving at <b>11.20</b> and arriving at
                Norderhov Church 12.20-12.30{' '}
              </li>
              <li>
                <b>Klækken Hotel</b> to the church, leaving at <b>12.10</b> and arriving at
                Norderhov Church 12.20-12.30
              </li>
              <li>
                Busses will take our guests from Norderhov Church to Nordre Lerberg following the
                wedding ceremony.
              </li>
            </ul>
          </Stack>
          <Typography sx={{ pl: 0 }}>
            Please let us know if you would like to arrive to Norderhov Church by bus{' '}
            <span style={{ color: '#83ac8a', cursor: 'pointer' }} onClick={() => setTab(7)}>
              here
            </span>
            .
          </Typography>
          <Stack textAlign={'start'}>
            <Typography variant={'subtitle1'} sx={{ fontWeight: 600, pl: 0 }}>
              Arriving by car
            </Typography>
            <ul style={{ margin: 0 }}>
              <li>There is available parking adjacent to Norderhov Church</li>
              <li>
                We will arrange for parking for our guests arriving at the venue by car. Please note
                that it will not be possible to park at Nordre Lerberg (some walking from the car to
                Nordre Lerberg should be expected).
              </li>
            </ul>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

FaqSection.propTypes = {
  setTab: PropTypes.func.isRequired
};

FaqSection.defaultProps = {};

export default FaqSection;
