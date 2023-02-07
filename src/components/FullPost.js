import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const FullPost = (props) => {
  const { id } = useParams();
  const [postData, setPostData] = useState({ post: {} });

  useEffect(() => {
    axios.get(`https://ctrl-dev-back-test.up.railway.app/posts/${id}`).then((res) => {
      setPostData({ post: res.data.result });
    });
  });

  return (
    <div>
      <h1>{postData.post.title}</h1>
      <h2>{postData.post.body}</h2>
      <h3>...</h3>
    </div>
  );
};
