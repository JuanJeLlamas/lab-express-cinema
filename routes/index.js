const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res)=>{    

    MovieModel.find()

    .then((response)=>{
    console.log(response)
    res.render("movies.hbs" , {
    
        eachMovie: response

    })

})

    .catch((error)=>{
    console.log(error)

    })

    
})

router.get("/movies/:moviesId", (req, res, next) => {
    //creamos el hbs y probamos renderizar
  
    const { moviesId } = req.params; 
  
   MovieModel.findById(moviesId)
      .then((response ) => {
        console.log(response);
  
        res.render("../views/moviesOne.hbs", {
          oneMovie: response,
        });
      })
      .catch((error) => {
        next(error);
      });
  });
module.exports = router;