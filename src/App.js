import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Achievement from './pages/Achievement';
import Claim from './pages/Claim';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Achievement/>
      <Claim/>
    </div>
  );
}

export default App;
