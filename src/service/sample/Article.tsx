import './Article.css';

import React, { useReducer, useEffect } from 'react';

import { reducer, initialVal, ActionType } from './store';

export default function ArticleDOM() {
  const [store, dispatch] = useReducer(reducer, initialVal);
  const { articles } = store;

  useEffect(() => {
    setInterval(() => dispatch({ type: ActionType.SET_ARTICLES }), 1000);
  }, []);

  return (
    <div className="main">
      <h1>Articles</h1>
      <ul>
        {articles.length === 0 ? (
          <div>loading</div>
        ) : (
          articles.map((v: any) => (
            <li key={v.title}>
              <h2>{v.title}</h2>
              <p>{v.url}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
