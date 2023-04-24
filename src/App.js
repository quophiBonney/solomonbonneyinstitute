import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Achievement from './pages/Achievement';
import Claim from './pages/Claim';
import Redefine from './pages/Redefine';
import Programs from './pages/Programs';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Achievement/>
      <Redefine/>
      <Claim/>
      <Programs/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
