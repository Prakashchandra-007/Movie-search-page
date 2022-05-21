const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const main = document.getElementById("main");
const search = document.getElementById("search");
const inputBox = document.getElementById("input-box");

//function to get edata from api initially
getData(url)
async function getData(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log("insed 1st");
    // console.log(data.results);
    // console.log(Array.isArray(data.results))
    showData(data.results)
}

search.addEventListener('submit',(e)=>{e.preventDefault();
    query = inputBox.value;
    const searched_movie = searchMovie(query);
    console.log(searched_movie);

    inputBox.value='';
    
})

async function searchMovie(query){
    let search_url = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+query;
    const response = await fetch( search_url);
    const result_item = response.json(); 
    console.log(search_url);
    return result_item ;
}


// functon to show data on page after gerting from api
function showData(dataArr) {
    // console.log(">>>>>>>>>"+dataArr)
    let content='';
    dataArr.forEach((item, indx, arr) => {
        // console.log(dataArr[indx].title)
        // console.log(dataArr[indx].overview)
        // console.log(dataArr[indx].vote_count)
        // console.log(dataArr[indx].vote_average)
        // console.log(dataArr[indx].poster_path)
        // console.log("=========================")
        let img_path ="https://image.tmdb.org/t/p/w1280"+dataArr[indx].poster_path;
        let overview = dataArr[indx].overview;
        let movie_title = dataArr[indx].title;
        let vote_count = dataArr[indx].vote_count;
        let movie_rate = dataArr[indx].vote_average;
        let stars='⭐⭐⭐⭐⭐';
        switch(movie_rate/2){
            case 1:
                stars=`⭐`;
                break;
            case 2:
                stars=`⭐⭐`;
                break;
            case 3:
                stars=`⭐⭐⭐`;
                break;
            case 4:
                stars=`⭐⭐⭐⭐`;
                break;
            case 5:
                stars=`⭐⭐⭐⭐⭐`;
                break;
        }
        content += `<div class="movie-card" >
        <img src="${img_path}" alt="${movie_title}">
        <div class="card-overlay">
        <h1>${movie_title}</h1></br>
        <p>Lang:en</p>
        <p>${stars}</p>
        <p>${overview}</p></br>
        <p>Vote: ${vote_count}  </p>        
        </div> <div class="card-overlay">
        </div>
        </div> `
    })



    main.innerHTML = content;
}
let flag =false;
document.getElementById('modalBtn').addEventListener('click',()=>{
   let modalForm = document.getElementById('modal-form');
   if(flag==false){
    modalForm.style.display='flex';
    modalForm.style.transform='translatey(0)'
    flag=true;
    document.getElementById('hm1').style.transform='rotate(135deg)';
    document.getElementById('hm2').style.display='none';
    document.getElementById('hm3').style.transform='rotate(-315deg)';
    document.getElementById('hm3').style.bottom='5px';
    
    }
    else{
        
        modalForm.style.transform='translatey(-100vh )'
        document.getElementById('hm1').style.transform='rotate(0)';
    document.getElementById('hm2').style.display='block';
    document.getElementById('hm3').style.transform='rotate(0)';
    document.getElementById('hm3').style.bottom='0';
        // modalForm.style.display='none';
   flag= false
    }

    
})