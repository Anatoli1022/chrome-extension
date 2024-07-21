let popup = document.createElement('div');
popup.classList.add('popup');
document.body.appendChild(popup);

let articles = document.querySelectorAll('#story');

articles.forEach((article) => {
  let headline = article.querySelector('h3.title');
  if (headline) {
    let searchIcon = document.createElement('img');
    searchIcon.title = 'Show Details';
    searchIcon.classList.add('search-icon');
    searchIcon.src = chrome.runtime.getURL('icons/search.png');
    searchIcon.title = 'Show Details';

    headline.appendChild(searchIcon);

    searchIcon.addEventListener('mouseover', (event) => {
      let title = (headline.textContent || '').trim();
      let teaser = article.querySelector('.title');
      let description = (article.textContent || 'none description').trim();

      if (teaser) {
        // Updating the contents of the modal window
        popup.innerHTML = `<strong>${title}</strong><p>${description}</p>`;

        // Showing the modal window
        popup.style.display = 'block';

        let rect = headline.getBoundingClientRect();
        popup.style.top = `${rect.top + window.scrollY - 100}px`;

        popup.style.left = `${rect.left / 2}px`;
      }
    });

    searchIcon.addEventListener('mouseout', () => {
      // Hiding the modal window
      popup.style.display = 'none';
    });
  }
});
