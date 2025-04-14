import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Teas from './pages/Teas';
import Journal from './pages/Journal';
import AIRecommend from './pages/AIRecommend';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teas" element={<Teas />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/ai-recommend" element={<AIRecommend />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
