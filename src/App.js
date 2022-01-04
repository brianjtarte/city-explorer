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
    }
  }

  getSelectedCity = (event) => {
    console.log(`event target value for form = ${event.target.value}`)
    this.setState({selectedCity: event.target.value});
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.selectedCity}&format=json`;
    console.log(`URL= ${url}`);
    const response = await axios.get(url);
    this.setState({locationObject: response.data[0]});
    console.log(this.state.locationObject);
  }

  render(){
    return(
      <>
      <Header/>
      <Main getSelectedCity={this.getSelectedCity} getLocation={this.getLocation} locationObject={this.state.locationObject}/>
      <Footer/>
      </>
    );
  };
}

export default App;
