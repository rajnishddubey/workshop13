const jwt = require("jsonwebtoken");

const token = (id)=>{
    return jwt.sign({id},'this is rajnish',{expiresIn :'1h'})
}

module.exports = token;