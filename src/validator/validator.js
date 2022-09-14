const mongoose = require("mongoose");

//--------------------------------email-------------------------------
const isValidEmail = (email) => {
    const regx = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/
    return regx.test(email)
};

//------------------------------mongoDbId-------------------------------
const isValidObjectId = (mongoDbId) => { 
    return mongoose.Types.ObjectId.isValid(mongoDbId)
};
//-------------------name--------------
const isValidName = (name) => {
    const regx = /^[a-z ,.'-]+$/i
    return regx.test(name)
};

//----------------text------------------
// const isValidText = (text) => {
//     const regx = /^[A-Za-z0-9_ ]{2,}$/
//     return regx.test(text)
// };

const isValidmobile= (data) => {
    const regx = /^((\+91)?|91)?[789][0-9]{9}$/
    return regx.test(data)
};


const isValidElem= (data) =>{
    if (data == undefined || data == null) return false
    if (typeof(data)==="string" && data.trim()=="" ) return false
    return true
}



module.exports = {  isValidEmail, isValidObjectId,isValidName,isValidElem ,isValidmobile }