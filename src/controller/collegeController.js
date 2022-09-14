const internModel= require ('../model/internModel')
const collegeModel=require ('../model/collegeModel')



const getdata = async function (req , res) {
    try {

        let requestQuery = req.query
        let collegedata = await collegeModel.findOne({name :requestQuery})
        if(!collegedata)  return res.status(400).send({status : false , msg : "No college present with this College name"})
        let collegeDataId = collegedata._id
        let interns= await internModel.find({collegeId : collegeDataId}).select({name :1 ,email :1 ,mobile : 1 ,_id : 1})
        if(interns.length ==0 ) return res.status(400).send({status : false , msg : "No intern present in this college"})

        let document  = {
            name : collegedata.name,
            fullName : collegedata.fullName,
            logoLink : collegedata.logoLink,
            intern : interns
        }

        return res.status(200).send({ status : true ,data : document })

    }catch (err) {
        return res.status(500).send({status : false , msg : err.message})
    }
}


module.exports={
    getdata
}