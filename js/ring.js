const API_KEY = 'XJlq9OFMcHAy8pAQK7xj';
const BASE_URL = 'https://the-one-api.dev/v2';

const selectors = {
  characterList: document.querySelector('.js-list'),
  // nextButton: document.querySelector('.js-button'),
  guard: document.querySelector('.guard'),
};

// selectors.nextButton.addEventListener('click', handlerNext);

// function handlerNext() {
//   paginationPage += 1;
//   serviceGetCharacter().then(res => {
//     selectors.characterList.insertAdjacentHTML(
//       'beforeend',
//       createMarkup(res.docs)
//     );
//     if (res.page >= res.pages) {
//       selectors.nextButton.classList.add('hide');
//     }
//   });
// }

// function serviceGetCharacter() {
//   const requestOptions = {
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };

//   const queryParams = new URLSearchParams({
//     limit: paginationLimit,
//     page: paginationPage,
//   });

//   return fetch(`${BASE_URL}//character?${queryParams}`, requestOptions).then(
//     res => {
//       if (!res.ok) {
//         throw new Error(`Ooops, status code: ${res.status}`);
//       }

//       return res.json();
//     }
//   );
// }

// serviceGetCharacter()
//   .then(res => {
//     selectors.characterList.insertAdjacentHTML(
//       'beforeend',
//       createMarkup(res.docs)
//     );
//     if (res.page < res.pages) {
//       selectors.nextButton.classList.remove('hide');
//     }
//   })
//   .catch(err => console.log(err));

const paginationLimit = 30;
let paginationPage = 30;

let options = {
  root: null,
  rootMargin: '0px 0px 300px 0px',
  // threshold: 1.0,
};

let observer = new IntersectionObserver(loadMoreHandler, options);

function loadMoreHandler(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    paginationPage++;
    serviceGetCharacter()
      .then(res => {
        if (res.page >= res.pages) {
          observer.unobserve(selectors.guard);
        }

        selectors.characterList.insertAdjacentHTML(
          'beforeend',
          createMarkup(res.docs)
        );
      })
      .catch(err => console.log(err));
  }
}

function createMarkup(array) {
  return array
    .map(
      ({ name, race, gender }) => `
    <li class="character-card ${race && race.toLowerCase()}">
      <h2 class="character-name">${name ?? 'none'}</h2>
      <h3 class="character-race">${race ?? 'none'}</h3>
      <h3 class="character-gender">${gender}</h3>
    </li>
  `
    )
    .join('');
}

function serviceGetCharacter() {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const queryParams = new URLSearchParams({
    limit: paginationLimit,
    page: paginationPage,
  });

  return fetch(`${BASE_URL}//character?${queryParams}`, requestOptions).then(
    res => {
      if (!res.ok) {
        throw new Error(`Ooops, status code: ${res.status}`);
      }

      return res.json();
    }
  );
}

serviceGetCharacter()
  .then(res => {
    selectors.characterList.insertAdjacentHTML(
      'beforeend',
      createMarkup(res.docs)
    );
    if (res.page < res.pages) {
      observer.observe(selectors.guard);
    }
  })
  .catch(err => console.log(err));
