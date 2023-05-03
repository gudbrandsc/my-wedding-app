import React, { useEffect, useState } from 'react';
import { getToken, setToken } from '../Home/helpers';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';

function LoginPage(props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = () => {
    if (password?.toLowerCase() !== 'norderhov') {
      setError(true);
    } else {
      setToken();
      navigate('/home');
    }
  };

  return (
    <Grid container spacing={4} sx={{ placeContent: 'center', minHeight: '100vh' }}>
      <Grid item xs={6} alignSelf={'center'}>
        <Paper sx={{ p: 2 }}>
          <Stack justifyContent={'center'} spacing={2}>
            <Typography color={'primary'} variant={'h4'}>
              Welcome
            </Typography>
            <TextField
              helperText={error ? 'Incorrect password' : ''}
              error={error}
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
                setError(false);
              }}
              placeholder={'Enter password...'}
            />
            <Button variant={'contained'} onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
