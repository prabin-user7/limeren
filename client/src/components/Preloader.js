
import React from "react";
import '../css/preloader.css';
export function Preloader(){
    var loader = document.getElementsByClassName('preloader')
    window.addEventListener('load',function(){
        loader.style.display="none"
             
    })
    return(<>
    <section className="preloader" id="preloader">
        <img className="loader" src="img/loader.gif" />
    </section>
    </>)
    

}