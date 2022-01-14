import './App.css';
import React from 'react';

class Movies extends React.Component{
  render(){
    return(
      <>
        {this.props.movieArray.map((movie, idx) => (
            <div key={idx}>
                <h4>
                    {movie.original_title}
                </h4>
                <p>
                    {movie.overview}
                </p>
            </div>
        ))}
      </>
    );
  };
}

export default Movies;