import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Hostels from './Hostels.js';
import HostelPage from './Modules/HostelPage.js';
import Contact from './Modules/Contact.js';
import Register from './Modules/Register.js';
import Login from './Modules/Login.js';
import Dashboard from './Modules/Dashboard.js';
import ImageUpload from './Modules/ImageUploader.js';
import ImageRetriever from './Modules/imageGet.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/nav/" element={<Navbar />}>
          <Route path="home/*" element = {<Home />} />
          <Route path = "/nav/hostels/*" element = {<Hostels/>}/>
          <Route path = "/nav/hostelPage/*" element = {<HostelPage/>} />
          <Route path = "/nav/contact/*" element = {<Contact/>} />
          <Route path = "/nav/register/*" element = {<Register/>} />
          <Route path = "/nav/login/*" element = {<Login/>} />
          <Route path = "/nav/dashboard/*" element = {<Dashboard/>} />
          <Route path = "/nav/image/*" element = {<ImageUpload/>} />
        </Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
