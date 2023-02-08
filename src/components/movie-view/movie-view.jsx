import "./movie-view.scss";
//import { MovieCard } from "../movie-card/movie-card";

export const MovieView = ({ movie, onBackClick }) => {
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
      <button
        className="back-button"
        sytle={{ cursor: "pointer" }}
        onClick={onBackClick}
      >
        Back
      </button>
    </div>
  );
};