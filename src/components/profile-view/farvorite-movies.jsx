import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMovies = ({ movies, storedUser }) => {
  const [user, setUser] = useState(storedUser ? storedUser : null);

  //Favorite movie list
  const favoriteMovies = movies.filter(m => user.FavoriteMovies.include(m._id));

  return (
    <Row>
      {favoriteMovies.length === 0 ? (
        <Col>You have no favorite movies</Col>
      ) : (
        <div>
          <div>Favorite movies</div>
          <Col>
            <MovieCard 
              movies={movies}
              user={user}
              favorites={(user) => {
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
              }}
            />
          </Col>
        </div>
      )}
    </Row>
  )
};