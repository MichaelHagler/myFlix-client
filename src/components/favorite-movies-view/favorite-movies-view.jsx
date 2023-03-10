import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMoviesView = ({ movies, user }) => {

  //Favorite movie list
  console.log("user", movies);
  const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m.id));

  return (
    <Row>
      {favoriteMovies.length === 0 ? (
        <Col>You have no favorite movies</Col>
      ) : (
        <div>
          <div>Favorite movies</div>
              {favoriteMovies.map((movie) => (
                <Col className="mb-4" key={movie.id} md={3}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
        </div>
      )}
    </Row>
  )
};