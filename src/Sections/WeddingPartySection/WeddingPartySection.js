import React from 'react';
import { Grid, Link, Paper, Stack, Typography } from '@mui/material';
import ChurchMap from './ChurchMap';
import church from '../../assets/images/church.jpg';

function WeddingPartySection() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Stack textAlign={'center'}>
          <Typography color={'primary'} variant={'h5'}>
            Norderhov Church
          </Typography>
          <Typography sx={{ pl: 0 }}>
            <b>Address</b>:{' '}
            <Link href={'https://goo.gl/maps/31PcVHpxXLeho5wTA'} sx={{ pl: 0 }}>
              Address: Norderhovsbakken, 3512 Hønefoss
            </Link>
          </Typography>
          <Typography sx={{ pl: 0 }}>
            The wedding ceremony begins at 13.00, and we kindly request that our guests are seated
            by 12.45.
          </Typography>
          <Typography sx={{ pl: 0 }}>
            We respectfully request that guests do not take photographs during the ceremony as
            professional pictures will be taken throughout the day.{' '}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack alignItems={'center'}>
          <img srcSet={church} src={church} height={'50%'} width={'50%'} />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={4}>
          <Stack alignItems={'center'}>
            <Typography color={'primary'} variant={'h5'}>
              Nordre Lerberg{' '}
            </Typography>
            <Typography sx={{ pl: 0 }}>
              <b>Address</b>:{' '}
              <Link href={'https://goo.gl/maps/5wYKTbximTrB9bub9'} sx={{ pl: 0 }}>
                Address: Sandakerveien 377, 3519 Hønefoss
              </Link>
            </Typography>
            <Typography sx={{ pl: 0 }}>
              <b>Toastmaster</b>: Erik Follestad (+47 957 84 488)
            </Typography>
          </Stack>
          <Paper variant={'outlined'} sx={{ p: 2 }}>
            <Stack alignItems={'center'} spacing={0.5}>
              <Typography color={'primary'} variant={'h6'} sx={{ fontWeight: 600, pl: 0 }}>
                The reception
              </Typography>
              <Typography sx={{ p: 0 }}>
                <b style={{ color: '#83ac8a' }}>14.15</b> | Bubbles and appetizers
              </Typography>
              <div className={'vertical-line'} />
              <Typography sx={{ p: 0 }}>
                <b style={{ color: '#83ac8a' }}>16.00</b> | The reception
              </Typography>
              <div className={'vertical-line'} />
              <Typography sx={{ p: 0 }}>
                <b style={{ color: '#83ac8a' }}>20.00</b> | Café avec
              </Typography>
              <div className={'vertical-line'} />
              <Typography sx={{ p: 0 }}>
                <b style={{ color: '#83ac8a' }}>20.45</b> | Cake cutting and first dance
              </Typography>
              <div className={'vertical-line'} />
              <Typography sx={{ p: 0 }}>
                <b style={{ color: '#83ac8a' }}>00.00</b> | Midnight snacks and after party
              </Typography>
            </Stack>
          </Paper>
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
