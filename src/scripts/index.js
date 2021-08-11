/* eslint-disable no-console */
import '../style.css';
import { spawnCards, valueUpdater } from './spawn-cards';
import { updateLikes } from './likes';

const target = document.querySelector('.card-container');
const comedy = document.querySelector('.comedy');

// eslint-disable-next-line no-unused-vars
const fetch = require('node-fetch');

// eslint-disable-next-line no-unused-vars
const Appcreation = () => {
  const request = new XMLHttpRequest();
  const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  request.open('POST', requestURL, true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 201) {
      console.log(request.responseText);
    }
  };
  request.send();
};

async function fetchResultsJSON() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy#');
  const results = await response.json();
  return results;
}

fetchResultsJSON().then((results) => {
  console.log(results); // fetched movies
  results.splice(8, 1);
  const total = spawnCards(results, target);
  valueUpdater(comedy, total);
  updateLikes();
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.card-container').style.display = 'flex';
  document.querySelector('.comments_container').style.display = 'none';
  document.querySelector('.card-container').style.display = 'grid';
  document.querySelector('main').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.card-container').style.display = 'flex';
  document.querySelector('.comments_container').style.display = 'none';
  document.querySelector('.card-container').style.display = 'grid';
  document.querySelector('main').style.display = 'flex';
});



document.querySelector('.submit_button').addEventListener('click', () => {
  const itemId = document.querySelector('.mname').textContent;
  const userName = document.querySelector('.your_name').value;
  const commentContent = document.querySelector('textarea').value;
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments', {

    // Adding method type
    method: 'POST',

    // Adding body or contents to send
    body: JSON.stringify({
      item_id: itemId,
      username: userName,
      comment: commentContent,
    }),

    // Adding headers to the request
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

    .then((response) => response.json())
  // eslint-disable-next-line no-console
    .then((json) => console.log(json));
    document.querySelector('.your_name').value = '';
    document.querySelector('textarea').value = '';
    event.preventDefault();
});


