import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';

function FridaySection({ setTab }) {
  return (
    <Grid container spacing={4} sx={{ placeContent: 'center' }}>
      <Grid item xs={6} alignSelf={'center'}>
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography>
            There will be an informal gathering Friday afternoon for those coming from far away and
            for others who want to attend. Please let us know if you will attend{' '}
            <span style={{ color: '#83ac8a', cursor: 'pointer' }} onClick={() => setTab(7)}>
              here
            </span>
          </Typography>
          <Typography>More information to come!</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

FridaySection.propTypes = {
  setTab: PropTypes.func.isRequired
};

FridaySection.defaultProps = {};

export default FridaySection;
