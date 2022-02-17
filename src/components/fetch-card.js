import React, { useState, useEffect } from 'react'
import getUser from '../helpers/getUsers';

const FetchCard = () => {
  const [user, setUser] = useState({});

  const updateUser = () => {
    getUser()
      .then((newUser) => {
        setUser(newUser);
    });
  }

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <button onClick={updateUser}>
        Another User
      </button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  );
}

export default FetchCard;
