/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Index.css';

export default class FetchMethods {
  constructor() {
  };

  static get = async (type) => {
    let ENDPOINT
    if (type == 'posts') {
      ENDPOINT = "https://64f228de0e1e60602d24d53d.mockapi.io/sena/posts"
    } else if (type == 'books') {
      ENDPOINT = "https://64f228de0e1e60602d24d53d.mockapi.io/sena/books"
    } else {
      console.error("FetchMethods.get() needs a param")
    }
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    return data
  };

  static postPost = (content) => {
    let ENDPOINT = 'https://64f228de0e1e60602d24d53d.mockapi.io/sena/posts';
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: 'Sena',
        date: 'Just now',
        content: content,
        pfp: 'https://i.imgur.com/AtrHQvZ.png',
        likes: 0,
        userLiked: false
      })
    });
  };

  static postBook = (name, author, date, medium, chapCount, wordCount, rating, cover, synopsis) => {
    let ENDPOINT = 'https://64f228de0e1e60602d24d53d.mockapi.io/sena/books'
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: name,
        author: author,
        publish: date,
        medium: medium,
        chapterCount: chapCount,
        currentChapter: 0,
        wordCount: wordCount,
        rating: rating,
        cover: cover,
        synopsis: synopsis
      })
    });
  };

  static putLikes = (id, likeState, likes) => {
      let ENDPOINT = 'https://64f228de0e1e60602d24d53d.mockapi.io/sena/posts'
      return fetch(`${ENDPOINT}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userLiked: likeState,
          likes: likes
        })
      });
  };

  static putChap = (id, chap) => {
    let ENDPOINT = 'https://64f228de0e1e60602d24d53d.mockapi.io/sena/books'
    return fetch(`${ENDPOINT}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentChapter: chap
      })
    });
};

  static delete = (id) => {
    let ENDPOINT = 'https://64f228de0e1e60602d24d53d.mockapi.io/sena/books'
    return fetch(`${ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
};

(async () => {
  const books = await FetchMethods.get('books');
  const posts = await FetchMethods.get('posts');

  ReactDOM.render(
    <React.StrictMode>
      <App books={books} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
})();


