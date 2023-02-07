
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FullPost } from './components/FullPost';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { Header } from './components/Header';
import FooterC from './components/FooterC';
import Register from './components/register';
import NewPost from './components/newpost';
import UserProfile from './components/userProfile';
import ContactUs from './components/contactUs';
const routing =(
  <BrowserRouter>  
     <React.StrictMode>
    <Header/>
  
    <Routes>
        <Route  path="/" element={ <App /> } />
        <Route path="/post/:id" element={<FullPost/>} /> 
        <Route path="/:name" element={<UserProfile/>} /> 
        <Route path="/contactus" element={<ContactUs/>} /> 
        

    </Routes>
    <Register/>
   <FooterC/>
  </React.StrictMode>
  </BrowserRouter>

  
);

ReactDOM.render(routing, document.getElementById('root'));