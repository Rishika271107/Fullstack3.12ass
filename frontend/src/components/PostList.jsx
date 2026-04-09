import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch posts');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const originalPosts = [...posts];
      setPosts(posts.filter(post => post._id !== id)); // Optimistic update
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
      } catch (err) {
        setPosts(originalPosts); // Revert on error
        setError('Delete failed');
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>By: {post.author.username}</p>
          {user && user.id === post.author._id && (
            <div>
              <button onClick={() => window.location.href = `/edit/${post._id}`}>Edit</button>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;