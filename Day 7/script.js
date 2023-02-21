// javascript source code
//here the cutomer is the object and id, name and age are the properties
var customer = {
    id: 101,
    name: "Ramu",
    age: 21
}

function assignCustomerData(){
    customer.id= document.getElementById("txtId").value * 1
    customer.name= document.getElementById("txtName").value 
    customer.age= document.getElementById("txtAge").value * 1
    console.log(customer)
}
function showCustomerData(){
    var disp = document.getElementById("display")
    disp.innerHTML = customer.id+ " " + customer.name+" " + customer.age
}
// var movie = {
//     name: "Interstellar",
//     duration: 2,
//     rating: 5
// }

function assignMovieData(){
    movie.name = document.getElementById("txtName").value 
    movie.duration = document.getElementById("txtDuration").value * 1 
    movie.rating = document.getElementById("txtRating").value * 1
    console.log(customer)
}
function showMovieData(){
    var disp = document.getElementById("display")
    disp.innerHTML = movie.name + "<br>" + movie.duration + "<br>" + movie.rating
}

// creating an array
function understandingArray(){
    var scores = [10, 30, 50, 70, 90, 100]
    console.log(scores)
    // scores.push(120)    //append
    scores.splice(2, 2)
    //iteration of array
    for (var i = 0; i < scores.length; i++){
        console.log(scores[i])
    }
}

// local variable has a higher scope than the gloabal ones
var names = ['ram']

function insert(){
    // var names = ['prabu']
    var name = document.getElementById("name").value
    names.push(name)
    console.log(names)
}
function show(){
    var disp = document.getElementById("display")
    disp.innerHTML = names
}

// Creating array of objects
var movie = {
    name: '',
    duration: 0,
    rating: 0,
    // data: "Movie name: " + this.name +"<br>" +
    //       "duration: " + this.duration + "<br>" +
    //       "Rating: " + this.rating 

}
var movies = []
function addMovieData(){
    m = Object.create(movie) 
    m.name = document.getElementById("txtName1").value 
    m.duration = document.getElementById("txtDuration1").value * 1 
    m.rating = document.getElementById("txtRating1").value * 1
    movies.push(m)
    // console.log(movies)
}
function showMovies(){
    for (var i = 0; i < movies.length; i++){
        var data = "Movie name: " + movies[i].name +"<br>" +
        "duration: " + movies[i].duration + "<br>" +
        "Rating: " + movies[i].rating 
        var disp = document.getElementById("display")
        disp.innerHTML = data
    }
    
}