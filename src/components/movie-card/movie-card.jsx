import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card
      className="h-100"
      sytle={{ cursor: "pointer" }}
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <Button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      >
        Logout
      </Button>
      
      <Card.Img varitant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Genre}</Card.Text>
        <Card.Text>{movie.Director}</Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
    }),
    ImagePath: PropTypes.string.isRequired,
    // Featured: PropTypes.boolean.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
