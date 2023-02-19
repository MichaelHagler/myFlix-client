import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ProfileView = ({ user, movies }) => {

  const storedToken = localStorage.getItem("token");
  const storedMovies = JSON.parse(localStorage.getItem("movies"));
  const storedUser = localStorage.getItem("user");
  const [token] = useState(storedToken ? storedToken : null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");

// update user profile
  const handleProfileUpdate = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
      birthDate: birthDate
    };

    fetch("https://my-flixcf.herokuapp.com/users/" + user.username, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        alert("Profile Updated!");
        window.location.reload();
      } else {
        alert("Update failed");
      }
    });
  };

  //delete user profile
  const handleProfileDelete = (event) => {
    event.preventDefault();

    fetch("https://my-flixcf.herokuapp.com/users/" + user.username, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        alert("Profile Deleted");
        window.location.reload();
      } else {
        alert("Something went wrong");
      }
    });
  };

  return (
    <Form onSubmit={handleProfileUpdate}>
    <Form.Group>
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        placeholder={user.username}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        placeholder="change password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Email:</Form.Label>
      <Form.Control
        type="email"
        placeholder={user.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Birthday:</Form.Label>
      <Form.Control
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        required
      />
    </Form.Group>
    <Col className= "d-flex justify-content-between">
    <Button variant="primary" type="submit">
      Update
    </Button>
    <Button variant="secondary" onClick={handleProfileDelete}>Delete Profile</Button>
    </Col>
  </Form>
  );
}