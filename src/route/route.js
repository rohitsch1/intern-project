const express = require('express')
const route = express.Router()
const collegeController = require ("../controller/collegeController")
const internController =require("../controller/internController")

route.get('/test-me' ,function(req,res){
    res.send({msg : "working fine "})
})

// route.all("/**",  (req, res) => {
//     res.status(404).send({ status: false, msg: "The api you request is not available" })
// });

route.post('/functionup/colleges',collegeController.createCollege )
route.post('/functionup/interns',internController.createintern)
route.get('/functionup/collegeDetails',collegeController.getdata)


module.exports=route
