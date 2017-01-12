var posterElement = document.querySelector('#poster');
var plotElement = document.querySelector('#plot');

var http = new XMLHttpRequest();
var url = 'http://www.omdbapi.com/?t=lord+of+the+rings&y=&plot=short&r=json';
var method = 'GET';


document.getElementById('submit-btn').addEventListener("click", function(event){
  event.preventDefault();
});


function fetchMovie() {
  alert(document.getElementById('movie-value')['value']);
}





http.open(method, url);
http.onreadystatechange = function() {
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
