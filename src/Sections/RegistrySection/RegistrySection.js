import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link, Stack, Typography } from '@mui/material';
import AccommodationMap from '../AccommodationSection/AccommodationMap';

function RegistrySection(props) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Stack>
          <Typography sx={{ pl: 0 }}>WE WANT GIFTS</Typography>
          <list>
            <li>
              <Link
                variant={'subtitle1'}
                href={
                  'https://www.illumsbolighus.no/on/demandware.store/Sites-illums_bolighus_no-Site/nb_NO/GiftRegistry-ShowOthers?id=512150f5b3a919bad7c562fbaa'
                }>
                Illums bolighus
              </Link>
            </li>
          </list>
        </Stack>
      </Grid>
    </Grid>
  );
}

RegistrySection.propTypes = {};

RegistrySection.defaultProps = {};

export default RegistrySection;
