const baseURL = 'https://www.omdbapi.com/?apikey=a0428257&';
let arrayTitle;

//! button variables
const actionSub = document.querySelector('.actionButton');
const aniSub = document.querySelector('.aniButton');
const dramaSub = document.querySelector('.dramaButton');
const horrorSub = document.querySelector('.horrorButton');
const comedySub = document.querySelector('.comedyButton');
const mystSub = document.querySelector('.mysteryButton');
const ultSub = document.querySelector('.ultButton');

//!Display Variables
const movieTitle = document.querySelector('.title');
const runTime = document.querySelector('.runtime');
const rating = document.querySelector('.rating');
const plot = document.querySelector('.plot');
const poster = document.querySelector('.moviePoster');
const resultsDisplay = document.querySelector('.resultsDisplay');

//! declaring movie strings
let rdmActMov = ['tt2802144', 'tt1392190','tt0167190','tt1706620','tt1972591', 'tt7713068', 'tt3890160', 'tt3501632', 'tt0478970', 'tt1074638'];
let rdmAniMov = ['tt0094625', 'tt5311514', 'tt4633694', 'tt0347149', 'tt0317705', 'tt0138749', 'tt0119698', 'tt4272866', 'tt0245429','tt6336356'];
let rdmDraMov = ['tt2503944', 'tt1392214', 'tt0068646', 'tt0457430', 'tt1045658', 'tt1659337', 'tt3169706', 'tt2066051', 'tt7242142', 'tt3967856'];
let rdmHorMov = ['tt0092991', 'tt7784604', 'tt10126434', 'tt1396484', 'tt0078748', 'tt7798634', 'tt4262980', 'tt6857112', 'tt5052448','tt1457767'];
let rdmComMov = ['tt3960412', 'tt0838283', 'tt1245492', 'tt3401882', 'tt1131729', 'tt0395251', 'tt0332379', 'tt0115685', 'tt2452386', 'tt3416742'];
let rdmMystMov =['tt6751668', 'tt0470752', 'tt1650062', 'tt3654796', 'tt2428170', 'tt0084787', 'tt5700182', 'tt2267998', 'tt0102926', 'tt1179933'];


//! Button actions
actionSub.addEventListener('click', () => {
arrayTitle = rdmActMov; 
fetchMovie()
});

aniSub.addEventListener('click', () => {
arrayTitle = rdmAniMov; 
fetchMovie()
});

dramaSub.addEventListener('click', () => {
arrayTitle = rdmDraMov; 
fetchMovie()
});

horrorSub.addEventListener('click', () => {
arrayTitle = rdmHorMov; 
fetchMovie()
});

comedySub.addEventListener('click', () => {
arrayTitle = rdmComMov; 
fetchMovie();
});

mystSub.addEventListener('click', () => {
arrayTitle = rdmMystMov; 
fetchMovie();
});
ultSub.addEventListener('click', fetchUlt);
 
//! hide results
resultsDisplay.style.display = 'none';

//! Fetch Function 
function fetchMovie(){

let randomMovie = arrayTitle[Math.floor(Math.random()* arrayTitle.length)]

fetch(`${baseURL}i=${randomMovie}`)
.then((results) =>{
    return results.json();
})
.then((json) =>{
    console.log(json);
    movTitle = json.Title;
    movTime = json.Runtime;
    movRate = json.Rated;
    movPLot = json.Plot;
    movPost = json.Poster;
    console.log(movTitle)
    console.log(movTime);
    console.log(movRate);
    console.log(movPLot);
    console.log(movPost);
    displayMovieInfo();
})
}

function fetchUlt(){
    fetch(`${baseURL}i=tt0117705`)
.then((results) =>{
    return results.json();
})
.then((json) =>{
    console.log(json);
    movTitle = json.Title;
    movTime = json.Runtime;
    movRate = json.Rated;
    movPLot = json.Plot;
    movPost = json.Poster;
    displayMovieInfo();
})
}

//! Displaying Information
function displayMovieInfo(){
    resultsDisplay.style.display = 'block';
    poster.src = movPost;
    movieTitle.innerText = movTitle;
    runTime.innerText = movTime;   
    rating.innerText = movRate;
    plot.innerText = movPLot;
}