import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';

function AccommodationSection() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sx={{ borderRight: '1px solid #83ac8a' }}>
        <Stack>
          <Typography color={'primary'} variant={'h5'}>
            Klækken Hotell
          </Typography>

          <Typography sx={{ pl: 0 }}>
            <b>Address</b>:{' '}
            <Link href={'https://goo.gl/maps/RCx53qZpvyEVRzSN8'} sx={{ pl: 0 }}>
              Address: Hadelandsveien 386, 3514 Hønefoss
            </Link>
          </Typography>
          <ul style={{ margin: 0 }}>
            <li>Single rooms including breakfast for NOK 1 095 per person per night</li>
            <li>Double rooms including breakfast for NOK 875 per person per night</li>
          </ul>
          <Typography sx={{ pl: 0 }}>
            Please inform Klækken Hotel that you are part of Gudbrand and Hedvig’s wedding party.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Typography color={'primary'} variant={'h5'}>
            Other accommodations
          </Typography>
          <ul>
            <li>
              <Typography sx={{ p: 0 }}>
                <Link href={'https://sundvolden.no/'} sx={{ p: 0 }}>
                  Sundvollen Hotell
                </Link>
              </Typography>
            </li>{' '}
            <li>
              <Typography sx={{ p: 0 }}>
                <Link
                  href={
                    'https://www.scandichotels.no/hotell/norge/honefoss/scandic-honefoss?utm_campaign=gmb&utm_source=google&utm_medium=organic&utm_content=honefoss'
                  }
                  sx={{ p: 0 }}>
                  Scandic Hønefoss
                </Link>
              </Typography>
            </li>
          </ul>
        </Stack>
      </Grid>
    </Grid>
  );
}

AccommodationSection.propTypes = {};

AccommodationSection.defaultProps = {};

export default AccommodationSection;
