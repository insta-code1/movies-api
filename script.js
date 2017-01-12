var posterElement = document.querySelector('#poster');
var plotElement = document.querySelector('#plot');

var http = new XMLHttpRequest();
var method = 'GET';


document.getElementById('submit-btn').addEventListener("click", function (event) {
  event.preventDefault();
});

function fetchMovie() {
  var movieRef = document.getElementById('movie-value')['value'];
  return concatUrl(encodeURI(movieRef));
}

function concatUrl(title) {
  var url = 'http://www.omdbapi.com/?t=' + title + '&y=&plot=short&r=json';
  return fetchData(url);
}

function fetchData(url) {
  http.open(this.method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      console.log(JSON.parse(http.responseText, null, 4).Poster);
      var data = JSON.parse(http.responseText, null, 4);
      posterElement.src = data.Poster;
      plotElement.innerHTML = data.Plot;
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
      console.log('Error');
    }
  };
  http.send();
}



