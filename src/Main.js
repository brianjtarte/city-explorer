import './App.css';
import React from 'react';
import LocationForm from './LocationForm';

class Main extends React.Component{
    renderCityName = () => {
        if(this.props.locationObject.display_name !== undefined){
            return(
                <>
                    <h2>The city we searched for is: {this.props.locationObject.display_name}</h2>
                    <p>latitude: {this.props.locationObject.lat}</p>
                    <p>longitude: {this.props.locationObject.lon}</p>
                </>
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