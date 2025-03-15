import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import GeneratorSpreadsheet from './modules/generator-spreadsheet/view';

const isDev = process.env.NODE_ENV !== 'production';
const Router = isDev ? BrowserRouter : HashRouter;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneratorSpreadsheet />} />
        <Route path="/about" element={null} />
      </Routes>
    </Router>
  );
};

export default App;
