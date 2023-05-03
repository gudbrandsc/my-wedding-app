import './App.css';
import React  from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline,  ThemeProvider } from '@mui/material';
import { WeddingTheme } from './Theme/WeddingTheme';
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
      <ThemeProvider theme={WeddingTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
