import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link, Stack, Typography } from '@mui/material';
import ChurchMap from './ChurchMap';
import church from '../../assets/images/church.jpg';

function WeddingPartySection(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Stack>
          <Typography color={'primary'} variant={'h5'}>
            Norderhov Kirke
          </Typography>
          <Typography sx={{ pl: 0 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </Typography>
          <Typography sx={{ pl: 0 }}>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack alignItems={'center'}>
          <img srcSet={church} src={church} height={'50%'} width={'50%'} />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Typography color={'primary'} variant={'h5'}>
            Nordre Lerberg
          </Typography>
          <Typography sx={{ pl: 0 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </Typography>
          <Typography sx={{ pl: 0 }}>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <ChurchMap />
      </Grid>
    </Grid>
  );
}

WeddingPartySection.propTypes = {};

WeddingPartySection.defaultProps = {};

export default WeddingPartySection;
