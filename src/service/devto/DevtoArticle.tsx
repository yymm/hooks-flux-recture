import './DevtoArticle.css';

import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import { reducer, ActionType, initialVal } from './store';

export default function DevtoArticleDOM() {
  const [store, dispatch] = useReducer(reducer, initialVal);
  const { articles } = store;

  useEffect(() => {
    axios.get('https://dev.to/api/articles').then((res: any) => {
      console.log(res);
      dispatch({ type: ActionType.FETCH_DEVTO_ARTICLES, payload: res.data });
    });
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
              <a href={v.url} target="_blank" rel="noopener noreferrer">
                {v.url}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
