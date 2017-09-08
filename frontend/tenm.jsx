import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  localStorage.currentUser ?
  localStorage.removeItem('currentUser') :
  localStorage.setItem('currentUser', '');
  ReactDOM.render(<Root />, root);
});
