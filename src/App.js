import React from 'react';
import './App.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">My Blog</div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

const BlogPost = ({ title, date, author, image, body }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p className="meta">{date} by {author}</p>
      <img src={image} alt={title} className="blog-image" />
      <p>{body}</p>
      <hr />
    </div>
  );
};

const BlogList = () => {
  const posts = [
    {
      title: 'First Blog Post',
      date: 'May 30, 2024',
      author: 'John Doe',
      image: 'book1.png',
      body: 'This is the body of the first blog post.'
    },
    {
      title: 'Second Blog Post',
      date: 'May 31, 2024',
      author: 'Jane Doe',
      image: 'book2.png',
      body: 'This is the body of the second blog post.'
    }
    // Add more posts as needed
  ];

  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <TopBar />
      <BlogList />
    </div>
  );
}

export default App;
