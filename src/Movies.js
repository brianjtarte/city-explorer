import './App.css';
import React from 'react';
import Movie from './Movie';

class Movies extends React.Component{
  render(){
    return(
      <>
        {this.props.movieArray.map((movie, idx) => (

          <Movie movie = {movie} />
            
        ))}
      </>
    );
  };
}

export default Movies;