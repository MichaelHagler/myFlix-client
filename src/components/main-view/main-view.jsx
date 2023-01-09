import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avatar",
      image: "https://www.imdb.com/title/tt0499549/mediaviewer/rm2864126209/?ref_=tt_ov_i",
      director: "James Cameron"
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      image: "https://www.imdb.com/title/tt0167261/mediaviewer/rm306845440/?ref_=tt_ov_i",
      director: "Peter Jackson"
    },
    {
      id: 3,
      title: "Star Wars",
      image: "https://www.imdb.com/title/tt0076759/mediaviewer/rm164871937/?ref_=tt_ov_i",
      director: "George Lucas"
    }
  ]);

  const [selectedMovie, setSelectedMoive] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMoive(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieData={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMoive(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};