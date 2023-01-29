import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  //empty array to be pulled from API
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMoive] = useState(null);

  useEffect(() => {
    fetch("https://my-flixcf.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://my-flixcf.herokuapp.com/b/id/${doc.imageURL}-L.jpg`,
            director: doc.director_name?.[0]
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

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