// Load partials from same folder
function loadPartial(id, file){
  fetch(file)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
}

// Load main content
function loadPage(page){
  fetch(page)
    .then(res => res.text())
    .then(html => document.getElementById('app').innerHTML = html);
}

// Setup navbar buttons
function initNav() {
  document.getElementById('nav-home').onclick = () => loadPage('home.html');
  document.getElementById('nav-about').onclick = () => loadPage('about.html');
  document.getElementById('nav-contact').onclick = () => loadPage('contact.html');
}

// Load everything on window load
window.onload = () => {
  loadPartial('navbar', 'navbar.html');
  loadPartial('left-sidebar', 'left.html');
  loadPartial('right-sidebar', 'right.html');
  loadPartial('footer', 'footer.html');

  loadPage('home.html');

  // small timeout to ensure navbar loaded
  setTimeout(initNav, 50);
};