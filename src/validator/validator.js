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
    const regx = /^[A-Za-z]{2,}$/
    return regx.test(name)
};

//----------------text------------------
// const isValidText = (text) => {
//     const regx = /^[A-Za-z0-9_ ]{2,}$/
//     return regx.test(text)
// };

module.exports = {  isValidEmail, isValidObjectId,isValidName }