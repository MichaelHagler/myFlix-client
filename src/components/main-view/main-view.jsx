import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avatar",
      image: "https://www.imdb.com/title/tt0499549/mediaviewer/rm2864126209/?ref_=tt_ov_i",
      director: {
        name: "James Cameron",
        bio: "This is Jim's bio",
        birth_date: "08-16-1954"
      },
      genre: {
        name: "Sci-Fi",
        description: "this is sci-fi"
      }
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      image: "https://www.imdb.com/title/tt0167261/mediaviewer/rm306845440/?ref_=tt_ov_i",
      director: {
        name: "Peter Jackson",
        bio: "This is Peter's bio",
        birth_date: "10-31-1961"
      },
      genre: {
        name: "Fantasy",
        description: "this is fantasy"
      }
    },
    {
      id: 3,
      title: "Star Wars",
      image: "https://www.imdb.com/title/tt0076759/mediaviewer/rm164871937/?ref_=tt_ov_i",
      director: {
        name: "George Lucas",
        bio: "This is George's bio",
        birth_date: "05-14-1944"
      },
      genre: {
        name: "Sci-Fi",
        description: "this is sci-fi"
      }
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