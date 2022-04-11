import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import './css/nav.css';
import WebFont from 'webfontloader';
import {useEffect} from 'react';
import Footer  from './components/Footer';
import { BestSeller } from './components/BestSeller';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { Preloader } from './components/Preloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Sans-serif', 'Raleway']
      }
    });
   }, []);
  
  return (
    <div>  
      {/* <Preloader /> */}
    <Navigation />
    <BestSeller />
    <Footer />
    </div>
 
  );
}

export default App;
