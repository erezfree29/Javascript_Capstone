/* eslint-disable no-console */
import { result } from 'lodash';
import '../style.css';
import { spawnCards } from './spawn-cards';

const target = document.querySelector('.card-container')

// eslint-disable-next-line no-unused-vars
const fetch = require('node-fetch');

async function fetchResultsJSON() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy#');
  const results = await response.json();
  return results;
}

fetchResultsJSON().then((results) => {
  console.log(results); // fetched movies
  results.splice(8, 1);
  spawnCards(results, target);
});
