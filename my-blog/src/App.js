import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BlogProvider } from './BlogProvider';
import { UserProvider } from './UserContext';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import BlogArticle from './BlogArticle';
import SignUp from './SignUp';
import Login from './Login';
import Grid from './Grid';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BlogProvider>
        <div className="App">
          <nav className="solarpunk-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/grid">Grid</Link></li> {/* Added link for Grid */}
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>

          <main className="solarpunk-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogArticle />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/grid" element={<Grid />} /> {/* Added route for Grid */}
            </Routes>
          </main>
        </div>
      </BlogProvider>
    </UserProvider>
  );
}

export default App;