import React, { useState, useEffect, useCallback } from 'react'
import getUser from '../helpers/getUsers';
import getPosts from '../helpers/get-posts';

const FetchCard = () => {
  const [ user, setUser ] = useState({});
  const [ posts, setPosts ] = useState([]);

  const updateUser = () => getUser().then(newUser => setUser(newUser));
  const updatePosts = useCallback(() => getPosts(user.id).then(newPosts => setPosts(newPosts)), [user.id]);

  useEffect(() => updateUser(), []);
  useEffect(() => { if (user?.id) updatePosts() }, [ user, updatePosts ]);

  return (
    <>
      <button onClick={updateUser}>
        Another User
      </button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h2>Posts - user: {user.id}</h2>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}

export default FetchCard;