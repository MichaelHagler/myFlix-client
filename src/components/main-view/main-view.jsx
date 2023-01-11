import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avatar",
      image: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UY720_.jpg",
      director: "James Cameron" /*{
        name: "James Cameron",
        bio: "This is Jim's bio",
        birth_date: "08-16-1954"
      },
      genre: {
        name: "Sci-Fi",
        description: "this is sci-fi"
      }*/
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      image: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX964_.jpg",
      director: "Peter Jackson" /*{
        name: "Peter Jackson",
        bio: "This is Peter's bio",
        birth_date: "10-31-1961"
      },
      genre: {
        name: "Fantasy",
        description: "this is fantasy"
      }*/
    },
    {
      id: 3,
      title: "Star Wars",
      image: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_FMjpg_UY734_.jpg",
      director: "George Lucas" /*{
        name: "George Lucas",
        bio: "This is George's bio",
        birth_date: "05-14-1944"
      },
      genre: {
        name: "Sci-Fi",
        description: "this is sci-fi"
      }*/
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
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMoive(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};