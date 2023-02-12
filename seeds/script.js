require("../db")

const MovieModel = require("../models/Movie.model")
const movieArr = require("./movies.seed")

MovieModel.insertMany(movieArr)
.then((response)=>{


})
.catch((err)=>{
    console.log(err)
})

