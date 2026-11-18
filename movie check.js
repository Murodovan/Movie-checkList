//List stores all selected movies
 let movieList = [];
// Function adds movies and marks them complete
function addMovie() {
  // Get selected movie
  let title = document.getElementById("menu").value;
  let found = false;
  // Check if movie is already in the list
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].title === title) {
      movieList[i].completed = true;
      found = true;
    }
  }
  // Add movie if it is new
  if (title !== "" && found === false) {
    movieList.push({
      title: title,
      completed: false
    });
  }
  // Display watchlist
  let box = document.getElementById("box");
  box.innerHTML = "";
