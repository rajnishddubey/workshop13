require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require("body-parser");
const Userroute = require("./route/user");
const cron = require("node-cron");

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected",connected=>{
    console.log("Database se sampark kar liya gya hai")

})
mongoose.connection.on("error",err=>{
    console.log("kast ke liye khed hai")
})

cron.schedule("* * * * *", () => {
    console.log("logs every minute")
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());



app.use("/user",Userroute);

app.listen(4000,()=>{
    console.log("4000 port pe apko suna ja raha hai")
})