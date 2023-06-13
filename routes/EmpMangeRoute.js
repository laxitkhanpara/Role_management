const express = require('express')
const app = express();
const router = express.Router();
const { Departments, Designations, Branchs, Users, Warnings, Terminations, Promotions } = require('../models/EmpMangeSchema');
const { Roles, Permissions, } = require('../models/AdminiSchema');
const multer = require('multer');
var { Country, State, City } = require("country-state-city");
const bcrypt = require('bcrypt');
const path = require('path')
const { checkUserAuth } = require("../middleware/authMiddleware");
const { log } = require('console');
const { JobPosts, TrainingTypes, EmployeeTrainings, Awards, Notices, Settings } = require('../models/OtherSchema');

const { TaxRuleSetups, Allowanaces, Deductions, BonusSettings, PerformanceCategorys, EmployeePerformances, PerformanceReports, HourlyPayGrades, MonthlyPayGrades } = require('../models/PayRollSchema');




//================image upload===============================

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



/*---------------------------------------------------------------------------------------------------------------------
    Department
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Department", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const department = await Departments.find();
            console.log(PermRole);
            res.render("Department", { department, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Department
    router.post("/newDepartment", checkUserAuth, async (req, res) => {
        try {
            const { Department } = req.body
            const newdepartment = new Departments({ Department })
            newdepartment.save();
            res.redirect("/Department")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Department
    router.post("/editDepartment/:id", checkUserAuth, async (req, res) => {
        try {
            await Departments.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Department")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Department
    router.get("/Departments/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await Departments.findByIdAndDelete(req.params.id);
            res.redirect("/Department");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Designation
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Designation", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();

            const Designation = await Designations.find();
            res.render("Designation", { Designation, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Designation
    router.post("/newDesignation", checkUserAuth, async (req, res) => {
        try {
            const { Designation } = req.body;
            const newDesignation = new Designations({ Designation })
            newDesignation.save();
            res.redirect("/Designation")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Designation
    router.post("/editDesignation/:id", checkUserAuth, async (req, res) => {
        try {
            await Designations.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Designation")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Designation
    router.get("/Designations/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await Designations.findByIdAndDelete(req.params.id);
            res.redirect("/Designation");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Branch
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Branch", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const Branch = await Branchs.find();
            res.render("Branch", { Branch, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Branch
    router.post("/newBranch", checkUserAuth, async (req, res) => {
        try {
            const { Branch } = req.body;
            const newBranch = new Branchs({ Branch })
            newBranch.save();
            res.redirect("/Branch")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Branch
    router.post("/editBranch/:id", checkUserAuth, async (req, res) => {
        try {
            await Branchs.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Branch")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Branch
    router.get("/Branchs/delete/:id", checkUserAuth, async (req, res) => {
        try {
            console.log(req.params.id)
            await Branchs.findByIdAndDelete(req.params.id);
            res.redirect("/Branch");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    User
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/User", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const User = await Users.find();
            const HourlyPayGrade = await HourlyPayGrades.find();
            const MonthlyPayGrade = await MonthlyPayGrades.find();
            const Grade = await HourlyPayGrades.aggregate([
                {
                    $project: {
                        _id: { "$toString": "$_id" },
                        Pay_Grad: "$HourlyPayGrade"
                    }
                },
                // { 
                //     $addFields: { "_id": { "$toString": "$_id" } }
                //   },
                {
                    $lookup: {
                        from: "users",
                        localField: "_id",
                        foreignField: "salary",
                        as: "abc"
                    }
                },
                { $unwind: "$abc" }
            ]);
            console.log("Grade", Grade);
            console.log(Grade[0].Pay_Grad);

            res.render("User", { User, PermRole, Setting, HourlyPayGrade, MonthlyPayGrade, Grade })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new User
    router.get("/AddUser", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            console.log(req.user.Role);
            const User = await Users.find();
            const countrys = Country.getAllCountries();
            const Branch = await Branchs.find();
            const Designation = await Designations.find();
            const Department = await Departments.find();
            const Role = await Roles.find();
            const HourlyPayGrade = await HourlyPayGrades.find();
            const MonthlyPayGrade = await MonthlyPayGrades.find();



            res.render("AddUser", { User, countrys, Branch, Designation, Department, Role, PermRole, Setting, HourlyPayGrade, MonthlyPayGrade })

        } catch (error) {
            console.log(error);
        }
    })

    router.post("/newUser", upload.single('image'), checkUserAuth, async (req, res) => {
        try {
            const { email, password, username, Mobilenum, Role, firstName, lastName, empId, bllodGroup, gendar, Status, salary, department, Designation, branch, dob, joinDate, leaveDate, Country, State, City, Street, zipCode } = req.body;
            console.log(Role);
            const image = req.file.filename
            //const image=req.body.image;
            const hash = await bcrypt.hash(password, 10);
            console.log(11111);
            const newUser = new Users({ image, email, password: hash, username, Mobilenum, Role, firstName, lastName, empId, bllodGroup, gendar, Status, salary, department, Designation, branch, dob, joinDate, leaveDate, Country, State, City, Street, zipCode })
            console.log(22222);
            await newUser.save();
            res.redirect("/User")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit User
    router.post("/editUser/:id", checkUserAuth, async (req, res) => {
        try {
            await Users.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/User")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete User
    router.get("/Users/delete/:id", checkUserAuth, async (req, res) => {
        try {
            console.log(req.params.id)
            await Users.findByIdAndDelete(req.params.id);
            res.redirect("/User");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Warning
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Warning", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();

            var Warning
            if (PermRole[0].Role == 1) {
                Warning = await Warnings.find();
                console.log(Warning);
            } else {
                Warning = await Warnings.find({ username: req.user.username });
                console.log(Warning);
            }
            const Role = await Roles.find();
            const User = await Users.find();
            res.render("Warning", { Warning, User, Role, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Warning
    router.post("/newWarning", checkUserAuth, async (req, res) => {
        try {
            const User = await Users.find();
            const { username, WarningType, Subject, WarningBy, WarningDate, Description } = req.body;
            const newWarning = new Warnings({ username, WarningType, Subject, WarningBy, WarningDate, Description })
            newWarning.save();
            res.redirect("/Warning")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Warning
    router.post("/editWarning/:id", checkUserAuth, async (req, res) => {
        try {
            await Warnings.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Warning")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Warning
    router.get("/Warnings/delete/:id", checkUserAuth, async (req, res) => {
        try {
            console.log(req.params.id)
            await Warnings.findByIdAndDelete(req.params.id);
            res.redirect("/Warning");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Termination
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Termination", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const Termination = await Terminations.find();
            const Role = await Roles.find();
            const User = await Users.find();
            res.render("Termination", { Termination, User, Role, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Termination
    router.post("/newTermination", checkUserAuth, async (req, res) => {
        try {
            const User = await Users.find();
            const { username, TerminationType, Subject, TerminationBy, TerminationDate, NoticeDate, Description } = req.body;
            const newTermination = new Terminations({ username, TerminationType, Subject, TerminationBy, TerminationDate, NoticeDate, Description })
            const UserOne = await Users.findOne({ username });
            console.log(UserOne);
            await Users.findByIdAndDelete(UserOne);
            newTermination.save();
            res.redirect("/Termination")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Termination
    router.post("/editTermination/:id", checkUserAuth, async (req, res) => {
        try {
            await Terminations.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Termination")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Termination
    router.get("/Terminations/delete/:id", checkUserAuth, async (req, res) => {
        try {
            console.log(req.params.id)
            await Terminations.findByIdAndDelete(req.params.id);
            res.redirect("/Termination");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Promotion
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Promotion", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const department = await Departments.find();
            const Designation = await Designations.find();
            const Branch = await Branchs.find();
            const Promotion = await Promotions.find();
            const Role = await Roles.find();
            const User = await Users.find();
            res.render("Promotion", { Promotion, User, Role, department, Designation, Branch, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Promotion
    router.post("/newPromotion", checkUserAuth, async (req, res) => {
        try {
            const User = await Users.find();
            const { username, PromotionDate, Department, Designation, Branch, Salary, PromotionDepartment, PromotionDesignation, PromotionBranch, PromotionSalary } = req.body;
            const newPromotion = new Promotions({ username, PromotionDate, Department, Designation, Branch, Salary, PromotionDepartment, PromotionDesignation, PromotionBranch, PromotionSalary })
            const UserOne = await Users.findOne({ username });
            console.log(UserOne);
            await Users.findByIdAndUpdate(UserOne, { salary: PromotionSalary, department: PromotionDepartment, Designation: PromotionDesignation, branch: PromotionBranch });
            newPromotion.save();
            res.redirect("/Promotion")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Promotion
    router.post("/editPromotion/:id", checkUserAuth, async (req, res) => {
        try {
            await Promotions.findByIdAndUpdate(req.params.id, req.body);
            const UserOne = await Users.findOne({ username });
            await Users.findByIdAndUpdate(UserOne, { salary: PromotionSalary, department: PromotionDepartment, Designation: PromotionDesignation, branch: PromotionBranch });
            res.redirect("/Promotion")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Promotion
    router.get("/Promotions/delete/:id", checkUserAuth, async (req, res) => {
        try {
            console.log(req.params.id)
            await Promotions.findByIdAndDelete(req.params.id);
            res.redirect("/Promotion");

        } catch (e) {
            console.log(e)
        }
    })

}

//==============state/ajax===================
router.get("/state/ajax/:id", checkUserAuth, async (req, res) => {
    try {
        const states = State.getStatesOfCountry(req.params.id)
        //console.log("states:",states);

        res.json({ states })
    } catch (error) {
        console.log(error);
    }
})
router.post("/like", checkUserAuth, async (req, res) => {
    try {
        const { vehicle1, vehicle2, vehicle3 } = req.body;
        console.log(req.body);

        const sellers = new lols({ vehicle1, vehicle2, vehicle3 });
        sellers.save();
    } catch (error) {
        console.log(error);
    }
})

//==============city/ajax===================

router.post("/city/ajax", checkUserAuth, async (req, res) => {
    try {
        // console.log(req.body);
        const { country, value } = req.body;
        const citys = City.getCitiesOfState(country, value);
        res.json({ citys });
        // res.render("/singUp",{citys})

    } catch (error) {
        console.log(error);
    }
})


//===========export router=============
module.exports = router;