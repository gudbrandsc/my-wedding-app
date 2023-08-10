import React, { useState } from 'react';
import SakuraContainer from '../../SakuraContainer/SakuraContainer';
import { Alert, AlertTitle, Divider, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import proposal from '../../assets/images/proposal5.jpg';
import AccommodationSection from '../../Sections/AccommodationSection';
import RegistrySection from '../../Sections/RegistrySection/RegistrySection';
import Countdown from 'react-countdown';
import moment from 'moment';
import CountDisplay from './CountDisplay';
import WeddingPartySection from '../../Sections/WeddingPartySection/WeddingPartySection';
import FaqSection from '../../Sections/FaqSection';
import FridaySection from '../../Sections/FridaySection/FridaySection';
import ImportantSection from '../../Sections/ImportantSection/ImportantSection';

function HomePage() {
  const [tab, setTab] = useState(1);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <SakuraContainer number={200} />
      <Grid
        container
        sx={{ position: 'absolute', mt: '5vh', pb: '5em' }}
        spacing={2}
        justifyContent={'center'}>
        <Grid sx={{ mb: '5vh' }} item xs={12}>
          <Stack sx={{ alignItems: 'center' }} spacing={1}>
            <Typography color={'primary'} variant={'h2'}>
              Hedvig & Gudbrand
            </Typography>
            {/*<div style={{ borderBottom: '1px solid #e0e0e0', width: '20%', paddingTop: '8px' }} />*/}
            <Typography
              sx={{ pt: '8px', textTransform: 'uppercase', letterSpacing: '3px' }}
              variant={'body2'}
              className={'sub-text'}>
              August 12th 2023 • Hønefoss, Norway
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Alert severity={'error'}>
            <AlertTitle sx={{ fontWeight: 600 }}>Friday Event</AlertTitle>
            The event on <b>friday</b> has moved location due to the flood. Please see the{' '}
            <i style={{ fontWeight: 600, cursor: 'pointer' }} onClick={() => setTab(6)}>
              <u>friday section</u>
            </i>{' '}
            if you are attending the friday event.
          </Alert>
        </Grid>
        <Grid item xs={8}>
          <Tabs variant={'scrollable'} value={tab} onChange={(_, val) => setTab(val)}>
            <Tab label={'Home'} value={1} />
            <Tab label={'The day'} value={2} />
            <Tab label={'Friday'} value={6} />
            <Tab label={'Accommodation'} value={3} />
            <Tab label={'Transportation'} value={5} />
            <Tab label={'Important'} value={7} />
            <Tab label={'Registry'} value={4} />
          </Tabs>
          <Divider />
        </Grid>
        {tab === 1 && (
          <Grid item xs={8}>
            <div style={{ position: 'relative' }}>
              {loaded && (
                <Countdown
                  renderer={(values) => {
                    let weddingDate = moment('12-08-2023 13:00:00', 'DD-MM-yyyy HH:mm:ss');
                    let days = values.days || weddingDate.diff(moment(), 'days');
                    weddingDate = weddingDate.subtract(days, 'days');
                    let hours = values.hours || weddingDate.diff(moment(), 'hours');
                    weddingDate = weddingDate.subtract(hours, 'hours');
                    let minutes = values.minutes || weddingDate.diff(moment(), 'minutes');
                    weddingDate = weddingDate.subtract(minutes, 'minutes');
                    let seconds = values.seconds || weddingDate.diff(moment(), 'seconds');

                    return (
                      <div
                        style={{
                          textAlign: 'center',
                          position: 'absolute',
                          top: '50%',
                          left: '30%',
                          right: 0,
                          margin: 'auto',
                          transform: 'translateY(-50%)'
                        }}>
                        <Grid container>
                          <Grid item sm={12} md={8}>
                            <Stack direction={'row'} spacing={2}>
                              <CountDisplay value={days} title={'Days'} />
                              <CountDisplay value={hours} title={'hours'} />
                              <CountDisplay value={minutes} title={'minutes'} />
                              <CountDisplay value={seconds} title={'seconds'} />
                            </Stack>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  }}
                  date={
                    '12-08-2023T13:00:00-06:00' ||
                    new Date('12-08-2023T13:00:00-06:00') ||
                    moment('12-08-2023 13:00:00', 'DD-MM-yyyy HH:mm:ss').format(
                      'MM-DD-yyyy HH:mm:ss'
                    )
                  }
                />
              )}
              <img
                alt={'proposal'}
                onLoad={() => setLoaded(true)}
                srcSet={proposal}
                src={proposal}
                height={'90%'}
                width={'100%'}
              />
            </div>
          </Grid>
        )}
        {tab === 2 && (
          <Grid item sm={12} md={8}>
            <WeddingPartySection />
          </Grid>
        )}
        {tab === 3 && (
          <Grid item sm={12} md={8}>
            <AccommodationSection />
          </Grid>
        )}
        {tab === 4 && (
          <Grid item sm={12} md={8}>
            <RegistrySection />
          </Grid>
        )}
        {tab === 5 && (
          <Grid item sm={12} md={8}>
            <FaqSection setTab={setTab} />
          </Grid>
        )}
        {tab === 6 && (
          <Grid item sm={12} md={8}>
            <FridaySection setTab={setTab} />
          </Grid>
        )}
        {tab === 7 && (
          <Grid item sm={12} md={8}>
            <ImportantSection setTab={setTab} />
          </Grid>
        )}
      </Grid>
    </>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
