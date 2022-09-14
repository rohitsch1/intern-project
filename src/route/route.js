const express = require('express')
const route = express.Router()


route.get('/test-me' ,function(req,res){
    res.send({msg : "working fine "})
})


module.exports=route