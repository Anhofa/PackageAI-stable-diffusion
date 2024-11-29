import './App.css';
import React, { Component } from 'react'
import AppRouter from './AppRouter';
import { AuthProvider } from './context/Auth-context';

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;

