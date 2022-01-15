import './App.css';
import React from 'react';
import Movie from './Movie';
import Accordion from 'react-bootstrap/Accordion';

class Movies extends React.Component{
  render(){
    return(
      <>

        <Accordion>
          {this.props.movieArray.map((movie, idx) => (
            <Movie movie = {movie} idx = {idx}/>
          ))}
        </Accordion>
      </>
    );
  };
}

export default Movies;