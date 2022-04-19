import React from 'react';
import '../css/bestSeller.css';


export function BestSeller(){
    return(
        <section className='bestSeller'>
            <div className='contain'>
                <div className='title'>
                    <h5 className='phrase'>Read and listen<br/> to more than millions<br/>of book online</h5><br/>
                    <button className='Explore'><h5>Explore</h5></button>
                    </div>
            <div className='sheet'>
        <div className='Book first'></div>
        <div className='Book second'></div>
        <div className='Book third'></div>
        <div className='Book fourth'></div>
        <div className='Book fifth'></div>
        <div className='Book sixth'></div>
        <div className='Book seventh'></div>
        <div className='Book eighth'></div>
        <div className='Book ninth'></div>
        <div className='Book tenth'></div>
        <div className='Book eleventh'></div>
        <div className='Book twelfth'></div>
        <div className='Book thirteenth'></div>
        <div className='Book fourteenth'></div>
        <div className='Book fifteenth'></div>
        
            </div>
        </div>
        </section>
    )
}