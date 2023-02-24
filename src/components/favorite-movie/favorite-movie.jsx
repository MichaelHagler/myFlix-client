

export const FavoriteMovie = () => {
  event.preventDefault();

  fetch(`https://my-flixcf.herokuapp.com/users/${user.username}/movies/${movie.id}`, {
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