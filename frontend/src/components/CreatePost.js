import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ token, onPostCreated }) => {
  const [form, setForm] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('http://localhost:5000/api/posts', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setForm({ title: '', content: '' });
      onPostCreated();
    } catch (err) {
      setError('Failed to create post');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreatePost;