const express = require('express')
const app = express();
const router = express.Router();
const { checkUserAuth } = require("../middleware/authMiddleware")
const { Roles, Permissions } = require('../models/AdminiSchema');
const { TaxRuleSetups, Allowanaces, Deductions, BonusSettings, PerformanceCategorys, EmployeePerformances, PerformanceReports, HourlyPayGrades, MonthlyPayGrades, SalarySlips } = require('../models/PayRollSchema');
const { Departments, Designations, Branchs, Users, Warnings, Terminations, Promotions } = require('../models/EmpMangeSchema');
const { PresentTimes } = require("../models/DashboardSchema")
const { Settings } = require('../models/OtherSchema');


/*---------------------------------------------------------------------------------------------------------------------
    TaxRuleSetups
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/TaxRuleSetup", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const TaxRuleSetup = await TaxRuleSetups.find();
            res.render("TaxRuleSetup", { PermRole, Setting, TaxRuleSetup })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new TaxRuleSetup
    router.post("/newTaxRuleSetup", checkUserAuth, async (req, res) => {
        try {
            const { Total_Income, Tax_Rate, Taxable_Amount } = req.body
            console.log(req.body);
            const newTaxRuleSetups = new TaxRuleSetups({ Total_Income, Tax_Rate, Taxable_Amount })
            newTaxRuleSetups.save();
            res.redirect("/TaxRuleSetup")
        } catch (error) {
            console.log(error);
        }
    })

    // -----------Update TaxRuleSetup
    router.post("/UpdateTaxRuleSetup/:id", checkUserAuth, async (req, res) => {
        try {
            await TaxRuleSetups.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/TaxRuleSetup")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete TaxRuleSetup
    router.get("/TaxRuleSetup/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await TaxRuleSetups.findByIdAndDelete(req.params.id);
            res.redirect("/TaxRuleSetup");

        } catch (e) {
            console.log(e)
        }
    })

}
/*---------------------------------------------------------------------------------------------------------------------
    Allowanace
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Allowanace", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const Allowanace = await Allowanaces.find();
            res.render("Allowanace", { Allowanace, PermRole, Setting })
        } catch (error) {
            console.log(error);
        }
    })


    //------------new Allowanace
    router.post("/newAllowanace", checkUserAuth, async (req, res) => {
        try {
            const { AllowanaceName, AllowanaceType, profbasic, limite } = req.body
            const newAllowanace = new Allowanaces({ AllowanaceName, AllowanaceType, profbasic, limite })
            newAllowanace.save();
            res.redirect("/Allowanace")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Allowanace
    router.post("/editAllowanace/:id", checkUserAuth, async (req, res) => {
        try {
            await Allowanaces.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Allowanace")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Allowanace
    router.get("/Allowanaces/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await Allowanaces.findByIdAndDelete(req.params.id);
            res.redirect("/Allowanace");

        } catch (e) {
            console.log(e)
        }
    })

}
/*---------------------------------------------------------------------------------------------------------------------
    HourlyPayGrade
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/HourlyPayGrade", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const department = await HourlyPayGrades.find();
            res.render("HourlyPayGrade", { department, PermRole,Setting })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new HourlyPayGrade
    router.post("/newHourlyPayGrade", checkUserAuth, async (req, res) => {
        try {
            const { HourlyPayGrade, HourlyRate } = req.body
            const newdepartment = new HourlyPayGrades({ HourlyPayGrade, HourlyRate })
            newdepartment.save();
            res.redirect("/HourlyPayGrade")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit HourlyPayGrade
    router.post("/editHourlyPayGrade/:id", checkUserAuth, async (req, res) => {
        try {
            await HourlyPayGrades.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/HourlyPayGrade")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete HourlyPayGrade
    router.get("/HourlyPayGrades/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await HourlyPayGrades.findByIdAndDelete(req.params.id);
            res.redirect("/HourlyPayGrade");

        } catch (e) {
            console.log(e)
        }
    })

}
/*---------------------------------------------------------------------------------------------------------------------
    MonthlyPayGrade
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/MonthlyPayGrade", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const monthlypaygrade = await MonthlyPayGrades.find();
            res.render("MonthlyPayGrade", { monthlypaygrade, PermRole, Setting })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new MonthlyPayGrade
    router.post("/newMonthlyPayGrade", checkUserAuth, async (req, res) => {
        try {
            const { MonthlyPayGrade, MonthlyRate } = req.body
            const newdepartment = new MonthlyPayGrades({ MonthlyPayGrade, MonthlyRate })
            newdepartment.save();
            res.redirect("/MonthlyPayGrade")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit MonthlyPayGrade
    router.post("/editMonthlyPayGrade/:id", checkUserAuth, async (req, res) => {
        try {
            await MonthlyPayGrades.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/MonthlyPayGrade")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete MonthlyPayGrade
    router.get("/MonthlyPayGrades/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await MonthlyPayGrades.findByIdAndDelete(req.params.id);
            res.redirect("/MonthlyPayGrade");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Deduction
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Deduction", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const Deduction = await Deductions.find({});
            res.render("Deduction", { Deduction, PermRole, Setting })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Deduction
    router.post("/newDeduction", checkUserAuth, async (req, res) => {
        try {
            const { DeductionName, DeductionType, profbasic, limite } = req.body
            const newDeduction = new Deductions({ DeductionName, DeductionType, profbasic, limite })
            newDeduction.save();
            res.redirect("/Deduction")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Deduction
    router.post("/editDeduction/:id", checkUserAuth, async (req, res) => {
        try {
            await Deductions.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Deduction")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Deduction
    router.get("/Deductions/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await Deductions.findByIdAndDelete(req.params.id);
            res.redirect("/Deduction");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    SalaryInfo
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/SalaryInfo", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const SalaryInfo = await SalaryInfos.find({});
            res.render("SalaryInfo", { SalaryInfo, PermRole, Setting })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new SalaryInfo
    router.post("/newSalaryInfo", checkUserAuth, async (req, res) => {
        try {
            const { Month, EmpNum, BasicSalary, GrossSalary, Status } = req.body
            const newSalaryInfo = new SalaryInfos({ Month, EmpNum, BasicSalary, GrossSalary, Status })
            newSalaryInfo.save();
            res.redirect("/SalaryInfo")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit SalaryInfo
    router.post("/editSalaryInfo/:id", checkUserAuth, async (req, res) => {
        try {
            await SalaryInfos.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/SalaryInfo")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete SalaryInfo
    router.get("/SalaryInfos/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await SalaryInfos.findByIdAndDelete(req.params.id);
            res.redirect("/SalaryInfo");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    BonusSetting
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/BonusSetting", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const BonusSetting = await BonusSettings.find();
            res.render("BonusSetting", { BonusSetting, PermRole, Setting })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new BonusSetting
    router.post("/newBonusSetting", checkUserAuth, async (req, res) => {
        try {
            const { BonusName, Bonus } = req.body
            const newBonusSetting = new BonusSettings({ BonusName, Bonus })
            newBonusSetting.save();
            res.redirect("/BonusSetting")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit BonusSetting
    router.post("/editBonusSetting/:id", checkUserAuth, async (req, res) => {
        try {
            await BonusSettings.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/BonusSetting")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete BonusSetting
    router.get("/BonusSettings/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await BonusSettings.findByIdAndDelete(req.params.id);
            res.redirect("/BonusSetting", { infouser });

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    PerformanceCategory
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/PerformanceCategory", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();

            const PerformanceCategory = await PerformanceCategorys.find();
            res.render("PerformanceCategory", { PerformanceCategory, PermRole, Setting })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new PerformanceCategory
    router.post("/newPerformanceCategory", checkUserAuth, async (req, res) => {
        try {

            const { PerformanceCategory, PerformanceCriteriaName } = req.body;
            const newPerformanceCategory = new PerformanceCategorys({ PerformanceCategory, PerformanceCriteriaName })
            newPerformanceCategory.save();
            res.redirect("/PerformanceCategory")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit PerformanceCategory
    router.post("/editPerformanceCategory/:id", checkUserAuth, async (req, res) => {
        try {
            await PerformanceCategorys.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/PerformanceCategory")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete PerformanceCategory
    router.get("/PerformanceCategorys/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await PerformanceCategorys.findByIdAndDelete(req.params.id);
            res.redirect("/PerformanceCategory");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    EmployeePerformance
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/EmployeePerformance", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const User = await Users.find();
            var EmployeePerformance
            if (PermRole[0].Role == 1) {
                EmployeePerformance = await EmployeePerformances.find();
                console.log(EmployeePerformance);
            } else {
                EmployeePerformance = await EmployeePerformances.find({ username: req.user.username });
                console.log("EmployeePerformance",EmployeePerformance);
            }
            res.render("EmployeePerformance", { EmployeePerformance, PermRole, Setting, User })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new EmployeePerformance
    router.post("/newEmployeePerformance", checkUserAuth, async (req, res) => {
        try {
            const { username, Month, rating } = req.body;
            const newEmployeePerformance = new EmployeePerformances({ username, Month, rating })
            newEmployeePerformance.save();
            res.redirect("/EmployeePerformance")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit EmployeePerformance
    router.post("/editEmployeePerformance/:id", checkUserAuth, async (req, res) => {
        try {
            await EmployeePerformances.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/EmployeePerformance")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete EmployeePerformance
    router.get("/EmployeePerformances/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await EmployeePerformances.findByIdAndDelete(req.params.id);
            res.redirect("/EmployeePerformance");

        } catch (e) {
            console.log(e)
        }
    })

}
/*---------------------------------------------------------------------------------------------------------------------
    PerformanceReport
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/PerformanceReport", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            console.log("Roleeeee", PermRole[0].Role);
            var PerformanceReport
            if (PermRole[0].Role == 1) {
                PerformanceReport = await PerformanceReports.find();
                console.log("PerformanceReport:",PerformanceReport);
            } else {
                PerformanceReport = await PerformanceReports.find({ username: req.user.username });
                console.log("PerformanceReport:",PerformanceReport);
            }


            res.render("PerformanceReport", { PerformanceReport, PermRole, Setting })
        } catch (error) {
            console.log(error);
        }
    })

    //------------ajax of performence report
    router.post("/report/ajax", checkUserAuth, async (req, res) => {
        try {
            console.log("welcome");
            const { stdate, endate } = req.body;
            const PermRole = await Permissions.find({ Role: req.user.Role });

            var EmployeePerformance
            if (PermRole[0].Role == 1) {
                EmployeePerformance = await EmployeePerformances.find({
                    Month: {
                        $gte: stdate,
                        $lte: endate
                    }
                });
                console.log("EmployeePerformance:",EmployeePerformance);
            } else {
                EmployeePerformance = await EmployeePerformances.find({
                    $and: [
                        {
                            Month: {
                                $gte: stdate,
                                $lte: endate
                            }
                        },
                        {
                            username: req.user.username
                        }
                    ]
                    
                })
                console.log("EmployeePerformance:",EmployeePerformance);
            }
            console.log(1234);
            console.log(EmployeePerformance);

            res.json({ EmployeePerformance })
            
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit PerformanceReport
    router.post("/editPerformanceReport/:id", checkUserAuth, async (req, res) => {
        try {
            await PerformanceReports.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/PerformanceReport")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete PerformanceReport
    router.get("/PerformanceReports/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await PerformanceReports.findByIdAndDelete(req.params.id);
            res.redirect("/PerformanceReport");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    EmployeePayslip
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/EmployeePayslip", checkUserAuth, async (req, res) => {
        try {

            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const User = await Users.find();
            const HourlyPayGrade = await HourlyPayGrades.find();
            const MonthlyPayGrade = await MonthlyPayGrades.find();

            var SalarySlip
            if (PermRole[0].Role == 1) {
                SalarySlip = await SalarySlips.find();
                console.log(SalarySlip);
            } else {
                SalarySlip = await SalarySlips.find({ Username: req.user.username });
                console.log(SalarySlip);
            }

            const Grade = await HourlyPayGrades.aggregate([
                {
                    $project: {
                        _id: { "$toString": "$_id" },
                        Pay_Grad: "$HourlyPayGrade"
                    }
                },

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

            res.render("EmployeePayslip", { User, PermRole, Setting, HourlyPayGrade, MonthlyPayGrade, Grade, SalarySlip })
        } catch (error) {
            console.log(error);
        }
    })

    //------------ GenrateEmployeePayslip
    router.get("/GenrateEmployeePayslip", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            console.log(req.user.Role);
            const User = await Users.find();
            const BonusSetting = await BonusSettings.find();
            const Deduction = await Deductions.find({});

            const Allowanace = await Allowanaces.find();
            const Branch = await Branchs.find();
            const Designation = await Designations.find();
            const Department = await Departments.find();
            const Role = await Roles.find();
            const HourlyPayGrade = await HourlyPayGrades.find();
            const MonthlyPayGrade = await MonthlyPayGrades.find();

            res.render("GenrateEmployeePayslip", { Allowanace, BonusSetting, Deduction, User, Branch, Designation, Department, Role, PermRole, Setting, HourlyPayGrade, MonthlyPayGrade })

        } catch (error) {
            console.log(error);
        }
    })
    router.post("/AddAlowness/ajax", checkUserAuth, async (req, res) => {
        try {
            console.log(678);
            const Deduction = await Deductions.find({});
            const BonusSetting = await BonusSettings.find();
            const { AddAlowness } = req.body
            console.log(req.body);
            const Allowanace = await Allowanaces.find({ AllowanaceName: AddAlowness });
            console.log(Allowanace);
            const Aumount = Allowanace[0].limite

            res.json({ AddAlowness, Aumount })
            // console.log(Dates);
        } catch (error) {
            console.log(error);
        }
    })

    router.post("/AddBonus/ajax", checkUserAuth, async (req, res) => {
        try {
            console.log(1234567890);
            const { Bonus } = req.body
            const BonusSetting = await BonusSettings.find();
            console.log("boddddddy", req.body);
            const lol = await BonusSettings.find({ BonusName: Bonus });
            const BonusAmount = lol[0].Bonus
            console.log(BonusAmount);
            res.json({ Bonus, BonusAmount })
            // console.log(Dates);
        } catch (error) {
            console.log(error);
        }
    })

    router.post("/AddDeductionss/ajax", checkUserAuth, async (req, res) => {
        try {
            const { Deduction } = req.body
            const Deductionn = await Deductions.find({ DeductionName: Deduction });
            const DeductionName = Deductionn[0].DeductionName
            const DeductionAmount = Deductionn[0].limite
            console.log("*****************************", DeductionName, DeductionAmount);
            res.json({ DeductionName, DeductionAmount })
            // console.log(Dates);
        } catch (error) {
            console.log(error);
        }
    })

    router.post("/GenrateEmployeePayslip/ajax", checkUserAuth, async (req, res) => {
        try {
            const Deduction = await Deductions.find({});
            const BonusSetting = await BonusSettings.find();

            const Allowanace = await Allowanaces.find();
            console.log("welcome");
            const { user, stdt, todt } = req.body;
            console.log(req.body);
            const userinfo = await Users.find({ username: user })
            console.log(userinfo);
            //=======number of days==============
            const date1 = new Date(stdt);
            const date2 = new Date(todt);
            const timeDiff = Math.abs(date2 - date1);
            const NOD = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            console.log(NOD);
            //===================================
            const Salary = await PresentTimes.find({
                $and: [
                    { Employee: user },
                    {
                        Date: {
                            $gte: stdt,
                            $lte: todt
                        }
                    }
                ]

            });
            console.log("filter", Salary);
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

            //====take grade of user salary
            const grade = await HourlyPayGrades.find({
                _id: userinfo[0].salary
            })
            console.log("grade", grade);
            const Total_Salary = (grade[0].HourlyRate) * hours + (grade[0].HourlyRate) * (minites / 60)
            console.log("Total_Salary", Total_Salary);

            const TaxRuleSetup = await TaxRuleSetups.find({
                Total_Income: {
                    $lte: Total_Salary,
                }
            });
            console.log("TaxRuleSetup", TaxRuleSetup);

            var TaxableAmount;
            if (TaxRuleSetup !== null) {
                TaxableAmount = 0
            } else {
                TaxableAmount = TaxRuleSetup[TaxRuleSetup.length - 1].Taxable_Amount
            }


            console.log(Allowanace);
            res.json({ userinfo, NOD, Deduction, BonusSetting, minites, hours, Total_Salary, Allowanace, TaxableAmount })
            // console.log(Dates);
        } catch (error) {
            console.log(error);
        }
    })

    //------------new  GenrateEmployeePayslip      
    router.post("/GenrateEmployeePayslip", checkUserAuth, async (req, res) => {
        try {
            console.log("Bodyyyy", req.body);
            const { From_Date, To_Date, nod, Username, mobileno, email, Department, Designation, Branch, EmpId, TotalHours, AmountbyHour, Tax_Amount, AllowanaceName, AllowanaceAmount, BonusName, BonusAmount, DeductionName, DeductionAmount } = req.body
            //=========DateConverter form string===============

            // seconds * minutes * hours * milliseconds = 1 day 
            // var day = 60 * 60 * 24 * 1000;
            // var FromDate = new Date((new Date(From_Date)).getTime() + day);
            // var ToDate = new Date((new Date(To_Date)).getTime() + day);

            // make condition of string and array and stor in it new array after that save it in schemas array
            if (typeof AllowanaceName == "string") {
                var Allowanace_Name = [req.body.AllowanaceName]
                var Allowanace_Amount = [req.body.AllowanaceAmount]
                console.log("if", AllowanaceName);
            } else {
                var Allowanace_Name = [...req.body.AllowanaceName]
                var Allowanace_Amount = [...req.body.AllowanaceAmount]
                console.log("else", AllowanaceName);
            }
            const newAllowanaceName = Allowanace_Name.map((value) => {

                return value = {
                    Allowanace_Name: value,
                }
            })
            Allowanace_Amount.forEach((value, i) => {
                newAllowanaceName[i].Allowanace_Amount = value
            });
            console.log("newAllowanaceName", newAllowanaceName);
            //==========================bouns================================================================
            console.log(typeof BonusName);
            if (typeof BonusName == "string") {
                var Bonus_Name = [req.body.BonusName]
                var Bonus_Amount = [req.body.BonusAmount]
                console.log("if", Bonus_Name);
            } else {
                var Bonus_Name = [...req.body.BonusName]
                var Bonus_Amount = [...req.body.BonusAmount]
                console.log("else", BonusName);
            }
            const newBonusName = Bonus_Name.map((value) => {

                return value = {
                    Bonus_Name: value,
                }
            })
            Bonus_Amount.forEach((value, i) => {
                newBonusName[i].Bonus_Amount = value
            });
            console.log("newAllowanaceName", newBonusName);

            //==========================Deduction================================================================
            console.log(typeof DeductionName);
            if (typeof DeductionName == "string") {
                var Deduction_Name = [req.body.DeductionName]
                var Deduction_Amount = [req.body.DeductionAmount]
                console.log("if", Bonus_Name);
            } else {
                var Deduction_Name = [...req.body.DeductionName]
                var Deduction_Amount = [...req.body.DeductionAmount]
                console.log("else", Deduction_Name);
            }
            const newDeductionName = Deduction_Name.map((value) => {

                return value = {
                    Deduction_Name: value,
                }
            })
            Deduction_Amount.forEach((value, i) => {
                newDeductionName[i].Deduction_Amount = value
            });
            console.log("newDeductionName", newDeductionName);


            const SalarySlip = new SalarySlips({ FromDate: From_Date, ToDate: To_Date, Username, nod, Mobilenum: mobileno, email, Department, Designation, Branch, EmpId, TotalHours, AmountbyHour, Tax_Amount, Allowanace: newAllowanaceName, Bonus: newBonusName, Deduction: newDeductionName })
            SalarySlip.save();
            res.redirect("/GenrateEmployeePayslip")
        } catch (error) {
            console.log(error);
        }
    })

    router.get("/Getslip/:id", checkUserAuth, async (req, res) => {
        try {
            console.log(req.params.id);
            const SalarySlip = await SalarySlips.find({ _id: req.params.id });
            console.log("SalarySlip", SalarySlip);
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();

            // console.log(req.user.Role);
            // const User = await Users.find();
            // const BonusSetting = await BonusSettings.find();
            // const Allowanace = await Allowanaces.find();
            // const Branch = await Branchs.find();
            // const Designation = await Designations.find();
            // const Department = await Departments.find();
            // const Role = await Roles.find();
            // const HourlyPayGrade = await HourlyPayGrades.find();
            // const MonthlyPayGrade = await MonthlyPayGrades.find();
            var total_Allowanace = 0;
            for (let i = 0; i < SalarySlip[0].Allowanace.length; i++) {
                total_Allowanace = total_Allowanace + SalarySlip[0].Allowanace[i].Allowanace_Amount
            }

            var total_Bonus = 0;
            for (let i = 0; i < SalarySlip[0].Bonus.length; i++) {
                total_Bonus = total_Bonus + SalarySlip[0].Bonus[i].Bonus_Amount
            }

            var total_Deduction = 0;
            for (let i = 0; i < SalarySlip[0].Deduction.length; i++) {
                total_Deduction = total_Deduction + SalarySlip[0].Deduction[i].Deduction_Amount
            }
            console.log(total_Allowanace, total_Bonus, total_Deduction);
            const netSalary = SalarySlip[0].AmountbyHour + total_Allowanace + total_Bonus - total_Deduction - SalarySlip[0].Tax_Amount
            console.log(SalarySlip[0].AmountbyHour);
            console.log(netSalary);
            res.render("viewSlaryslip", { SalarySlip, PermRole, Setting, netSalary })

        } catch (error) {
            console.log(error);
        }
    })
}
//===========export router=============
module.exports = router;