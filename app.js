// Load a page dynamically and update URL
function loadPage(page, addToHistory = true) {
  fetch(page)
    .then(res => res.text())
    .then(data => {
      document.getElementById('app').innerHTML = data;

      if(addToHistory) {
        history.pushState({page: page}, '', page);
      }
    });
}

// Event listeners for navbar buttons
document.getElementById('nav-home').onclick = () => loadPage('/home.html');
document.getElementById('nav-about').onclick = () => loadPage('/about.html');
document.getElementById('nav-contact').onclick = () => loadPage('/contact.html');

// Handle browser back/forward buttons
window.onpopstate = (event) => {
  if(event.state && event.state.page) {
    loadPage(event.state.page, false); // false: don't pushState again
  } else {
    loadPage('/home.html', false); // fallback
  }
}

// Load initial page based on URL
const initialPage = location.pathname.replace('/', '') || 'home.html';
loadPage(initialPage, false);