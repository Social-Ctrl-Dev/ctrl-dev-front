
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FullPost } from './components/FullPost';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { Header } from './components/Header';
import FooterC from './components/FooterC';
const routing =(
  <BrowserRouter>  
     <React.StrictMode>
    <Header/>
    <Routes>
        <Route  path="/" element={ <App /> } />
        <Route path="/post/:id" element={<FullPost/>} /> 
    </Routes>
   <FooterC/>
  </React.StrictMode>
  </BrowserRouter>

  
);

ReactDOM.render(routing, document.getElementById('root'));