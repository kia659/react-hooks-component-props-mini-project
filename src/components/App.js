import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  return (
    <div className="App">
      <Header name="My React Blog" />
      <About image="https://via.placeholder.com/215" about="Welcome to my React blog!" />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
