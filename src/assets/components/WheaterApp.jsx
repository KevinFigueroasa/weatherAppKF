import React from 'react';
import useWheater from '../../hooks/useWheater';

const WheaterApp = () => {

    const {data: wheater, useEffect, convert, whatUnit} = useWheater()
    console.log(wheater)

    return (
        <div className='card-container'>
            <div className='card'>
                <h1>The weather</h1>
                <h2>{wheater.name} - {wheater.sys?.country}</h2>
                <div className='temp-icon'>
                    <img  src={`http://openweathermap.org/img/wn/${wheater.weather?.[0].icon}.png`} alt="" />
                    <h3>{whatUnit ? Math.floor((wheater.main?.temp - 273.15)) : Math.floor((wheater.main?.temp - 273.15) * 9/5 + 32)}<sup>{whatUnit ? "°C" : "°F"}</sup></h3>
                </div>
                <div className='aditional-data-container'>
                    <div className='aditional-data'>
                        <h2>MAX</h2>
                        <i className="fa-regular fa-temperature-arrow-up"></i>
                        <h3>{whatUnit ? Math.floor((wheater.main?.temp_max - 273.15)) : Math.floor((wheater.main?.temp_max - 273.15) * 9/5 + 32)}<sup>{whatUnit ? '°C' : '°F'}</sup></h3>
                    </div>
                    <div className='aditional-data'>
                        <h2>MIN</h2>
                        <i className="fa-regular fa-temperature-arrow-down"></i>
                        <h3>{whatUnit ? Math.floor((wheater.main?.temp_min - 273.15)) : Math.floor((wheater.main?.temp_min - 273.15) * 9/5 + 32)}<sup>{whatUnit ? '°C' : '°F'}</sup></h3>
                    </div>
                    <div className='aditional-data'>
                        <h2>WIND</h2>
                        <i className="fa-regular fa-wind"></i>
                        <h3>{wheater.wind?.speed}<sup>m/s</sup></h3>
                    </div>
                </div>
                <button onClick={convert}>To {whatUnit ? "°F" : "°C"} </button>
            </div>
        </div>
    );
};

export default WheaterApp;