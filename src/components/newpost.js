import React, { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [infoUsuario, setInfoUsuario] = useState(JSON.parse(localStorage.getItem('infoUsuario')));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      return;
    }
    try {
      const response = await axios.post('https://ctrl-dev-back-test.up.railway.app/posts/', {
        title,
        body,
        user_id: infoUsuario.id
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {token ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>Create Post</button>

        </form>
      ) : (
        <p>Please authenticate to create a new post.</p>
      )}
    </div>
  );
};

export default NewPost;