function loadPage(page){
  fetch(page)
    .then(res => res.text())
    .then(data => {
      document.getElementById("app").innerHTML = data;
    });
}


loadPage('pages/home.html');
