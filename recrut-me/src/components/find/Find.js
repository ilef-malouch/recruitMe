import React from 'react';
import Search from './Search';
import './Find.css';

const Find = () => {
    return (
        <div className='container-find'>
            <div className='wrapper-find'>
                <img className='image' src='https://media.lrng.org/90/93/6230059222142087be252be23a09a6bf3902-626x417.jpg' alt='123'></img>
                <div>
                    <h1 className='descrip'>FIND A JOB THAT SUITS YOU</h1>
                    <Search  />
                </div>
                
            </div>
                
        </div>
    );
};

export default Find;