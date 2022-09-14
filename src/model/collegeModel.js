const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    fullname: {
      type: String,
      required: true
    },
    logolink: {
      type: String,
      required: true
     
    },
    isdeleted: {
      type: String,
      required: true
     
    }
},{ timestamps: true });

module.exports = mongoose.model("college", collegeSchema);