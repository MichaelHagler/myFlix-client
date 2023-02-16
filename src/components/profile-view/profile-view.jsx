import { useEffect, useState } from "react";

export const ProfileView = ({ user, movies }) => {

  const storedToken = localStorage.getItem("token");
  const storedMovies = JSON.parse(localStorage.getItem("movies"));
  const storedUser = localStorage.getItem("user");

  const [token] = useState(storedToken ? storedToken : null);
}