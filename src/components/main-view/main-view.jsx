import { useEffect, useState } from "react";
import { SignupView } from "../signup-view/signup-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MainView = () => {
  //empty array to be pulled from API
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMoive] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://my-flixcf.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = data.docs.map((d0c) => {
          return {
            id: doc.key,
            title: doc.title,
            image: "", // use ` and link from api
            director: doc.director_name?.[0],
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  return (
    <Row className="justify-content-md-center">
      <Button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      >
        Logout
      </Button>
      {!user ? (
        <Col md={5}>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          or
          <SignupView />
        </Col>
      ) : selectedMovie ? (
        <Col md={8}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMoive(null)}
          />
        </Col>
      ) : books.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        <div>
          {movies.map((movie) => (
            <Col className="mb-5" key={movie.id} md={3}>
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMoive(newSelectedMovie);
                }}
              />
            </Col>
          ))}
        </div>
      )}
    </Row>
  );
};
