/* Here is your key: e23a81ba

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e23a81ba

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=a5858db2-9c91-4e4d-990b-9c52dc51b0ef
If you did not make this request, please disregard this email. 

------------------------------------------------------------------*/

let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");

let getMovies = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class= 'msg'>Please enter movie name.</h3>`

    } else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.Response == 'True') {
                    result.innerHTML = `
                <div class= "poster">
                    <img src = ${data.Poster} class= "poster" alt=${data.Title}></div>
                <div class='description'>
                <h2>${data.Title}</h2>
                <div class="plot">Plot:<br>${data.Plot}</div>
                <div class="rating">
                Rating: ${data.imdbRating}
                </div>
                <div class="genre">${data.Genre.split(",").join("<div></div>")}</div>
                <div class="actors">Cast:<br>${data.Actors}</div>
                <div class="runtime">Reuntime: ${data.Runtime}</div>
                <div class="rated">Rated: ${data.Rated}</div>
                </div>
                `;
                }else{
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                }
            })
            .catch(()=>{
                result.innerHTML = `<h3 class="msg">Error Occurred</h3> `;
            })
    }
}
searchBtn.addEventListener("click", getMovies);
window.addEventListener("load", getMovies);