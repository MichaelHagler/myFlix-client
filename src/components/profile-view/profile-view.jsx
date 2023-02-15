import { useEffect, useState } from "react";

export const ProfileView = () => {
  //pull users to arry from API
  //compare logged in user to arry to find user info to display
  const [user, setUsers] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    fetch("https://my-flixcf.herokuapp.com/users")
      .then((response) => response.json())
      .then((user) => {
        const userFromApi = user.map((doc) => {
          return {
            id: doc._id,
            Username: doc.Username,
            Password: doc.Password,
            Email: doc.Email,
          };
        });

        setUsers(userFromApi);
      });
  }, [user]);
}

return (
  console.log(user);
)