import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

function CountDisplay({ value, title }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.7)',
        width: '150px',
        height: '125px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Stack sx={{ alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 600 }} variant={'h5'}>
          {value}
        </Typography>
        <Typography sx={{ fontWeight: 600 }} variant={'h5'}>
          {title}
        </Typography>
      </Stack>
    </div>
  );
}

CountDisplay.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string
};

CountDisplay.defaultProps = {};

export default CountDisplay;
