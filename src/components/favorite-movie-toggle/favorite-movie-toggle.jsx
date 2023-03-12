import React from "react";
import { Link } from "react-router-dom";


export const FavoriteMovieToggle = ({ user, movie }) => {

  const alreadyFavorite = user.FavortieMovies.find(
    (favMovieId) => favMovieId === movie.id
  );

  const getUser = () => {
    fetch("https://my-flixcf.herokuapp.com/users/" + user.username, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        alert("Profile Updated!");
        window.location.reload();
      } else {
        alert("Update failed");
      }
    });
  }

  const handleFavoriteMovie = (event) => {
    event.preventDefault();

    if (alreadyFavorite) {

      fetch(`https://my-flixcf.herokuapp.com/users/${user.username}/movies/${movie.id}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.ok) {
      alert("Movie removed from favorites");
      window.location.reload();
    } else {
      alert("Something went wrong");
    }
  });

    } else {

      fetch(`https://my-flixcf.herokuapp.com/users/${user.username}/movies/${movie.id}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if (response.ok) {
          alert("Movie added to favorites");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      });
    }
  };

  return(
    <Link to={() => handleFavoriteMovie}>Favorite</Link>
  );
};