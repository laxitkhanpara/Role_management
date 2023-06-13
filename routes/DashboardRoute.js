const express = require('express')
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { Roles, Permissions } = require('../models/AdminiSchema');
const { checkUserAuth } = require("../middleware/authMiddleware")
const { Departments, Designations, Branchs, Users, Warnings, Terminations, Promotions } = require('../models/EmpMangeSchema');
const { PresentTimes } = require("../models/DashboardSchema")
const { JobPosts, TrainingTypes, EmployeeTrainings, Awards, Notices, Settings, DashbordImages, ApplyForJobs } = require('../models/OtherSchema');
const { PublicHolidays, WeeklyHolidays, ApplyLeaves, workShifts } = require('../models/LeaveSchema');
var ObjectId = require('mongodb').ObjectId;
const multer = require('multer');
const path = require('path')

//================Certificate upload===============================

//const upload =multer({dest:"uploads/"});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(111, file.originalname);
        cb(null, "./public/upload")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage });

router.get("/Dashboard", checkUserAuth, async (req, res) => {
    try {
        const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
        const ApplyForJob = await ApplyForJobs.find();
        const Employee = req.user.username
        const master = req.user
        console.log("master:::", master);
        const PresentTime = await PresentTimes.aggregate(
            [
                { $match: { Employee: Employee } },
                { $group: { _id: null, totalTime: { $first: "$PresentTime" } } }
            ]
        )
        const PresentTimess = await PresentTimes.aggregate(
            [
                { $match: { Employee: Employee } },
                { $project: { totalTime: "$PresentTime" } }
            ]
        )
        console.log("PresentTime", PresentTimess);

        //---------ClockIn & ClockOut-----------------------------------------------------------------
        let today = new Date().toJSON().slice(0, 10);
        let todaytomorrow = new Date();
        todaytomorrow.setDate(todaytomorrow.getDate() + 1)
        let tomorrow = (todaytomorrow.toJSON().slice(0, 10));
        let Todays_Total = await PresentTimes.find({ Date: { $gte: today, $lt: tomorrow } });
        let Todays_ClockIn = await PresentTimes.find({
            $and: [
                { endClockOut: "2000-01-01T00:00:00.000+00:00" },
                { Date: { $gte: today, $lt: tomorrow } }
            ]
        });
        let Todys_clockOut =  await PresentTimes.find({
            $and: [
                { endClockOut: {$ne:"2000-01-01T00:00:00.000+00:00"}},
                { Date: { $gte: today, $lt: tomorrow } }
            ]
        });
        
        console.log("Todays_ClockIn++++++++++++++++", Todays_ClockIn);
        console.log("Todys_clockOut++++++++++++++++", Todys_clockOut);
        //--------------------------------------------------------------------------------------------------

        //===========convert string to number and get sum
        const hour = []
        const minite = []
        for (let i = 0; i < PresentTimess.length; i++) {
            let time = PresentTimess[i].totalTime.split(":");
            hour.push(Number(time[0]));
            minite.push(Number(time[1]));
        }
        const hr = hour.reduce((partialSum, a) => partialSum + a, 0)
        min = minite.reduce((partialSum, a) => partialSum + a, 0)
        hours = hr + min / 60
        minites = min % 60;
        console.log(hours);
        console.log(minites);
        //number of pending leaves
        const ApplyLeave = await ApplyLeaves.find();
        //notice
        const Notice = await Notices.find()
        const User = await Users.count();
        const Department = await Departments.count()
        const Designation = await Designations.count()
        const Branch = await Branchs.count()
        console.log(PermRole);
        res.render("Dashboard", { PermRole, Setting, User, Department, PresentTime, Designation, Branch, master, ApplyForJob, ApplyLeave, Notice,Todays_ClockIn,Todys_clockOut,Todays_Total })

    } catch (error) {
        console.log(error);
    }
})

