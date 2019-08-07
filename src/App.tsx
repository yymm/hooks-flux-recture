import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Article from './service/sample/Article';
import DevtoArticle from './service/devto/DevtoArticle';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/sample" component={Article} />
      <Route path="/devto" component={DevtoArticle} />
    </BrowserRouter>
  );
};

export default App;
