const collegeModel = require('../model/collegeModel');
const internModel = require('../model/internModel');
const validator = require ("../validator/validator");
const createintern = async function (req , res) {
    try {

        let data = req.body;
        
        let college = data.collegeName;
        let newintern = await collegeModel.findOne({name : college });

        if(!newintern) return res.status(400).send({status : false, "msg" : "No intern found with proper college name"});
        let collegeid = newintern["_id"];

        let newcollege = {
            name : data.name,
            mobile : data.mobile,
            email : data.email,
            collegeId : collegeid,
            isDeleted: data.isDeleted
            
        }
          if(!validator.isValidObjectId(newcollege.collegeId)) 
          return res.status(400).send({status : false, msg : "the college id is not valid"});




        let saveData= await internModel.create(newcollege)
       
        return res.status(201).send({ status : true , msg : saveData });

    }catch (err) {
        return res.send({status : false , msg : err.message})
    }
}


module.exports.createintern =createintern