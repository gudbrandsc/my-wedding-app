import './App.css';
import './index.css';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { WeddingTheme } from './Theme/WeddingTheme';
import HomePage from './Pages/Home/HomePage';
import { getToken } from './Pages/Home/helpers';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={WeddingTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