router.post("/Dashboardattendance/ajax", checkUserAuth, async (req, res) => {
    try {
        console.log("welcome");
        const { stdt, todt } = req.body;
        const user = req.user.username
        console.log(user, stdt, todt);
        const userinfo = await PresentTimes.find({ Employee: user })
        console.log(userinfo);
        //=======number of days==============
        const date1 = new Date(stdt);
        const date2 = new Date(todt);
        console.log(date1, date2);
        const timeDiff = Math.abs(date2 - date1);
        const NOD = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        console.log(NOD);
        //===================================
        const Salary = await PresentTimes.find({
            $and: [
                { Employee: user },
                {
                    Date: {
                        $gte: date1,
                        $lte: date2
                    }
                }
            ]
            // Employee: user,
            // Date: {
            //     $gte: date1,
            //     $lte: date2
            // },

        });
        console.log("Salary", Salary);
        //===========convert string to number and get sum
        const hour = []
        const minite = []
        for (let i = 0; i < Salary.length; i++) {
            let time = Salary[i].PresentTime.split(":");
            hour.push(Number(time[0]));
            minite.push(Number(time[1]));
        }
        const hr = hour.reduce((partialSum, a) => partialSum + a, 0)
        min = minite.reduce((partialSum, a) => partialSum + a, 0)
        hours = Math.trunc(hr + min / 60)
        minites = min % 60;
        console.log(hours);
        console.log(minites);




        res.json({ userinfo, NOD, minites, hours, Salary })
        // console.log(Dates);
    } catch (error) {
        console.log(error);
    }
})

router.post("/Time", checkUserAuth, async (req, res) => {
    try {
        console.log("****************************************************************************************************************************");
        console.log("time", req.body);
        const Employee = req.user.username
        //--Get today and tomorrow date
        let today = new Date().toJSON().slice(0, 10);
        let todaytomorrow = new Date();
        todaytomorrow.setDate(todaytomorrow.getDate() + 1)
        let tomorrow = (todaytomorrow.toJSON().slice(0, 10));
        const PresentTimee = await PresentTimes.find({
            $and: [
                { Employee: Employee },
                { Date: { $gte: today, $lt: tomorrow } }
            ]
        });
        console.log(PresentTimee[0] == null)
        console.log("PresentTime:", PresentTimee);
        if (PresentTimee[0] == null) {
            console.log("new==================================");
            const { PresentTime, BreakTime, startclockin, endClockOut } = req.body
            const newPresentTimes = new PresentTimes({ PresentTime, BreakTime, Employee, startclockin, endClockOut })
            newPresentTimes.save();
            // res.render("Dashboard", { PermRole, Setting, User, Department, PresentTime,Designation, Branch, master, ApplyForJob, ApplyLeave,Notice })
        } else {
            console.log("update===============================");
            console.log(await PresentTimes.findByIdAndUpdate(PresentTimee[0].id, req.body))
            res.redirect("/Dashboard")
        }
    } catch (error) {
        console.log(error);
    }
})

router.get("/", async (req, res) => {
    try {
        // const PermRole = await Permissions.find({ Role: req.user.Role });

        const Setting = await Settings.find();
        const TrainingType = await TrainingTypes.find();
        const JobPost = await JobPosts.find();
        const department = await Departments.find();
        const Designation = await Designations.find();
        const Branch = await Branchs.find();
        const User = await Users.find();
        const DashbordImage = await DashbordImages.find()


        res.render("LandingPage", { Setting, User, TrainingType, JobPost, department, Designation, Branch, DashbordImage })

    } catch (error) {
        console.log(error);
    }
})



router.get("/ApplyForJob/:id", async (req, res) => {
    try {
        // const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
        const TrainingType = await TrainingTypes.find();
        const JobPost = await JobPosts.find(new ObjectId(req.params.id));
        res.render("ApplyForJob", { Setting, TrainingType, JobPost })

    } catch (error) {
        console.log(error);
    }
})

router.post("/ApplyForJob", checkUserAuth, upload.single('resume'), async (req, res) => {
    try {
        const { name, email, mobile, coverLetter, Job_Title } = req.body
        const resume = req.file.filename
        console.log(resume);
        (new ApplyForJobs({ name, email, mobile, coverLetter, Job_Title, resume })).save()

        res.redirect("/JobPost")
    } catch (error) {
        console.log(error);
    }
})

//---------Delete ApplyForJobs
router.get("/ApplyForJob/delete/:id", checkUserAuth, async (req, res) => {
    try {
        const ApplyForJob = await ApplyForJobs.find();
        fs.unlink("/project/public/upload/" + ApplyForJob[0].resume, (err) => {
            if (err) {
                console.error(err, "file not found")
                return
            }
        })
        await ApplyForJobs.findByIdAndDelete(req.params.id);
        res.redirect("/JobPost");

    } catch (e) {
        console.log(e)
    }
})
//===========export router=============
module.exports = router;