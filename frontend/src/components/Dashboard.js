import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const fetchPosts = async (pageNum = 1) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/api/posts?page=${pageNum}&limit=5`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(res.data.posts);
      setPagination(res.data.pagination);
    } catch (err) {
      setError('Failed to fetch posts');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleNext = () => {
    if (pagination.hasNext) setPage(page + 1);
  };

  const handlePrev = () => {
    if (pagination.hasPrev) setPage(page - 1);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && posts.length === 0 && <p>No posts yet.</p>}
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.createdAt).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrev} disabled={!pagination.hasPrev}>Previous</button>
        <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
        <button onClick={handleNext} disabled={!pagination.hasNext}>Next</button>
      </div>
    </div>
  );
};

export default Dashboard;