import './App.css';
import React from 'react';
import LocationForm from './LocationForm';

class Main extends React.Component{
    renderCityName = () => {
        if(this.props.locationObject.display_name !== undefined){
            return(
                <div class= 'displayedMap'>
                    <h2>The city we searched for is: {this.props.locationObject.display_name}</h2>
                    <p>latitude: {this.props.locationObject.lat}</p>
                    <p>longitude: {this.props.locationObject.lon}</p>
                    <img src = {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.locationObject.lat},${this.props.locationObject.lon}&zoom=9`} alt = 'coming soon'/>
                </div>
            )
        }
    }

    render(){
        return(
        <>
            <LocationForm getSelectedCity={this.props.getSelectedCity} getLocation={this.props.getLocation}/>
            {this.renderCityName()}
        </>
        );
    };
}

export default Main;