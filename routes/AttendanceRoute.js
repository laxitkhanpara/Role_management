const express = require('express')
const app = express();
const router = express.Router();
const { checkUserAuth } = require("../middleware/authMiddleware")
const { Roles, Permissions } = require('../models/AdminiSchema');
const { workShifts } = require('../models/AttendanceSchema');
const {PresentTimes}= require("../models/DashboardSchema")
const { JobPosts,TrainingTypes,EmployeeTrainings,Awards,Notices,Settings } = require('../models/OtherSchema');



/*---------------------------------------------------------------------------------------------------------------------
    workShift
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/workShift", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const workShift = await workShifts.find();
            const Setting = await Settings.find();

            res.render("workShift", { workShift,PermRole,Setting})
        } catch (error) {
            console.log(error);
        }
    })

    //------------new workShift
    router.post("/newworkShift", checkUserAuth, async (req, res) => {
        try {
            const { workShift,StartTime,EndTime,LateCount } = req.body
            const newworkShift = new workShifts({  workShift,StartTime,EndTime,LateCount })
            newworkShift.save();
            res.redirect("/workShift")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit workShift
    router.post("/editworkShift/:id", checkUserAuth, async (req, res) => {
        try {
            await workShifts.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/workShift")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete workShift
    router.get("/workShifts/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await workShifts.findByIdAndDelete(req.params.id);
            res.redirect("/workShift");

        } catch (e) {
            console.log(e)
        }
    })

}


router.get("/MyAttendance", checkUserAuth, async (req, res) => {
    try {
        const PermRole = await Permissions.find({ Role: req.user.Role });
        const workShift = await workShifts.find();
        const Setting = await Settings.find();
        res.render("MyAttendance", { workShift,PermRole,Setting })
    } catch (error) {
        console.log(error);
    }
})

 //------------ajax of performence report
 router.post("/MyAttendance_filterreport/ajax", checkUserAuth, async (req, res) => {
    try {
        console.log("welcome");
        const { stdate, endate } = req.body;
        const Dates = await PresentTimes.find({
            Date: {
                $gte: stdate,
                $lte: endate
            }
        });
        res.json({ Dates })
        console.log(Dates);
    } catch (error) {
        console.log(error);
    }
})


//===========export router=============
module.exports = router;