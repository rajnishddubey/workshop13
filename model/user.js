const mongoose = require("mongoose");

testSchema = mongoose.Schema({
    id : Number,
    name : String,
    email : String,
    phone : Number,
    role : String
})

module.exports = mongoose.model("test",testSchema);