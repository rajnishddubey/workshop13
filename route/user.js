const router = require("express").Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const GToken = require("../utils/token")
const Test = require("../model/user");
const bodyparser = require("body-parser");
const req = require("express/lib/request");
const res = require("express/lib/response");
const chekAuth = require("../middleware/check-auth");
const { roles} = require("../middleware/rolecheck")
//const encoder = bodyparser.json();
//router.use(bodyparser.urlencoded({extended:true}));
//router.use(bodyparser.json())


router.post("/",async (req, res) => {
    
  
    const user = await Test.create({
      id:req.body.id,    
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      role:req.body.role
    });
    if (user) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: GToken(user.id)
      });
    } else {
      res.status(400);
      throw new Error("Error Occured");
    }
  });
  
 router.get("/",chekAuth,(req,res,next)=>{
    Test.find()
    .exec()
    .then(result=>{
        res.status(200).json({
            all_user:result
        })
    })
 })

 router.get("/admin", roles(["admin"]) , (req,res)=>{
    Test.find()
    .exec()
    .then(result=>{
        res.status(200).json({
            all_user:result
        })
    })
 })

module.exports = router;
