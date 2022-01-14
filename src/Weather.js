import './App.css';
import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component{
  render(){
    return(
      <>
        {this.props.weatherArray.map((forecast, idx) => (
           
           <WeatherDay forecast = {forecast} idx = {idx} />

        ))}
      </>
    );
  };
}

export default Weather;