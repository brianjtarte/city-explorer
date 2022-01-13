import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component{
  render(){
    return(
      <>
            <Card key={this.props.idx}>
              <Card.Body>
                <Card.Title>
                {this.props.forecast.date}
                </Card.Title>
                <Card.Text>
                {this.props.forecast.description}
                </Card.Text>
              </Card.Body>
              </Card>
      </>
    );
  };
}

export default WeatherDay;