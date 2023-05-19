import React, {useEffect} from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Achievement from './pages/Achievement';
import Claim from './pages/Claim';
import Redefine from './pages/Redefine';
import Programs from './pages/Programs';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import WebDevelopment from "../src/pages/WebDevelopment";
import ContentWriting from "../src/pages/ContentWriting";
import WordPressDevelopment from "../src/pages/WordPressDevelopment";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/webdevelopment" element={<WebDevelopment/>}/>
        <Route path="/contentwriting" element={<ContentWriting/>}/>
        <Route path="/wordpressdevelopment" element={<WordPressDevelopment/>}/>
      </Routes>
      <Home/>
      <Achievement/>
      <Redefine/>
      <Claim/>
      <Programs/>
      <Skill/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
