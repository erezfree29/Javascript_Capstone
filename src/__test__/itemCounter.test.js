/**
 * @jest-environment jsdom
 */

import 'regenerator-runtime/runtime';

const fetc = require('../scripts/fetch');
const spawnCards = require ('../scripts/spawn-cards');


document.body.innerHTML = `<body>
<header>
  <nav>
    <div class="nav-element"><input type="button" class="button comedy" value="Comedy"></div>
  </nav>
</header>
<main>
  <div class="card-container"></div>
</main>
</body>`;
const target = document.querySelector('.card-container');
const section = document.querySelector('.comedy');

test('the numbers of elements in the container should be the same as the outpout of the function', () => {
  const testing = [{show: {image: {medium: 'example'}, name: 'example', summary: 'example'}}]
  spawnCards.spawnCards(testing, target)
  expect(target.childNodes.length).toBe(1);

})