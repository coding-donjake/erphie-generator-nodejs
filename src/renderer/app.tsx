import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import GeneratorSpreadsheet from '@/renderer/modules/generator-spreadsheet/view';
import '@/renderer/style.scss';

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
