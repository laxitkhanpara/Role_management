const express = require('express')
const app = express();
const router = express.Router();
const { checkUserAuth } = require("../middleware/authMiddleware")
const { Roles, Permissions } = require('../models/AdminiSchema');
const { PublicHolidays, WeeklyHolidays, ApplyLeaves,workShifts } = require('../models/LeaveSchema');
const { Departments, Designations, Branchs, Users, Warnings, Terminations, Promotions } = require('../models/EmpMangeSchema');
const { Settings } = require('../models/OtherSchema');

/*---------------------------------------------------------------------------------------------------------------------
    PublicHoliday
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/PublicHoliday", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
            const PublicHoliday = await PublicHolidays.find();
            res.render("PublicHoliday", { PublicHoliday,PermRole,Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new PublicHoliday
    router.post("/newPublicHoliday", checkUserAuth, async (req, res) => {
        try {

            const { PublicHoliday, Status } = req.body
            const newPublicHoliday = new PublicHolidays({ PublicHoliday, Status })
            newPublicHoliday.save();
            res.redirect("/PublicHoliday")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit PublicHoliday
    router.post("/editPublicHoliday/:id", checkUserAuth, async (req, res) => {
        try {
            await PublicHolidays.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/PublicHoliday")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete PublicHoliday
    router.get("/PublicHolidays/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await PublicHolidays.findByIdAndDelete(req.params.id);
            res.redirect("/PublicHoliday", { infouser });

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    WeeklyHoliday
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/WeeklyHoliday", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
            const WeeklyHoliday = await WeeklyHolidays.find();
            res.render("WeeklyHoliday", { WeeklyHoliday,PermRole,Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new WeeklyHoliday
    router.post("/newWeeklyHoliday", checkUserAuth, async (req, res) => {
        try {

            const { WeeklyHoliday, Status } = req.body
            const newWeeklyHoliday = new WeeklyHolidays({ WeeklyHoliday, Status })
            newWeeklyHoliday.save();
            res.redirect("/WeeklyHoliday")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit WeeklyHoliday
    router.post("/editWeeklyHoliday/:id", checkUserAuth, async (req, res) => {
        try {
            await WeeklyHolidays.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/WeeklyHoliday")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete WeeklyHoliday
    router.get("/WeeklyHolidays/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await WeeklyHolidays.findByIdAndDelete(req.params.id);
            res.redirect("/WeeklyHoliday", { infouser });

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    ApplyLeave
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/ApplyLeave", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
            const ApplyLeave = await ApplyLeaves.find();
            res.render("ApplyLeave", { ApplyLeave,PermRole,Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new ApplyLeave
    router.post("/newApplyLeave", checkUserAuth, async (req, res) => {
        try {
            const empId = req.user.empId
            const username = req.user.username
            const { Reason, FromDate, ToDate, Status } = req.body
            const newApplyLeave = new ApplyLeaves({ username, empId, Reason, FromDate, ToDate, Status })
            newApplyLeave.save();
            res.redirect("/ApplyLeave")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit ApplyLeave
    router.post("/editApplyLeave/:id", checkUserAuth, async (req, res) => {
        try {
            await ApplyLeaves.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/ApplyLeave")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete ApplyLeave
    router.get("/ApplyLeaves/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await ApplyLeaves.findByIdAndDelete(req.params.id);
            res.redirect("/ApplyLeave");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    ManageLeave
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/ManageLeave", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
            const ManageLeave = await ApplyLeaves.find();
            const User = await Users.find();
            res.render("ManageLeave", { ManageLeave, PermRole,Setting,User })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new ManageLeave
    router.post("/newManageLeave", checkUserAuth, async (req, res) => {
        try {

            const { username,empId,Reason, FromDate, ToDate, Status } = req.body
            const newManageLeave = new ManageLeaves({ username,empId,Reason, FromDate, ToDate, Status })
            ApplyLeaves.save();
            res.redirect("/ManageLeave")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit ManageLeave
    router.post("/editManageLeave/:id", checkUserAuth, async (req, res) => {
        try {
            console.log(req.params.id);
            await ApplyLeaves.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/ManageLeave")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete ManageLeave
    router.get("/ManageLeaves/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await ManageLeaves.findByIdAndDelete(req.params.id);
            res.redirect("/ManageLeave", { infouser });

        } catch (e) {
            console.log(e)
        }
    })

}


//===========export router=============
module.exports = router;