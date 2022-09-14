const collegeModel = require('../model/collegeModel');
const internModel = require('../model/internModel');

const createintern = async function (req , res) {
    try {

        let data = req.body;
        
        let college = data.collegeName;
        let newintern = await collegeModel.findOne({name : college });
        let collegeid = newintern["_id"];

        let newcollege = {
            name : data.name,
            mobile : data.mobile,
            email : data.email,
            collegeId : collegeid,
            isDeleted: data.isDeleted
            
        }
        let saveData= await internModel.create(newcollege)
       
        return res.status(201).send({ status : true , msg : saveData });

    }catch (err) {
        return res.send({status : false , msg : err.message})
    }
}


module.exports.createintern =createintern