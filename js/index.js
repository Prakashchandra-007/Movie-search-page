const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const main = document.getElementById("main");
const search = document.getElementById("search");


getData(url)
async function getData(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log("insed 1st");
    console.log(data.results);
    console.log(Array.isArray(data.results))
    showData(data.results)
}






// functon to show data on page after gerting from api
function showData(dataArr) {
    // console.log(">>>>>>>>>"+dataArr)
    let content='';
    dataArr.forEach((item, indx, arr) => {
        console.log(dataArr[indx].title)
        console.log(dataArr[indx].overview)
        console.log(dataArr[indx].vote_count)
        console.log(dataArr[indx].vote_average)
        console.log(dataArr[indx].poster_path)
        console.log("=========================")
        let img_path ="https://image.tmdb.org/t/p/w1280"+dataArr[indx].poster_path;
        let overview = dataArr[indx].overview;
        let movie_title = dataArr[indx].title;
        let vote_count = dataArr[indx].vote_count;
        let movie_rate = dataArr[indx].vote_average;
        // let stars=2*⭐;
        
        content += `<div class="movie-card">
        <img src="${img_path}" alt="${movie_title}">
        <div class="card-overlay">
        <h1>${movie_title}</h1>
        <p>Lang:en</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>${overview}</p>
        <p>Vote: ${vote_count}  </p>        
        </div> <div class="card-overlay">
        </div>
        </div> `
    })



    main.innerHTML = content;
}