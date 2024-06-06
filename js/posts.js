const fetchPostsBtn = document.querySelector('.btn');
const postList = document.querySelector('.posts');

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: 5,
    // Change the group number here
    _page: 3,
  });

  const response = fetch(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  ).then(res => res.json());
  return response.then(r => r);
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  postList.innerHTML = markup;
}
