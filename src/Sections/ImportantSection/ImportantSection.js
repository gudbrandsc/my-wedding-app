import React from 'react';
import { Grid } from '@mui/material';

function ImportantSection(props) {
  return (
    <Grid container spacing={4} sx={{ placeContent: 'center' }}>
      <Grid item xs={6} alignSelf={'center'}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScDAEjlSmWtYaQz-kGHQSydiMhjv67fKJRYv9XUpYirWgdNsg/viewform?embedded=true"
          width="640"
          height="625"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0">
          Loading …
        </iframe>
      </Grid>
    </Grid>
  );
}

ImportantSection.propTypes = {};

ImportantSection.defaultProps = {};

export default ImportantSection;
