const express = require('express')
const app = express();
const router = express.Router();
const { Roles, Permissions } = require('../models/AdminiSchema');
const { Departments, Designations, Branchs, Users, Warnings, Terminations, Promotions } = require('../models/EmpMangeSchema');
const { JobPosts,TrainingTypes,EmployeeTrainings,Awards,Notices,Settings } = require('../models/OtherSchema');

const { checkUserAuth } = require("../middleware/authMiddleware")
const { genrateTocken } = require('../middleware/jwtToken');
const bcrypt = require('bcrypt');




/*------------------------------------------------------------------------------------------------------------------------
    logIn
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/singIn", async (req, res) => {
        try {
            let yup = 1
            const token = req.cookies.singIn;
            console.log("token:----", token)
            const Setting = await Settings.find();

            res.render("singIn",{Setting});
        } catch (error) {
            console.log(error);
        }
    })
    router.post("/singIn", async (req, res) => {
        try {
            const { email, password } = req.body;
            const findUser = await Users.findOne({ email });
            if (!findUser) {
                res.json({
                    msg: "please registor"
                })
            } else {
                const hash = await bcrypt.compare(password, findUser.password);
                console.log(hash);
                if (hash === true) {
                    //genrate the tocken and store in cookie
                    const token = genrateTocken(findUser.id);
                    res.cookie('singIn', token, process.env.JWT_SECRET, {
                        expires: new Date(Date.now() + 50000),
                        httpOnly: true,
                    })
                    res.redirect("/Dashboard")
                } else {
                    res.json({
                        msg: "email or password may be wrong",
                    })
                }
            }
            console.log(123);

            // res.render("Role", { Role })
        } catch (error) {
            console.log(error);
        }
    })
    //=========logOut=====================
    router.get('/logOut', async (req, res) => {
        try {
            res.clearCookie("singIn");
            console.log("logout successfully");
            await req.user.save();
            res.rendar("singIn")
        } catch (error) {
            res.status(500).send(error)
        }
    })
}



/*---------------------------------------------------------------------------------------------------------------------
    Role
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Role", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
            const Role = await Roles.find();
            res.render("Role", { Role,PermRole,Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Role
    router.post("/newRole", async (req, res) => {
        try {

            const { Role, Role_Name } = req.body;
            const newRole = new Roles({ Role, Role_Name })
            newRole.save();
            res.redirect("/Role")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Role
    router.post("/editRole/:id", async (req, res) => {
        try {
            await Roles.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Role")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Role
    router.get("/Roles/delete/:id", async (req, res) => {
        try {
            console.log(req.params.id)
            await Roles.findByIdAndDelete(req.params.id);
            res.redirect("/Role");

        } catch (e) {
            console.log(e)
        }
    })

}


/*---------------------------------------------------------------------------------------------------------------------
    Permission
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Permission", checkUserAuth, async (req, res) => {
        try {
            const Role = await Roles.find();
            const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
            const Permission = await Permissions.find();
            res.render("Permission", { Permission, Role,PermRole,Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    router.post("/Permission/ajax", checkUserAuth, async (req, res) => {
        try {
            const { Role } = req.body;
            console.log("*******************",req.body);
            console.log("########################",Role);
            const PermRole = await Permissions.find({ Role });
            console.log(PermRole);
            console.log(PermRole[0].Payroll);
            res.json({ PermRole })
        } catch (error) {
            console.log(error);
        }
    })
    //------------new Permission
    router.post("/newPermission", async (req, res) => {
        try {
            console.log(678,req.body);
            const { Role, Add_role, Add_Role_Permission, Change_Password, Department, Designation, Branch, Manage_Employee, Warning, Termination, Promotion,ManageHoliday,PublicHoliday,WeeklyHoliday,ApplyforLeave,ManageLeave,SummaryReport,MyLeaveReport,ManageWorkShift,MyAttendanceReport,ManualAttendance,LeaveSummaryReport,DashboardAttendance,TaxRuleSetup,Allowance,Deduction,HourlyPayGrade,GenerateSalarySheet,PaymentHistory,MyPayroll,ApproveWorkHour,BonusSetting,GenerateBonus,PerformanceCategory,EmployeePerformance,PerformanceSummaryReport,JobPost,JobCandidate,TrainingType,TrainingReport,Award,GeneralSetting } = req.body;
            const role = await Permissions.find({ Role })
            console.log(12344, role);
            // console.log(!role);
            if (role=="") {
                console.log("new");
                const newPermission = new Permissions({ Role, Administration: [{ Add_role: Add_role, Add_Role_Permission: Add_Role_Permission, Change_Password: Change_Password }], Employee_Management: [{ Department, Designation, Branch, Manage_Employee, Warning, Termination, Promotion }],Leave_Management:[{ManageHoliday,PublicHoliday,WeeklyHoliday,ApplyforLeave,ManageLeave,SummaryReport,MyLeaveReport}],Attendance:[{ManageWorkShift,MyAttendanceReport,ManualAttendance,LeaveSummaryReport,DashboardAttendance}],Payroll:[{TaxRuleSetup,Allowance,Deduction,HourlyPayGrade,GenerateSalarySheet,PaymentHistory,MyPayroll,ApproveWorkHour,BonusSetting,GenerateBonus}],Performance:[{PerformanceCategory,EmployeePerformance,PerformanceSummaryReport}],Recruitment:[{JobPost,JobCandidate}],Training:[{TrainingType,TrainingReport}] ,Award:[{Award}],Settings:[{GeneralSetting}]})
                newPermission.save();
            } else {
                console.log("update");
                console.log(role[0]);
                await Permissions.findByIdAndUpdate(role[0],{Administration: [{ Add_role: Add_role, Add_Role_Permission: Add_Role_Permission, Change_Password: Change_Password }], Employee_Management: [{ Department, Designation, Branch, Manage_Employee, Warning, Termination, Promotion }],Leave_Management:[{ManageHoliday,PublicHoliday,WeeklyHoliday,ApplyforLeave,ManageLeave,SummaryReport,MyLeaveReport}],Attendance:[{ManageWorkShift,MyAttendanceReport,ManualAttendance,LeaveSummaryReport,DashboardAttendance}],Payroll:[{TaxRuleSetup,Allowance,Deduction,HourlyPayGrade,GenerateSalarySheet,PaymentHistory,MyPayroll,ApproveWorkHour,BonusSetting,GenerateBonus}],Performance:[{PerformanceCategory,EmployeePerformance,PerformanceSummaryReport}],Recruitment:[{JobPost,JobCandidate}],Training:[{TrainingType,TrainingReport}] ,Award:[{Award}],Settings:[{GeneralSetting}]})
            }

            res.redirect("/Permission")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Permission
    router.post("/editPermission/:id", async (req, res) => {
        try {
            await Permissions.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Permission")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Permission
    router.get("/Permissions/delete/:id", async (req, res) => {
        try {
            console.log(req.params.id)
            await Permissions.findByIdAndDelete(req.params.id);
            res.redirect("/Permission");

        } catch (e) {
            console.log(e)
        }
    })

}


//===========export router=============
module.exports = router;