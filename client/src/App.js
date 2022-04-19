
import './App.css';
import Navigation from './components/Navigation';
import './css/nav.css';
import WebFont from 'webfontloader';
import {useEffect, useState} from 'react';
import Footer  from './components/Footer';
import { BestSeller } from './components/BestSeller';
import { Preloader } from './components/Preloader';
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";

function App() {
  const [loading,setLoading]= useState(false);

  const override=css`position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  background:rgba(34,139,34,0.2);
  transition:0.5s ease-out;
  `
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },2000)
  },[])

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Sans-serif', 'Raleway']
      }
    });
   }, []);
  
  return (
    <div>  
    {loading ?
       <BarLoader
       css={override}
       size={60}
       color={'rgb(34,139,34)'}
       width={250}
       loading={loading}
       speedMultiplier={1}
       />
       :<>
       <Navigation />
       <BestSeller />
       <Footer />
       </>
     
  }
  
    </div>
 
  );
}

export default App;
