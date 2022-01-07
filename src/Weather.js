import './App.css';
import React from 'react';

class Weather extends React.Component{
  render(){
    return(
      <>
        {this.props.weatherArray.map((forecast, idx) => (
            <div key={idx}>
                <h4>
                    {forecast.date}
                </h4>
                <p>
                    {forecast.description}
                </p>
            </div>
        ))}
      </>
    );
  };
}

export default Weather;