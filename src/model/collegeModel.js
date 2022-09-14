const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    logoLink: {
      type: String,
      required: true
     
    },
    isDeleted: {
      type: String,
      required: true
      
     
    }
},{ timestamps: true });

module.exports = mongoose.model("college", collegeSchema);