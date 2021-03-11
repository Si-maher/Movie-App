const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3429c80904fb47c63b942133e4b8d98e&page=1'
const IMG_PATH ='https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/serch/movie? api_key=3429c80904fb47c63b942133e4b8d98e&query' 

getMovies(API_URL)

async function getMovies(url){
    const respond = await fetch(url)
    const data = await respond.json()
    console.log(data.results);
}
