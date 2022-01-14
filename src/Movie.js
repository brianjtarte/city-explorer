import './App.css';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Movie extends React.Component {
  render() {
    return (
      <>
        
        <Accordion.Item eventKey={this.props.idx}>
          <Accordion.Header>
            {this.props.movie.original_title}
          </Accordion.Header>
          <Accordion.Body>
            {this.props.movie.overview}
          </Accordion.Body>
        </Accordion.Item>

        
      </>
    );
  };
}

export default Movie;