const express = require('express');
const router = express.Router();
const axios = require('axios');

router.route('/')
      .get((req, res) => {
        console.log("inside search.js");
             axios.get(`http://api.brewerydb.com/v2/beer/random?key=59c9a8a875690c5e4c5f8deb0a0fa316`)
              .then(results=>{
               console.log('results.data:', results.data)
               res.send(results.data);
              })

              .catch(err=>console.log(err))
      })


module.exports = router;