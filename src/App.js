import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import axios from 'axios';


class App extends React.Component{
  constructor(
    props
  ){
    super(props);
    this.state = {
      selectedCity: '',
      locationObject: {},
      weatherArray: [],
    }
  }

  getSelectedCity = (event) => {
    console.log(`event target value for form = ${event.target.value}`)
    this.setState({selectedCity: event.target.value});
  }

  getLocation = async () => {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.selectedCity}&format=json`;
    console.log(`URL= ${url}`);
    try{
      const response = await axios.get(url);
      this.setState({locationObject: response.data[0]});
    } catch (e){alert(e + ' Try typing the name of a US City')}
    
    console.log(this.state.locationObject);
    this.getWeather();
  }

  getWeather = async () => {
    const url = `http://localhost:3001/weatherData?city=${this.state.selectedCity}}&lat=${this.state.locationObject.lat}&lon=${this.state.locationObject.lon}`;
  console.log(`URL= ${url}`);
  try{
    const response = await axios.get(url);
    this.setState({weatherArray: response.data});
  } catch (e){
    alert(e + ' Weather data is unavailable for this city');
    this.setState({weatherArray: []});
  }
  
  console.log(this.state.weatherArray);
}

  render(){
    return(
      <>
      <Header/>
      <Main getSelectedCity={this.getSelectedCity} getLocation={this.getLocation} locationObject={this.state.locationObject} weatherArray={this.state.weatherArray}/>
      <Footer/>
      </>
    );
  };
}

export default App;
