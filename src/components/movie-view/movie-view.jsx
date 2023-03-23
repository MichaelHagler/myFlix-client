import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FavoriteMovieToggle } from "../favorite-movie-toggle/favorite-movie-toggle";
import "./movie-view.scss";

export const MovieView = ({ movies, user, token, onFavoriteMovieChanged }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  const alreadyFavorite = user.FavoriteMovies.find(
    (favMovieId) => favMovieId === movie.id
  );

  const getUser = () => {
    fetch("https://my-flixcf.herokuapp.com/users/" + user.username, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json())
    .then((user) => {
      if (user) {
        onFavoriteMovieChanged(user);
      } else {
        alert("Something went wrong");
      }
    });
  }

  const handleFavoriteMovie = (event) => {
    event.preventDefault();



    if (alreadyFavorite) {
      fetch(
        `https://my-flixcf.herokuapp.com/users/${user.username}/movies/${movie.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.ok) {
          alert("Movie removed from favorites");
          getUser();
        } else {
          alert("Something went wrong");
        }
      });
    } else {
      fetch(
        `https://my-flixcf.herokuapp.com/users/${user.username}/movies/${movie.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.ok) {
          alert("Movie added to favorites");
          getUser();
        } else {
          alert("Something went wrong");
        }
      });
    }
  };

  return (
    <div>
      <div>
        <img className="w-100" src={movie.imageURL} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <Link to={`/`}>
        <Button variant="primary">Back</Button>
      </Link>
      <Button variant="primary" onClick={handleFavoriteMovie}>
        {alreadyFavorite ? "Remove Favorite": "Add Favorite"}
      </Button>
    </div>
  );
};
