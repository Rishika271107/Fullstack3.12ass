import React, { useState } from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import CreatePost from './components/CreatePost';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [view, setView] = useState('dashboard');

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  if (!token) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <nav>
        <button onClick={() => setView('dashboard')}>Dashboard</button>
        <button onClick={() => setView('create')}>Create Post</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      {view === 'dashboard' && <Dashboard token={token} />}
      {view === 'create' && <CreatePost token={token} onPostCreated={() => setView('dashboard')} />}
    </div>
  );
}

export default App;