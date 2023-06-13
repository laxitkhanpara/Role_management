require('dotenv').config();
port=process.env.PORT || 35000
const express =require("express");
const app=express();
const mongoose = require('mongoose');
const path = require('path')
var bodyParser = require('body-parser');
const ejs = require('ejs');
var cookieParser = require('cookie-parser')



//=========================ejs=========================
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

//============================================================
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")));

//=================connection to the db===============
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("congo! connection is done!!!")
}).catch((error)=>{
    console.log("not connected",error);
});





const Dashboard= require("./routes/DashboardRoute");
app.use("/",Dashboard);

const empManage= require("./routes/EmpMangeRoute");
app.use("/",empManage);

const AdminiRoute= require("./routes/AdminiRoute");
app.use("/",AdminiRoute);

const LeaveRoute= require("./routes/LeaveRoute");
app.use("/",LeaveRoute);

const AttendanceRoute= require("./routes/AttendanceRoute");
app.use("/",AttendanceRoute);

const PayRollRoute= require("./routes/PayRollRoute");
app.use("/",PayRollRoute);

const OtherRoute= require("./routes/OtherRoute");
app.use("/",OtherRoute);





//==================server=========================
app.listen(port,()=>{
    try{
        console.log(`connection is working on '${port}'`)
    } catch(error){
        console.log(error);
    }
})