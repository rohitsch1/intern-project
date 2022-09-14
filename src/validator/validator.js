const mongoose = require("mongoose");

//--------------------------------email-------------------------------
const isValidEmail = (email) => {
    const regx = /^([a-z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/
    return regx.test(email)
};

//-------------------name--------------
const isValidName = (name) => {
    const regx = /^[a-z ,.'-]+$/i
    return regx.test(name)
};

const isValidmobile= (data) => {
    const regx = /^((\+91)?|91)?[789][0-9]{9}$/
    return regx.test(data)
};


const isValidElem= (data) =>{
    if (data == undefined || data == null) return false
    if (typeof(data)==="string" && data.trim()=="" ) return false
    return true
}



module.exports = {  isValidEmail,isValidName,isValidElem ,isValidmobile }