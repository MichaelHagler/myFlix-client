import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  const handleFavorite = (event) => {
    event.preventDefault();

    fetch("https://my-flixcf.herokuapp.com/users/" + user.username + movies + movies.title, {
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
      <Button variant="primary" onClick={handleFavorite}>Favorite</Button>
    </div>
  );
};