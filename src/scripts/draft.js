const fetch = require('node-fetch');

async function fetchResultsJSON() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy#');
    const results = await response.json();
    return results;
  }
  
  fetchResultsJSON().then((results) => {
    console.log(results); // fetched movies
  });
  

