import './App.css';
import React from 'react';

class LocationForm extends React.Component{
  render(){
    return(
      <>
        <div className='locationForm'>
            <input onChange={this.props.getSelectedCity} placeholder='Search for a city!'></input>
            <button onClick={this.props.getLocation}>Explore</button>
        </div>
      </>
    );
  };
}

export default LocationForm;