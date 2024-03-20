import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './comps/Home';
import About from './comps/About';
import ContactUs from './comps/ContactUs';
import Movies from './comps/Movies';
import ErrorPage from './comps/error404/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  </BrowserRouter>
);
