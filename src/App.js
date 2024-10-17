import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
// css 파일
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
