const collegeModel = require('../model/collegeModel');
const internModel = require('../model/internModel');
const validator = require ("../validator/validator");
const createintern = async function (req , res) {
    try {

        let data = req.body;
        let {name , mobile , email , isDeleted}=data
        
        let college = data.collegeName;
        let newintern = await collegeModel.findOne({name : college });

        if (!validator.isValidElem(name)) return res.status(400).send({status : false , msg : "name is require "})
        if (!validator.isValidName(name)) return res.status(400).send({status : false , msg : "name should be in alphabets"})

        if (!validator.isValidElem(mobile)) return res.status(400).send({status : false , msg : "mobile number is require "})
        if (!validator.isValidmobile(mobile)) return res.status(400).send({status : false , msg : "mobile number must be 10 digits"})
        let findmobile= await internModel.findOne ({mobile : mobile})
        if (findmobile) return res.status(400).send({status : false , msg : "mobile number is already present"})

        if (!validator.isValidElem(email)) return res.status(400).send({status : false , msg : "email is require "})
        if (!validator.isValidEmail(email)) return res.status(400).send({status : false , msg : "email must in correct formate"})
        let findemail= await internModel.findOne ({email : email})
        if (findemail) return res.status(400).send({status : false , msg : "email is already present"})

        if(!newintern) return res.status(400).send({status : false, "msg" : "No intern found with proper college name"});
        let collegeid = newintern["_id"];
        if(!validator.isValidObjectId(collegeid)) 
          return res.status(400).send({status : false, msg : "the college id is not valid"});

        let newcollege = {
            name : name.trim(),
            mobile : mobile.trim(),
            email : email.toLowerCase(),
            collegeId : collegeid,
            isDeleted: isDeleted ? isDeleted : false
            
        }
         



        let saveData= await internModel.create(newcollege)
       
        return res.status(201).send({ status : true , msg : saveData });

    }catch (err) {
        return res.send({status : false , msg : err.message})
    }
}


module.exports.createintern =createintern