const express = require('express')
const route = express.Router()
const collegeController = require ("../controller/collegeController")
const internController =require("../controller/internController")

route.get('/test-me' ,function(req,res){
    res.send({msg : "working fine "})
})



//intern creation API
route.post('/functionup/interns',internController.createintern)

//college Creation API
route.post('/functionup/colleges',collegeController.createCollege )

// get Data from College name in query
route.get('/functionup/collegeDetails',collegeController.getdata)


// edge-case for API
route.all("/**",  (req, res) => {
    res.status(400).send({ status: false, msg: "The api you request is not available" })
});

module.exports=route
