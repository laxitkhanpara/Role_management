const mongoose = require('mongoose');


//=============Allowanace==================================================
const TaxRuleSetup = new mongoose.Schema(
    {
        Total_Income: {
            type: Number,
            required: true,
            index: true,
        },
        Tax_Rate: {
            type: Number,
            required: true,
            index: true,
        },
        Taxable_Amount: {
            type: Number,
            required: true,
            index: true,
        },

    }
)
const TaxRuleSetups = new mongoose.model('TaxRuleSetups', TaxRuleSetup);
//=============Allowanace==================================================
const Allowanace = new mongoose.Schema(
    {
        AllowanaceName: {
            type: String,
            required: true,
            index: true,
        },
        AllowanaceType: {
            type: String,
            required: true,
            index: true,
        },
        profbasic: {
            type: String,
            required: true,
            index: true,
        },
        limite: {
            type: String,
            required: true,
            index: true,
        },

    }
)
const Allowanaces = new mongoose.model('Allowanaces', Allowanace);

//=============HourlyPayGrade==================================================
const HourlyPayGrade = new mongoose.Schema(
    {
        HourlyPayGrade: {
            type: String,
            required: true,
            index: true,
        },
        HourlyRate: {
            type: Number,
            required: true,
            index: true,
        },

    }
)
const HourlyPayGrades = new mongoose.model('HourlyPayGrades', HourlyPayGrade);
//=============MonthlyPayGrade==================================================
const MonthlyPayGrade = new mongoose.Schema(
    {
        MonthlyPayGrade: {
            type: String,
            required: true,
            index: true,
        },
        MonthlyRate: {
            type: Number,
            required: true,
            index: true,
        },

    }
)
const MonthlyPayGrades = new mongoose.model('MonthlyPayGrades', MonthlyPayGrade);

//=============Deduction==================================================
const Deduction = new mongoose.Schema(
    {
        DeductionName: {
            type: String,
            required: true,
            index: true,
        },
        DeductionType: {
            type: String,
            required: true,
            index: true,
        },
        profbasic: {
            type: String,
            required: true,
            index: true,
        },
        limite: {
            type: String,
            required: true,
            index: true,
        },
    }
)
const Deductions = new mongoose.model('Deductions', Deduction);

//=============SalaryInfo==================================================
const SalaryInfo = new mongoose.Schema(
    {
        Month: {
            type: String,
            required: true,
            index: true,
        },
        Name: {
            type: String,
            required: true,
            index: true,
        },
        EmpNum: {
            type: String,
            required: true,
            index: true,
        },
        BasicSalary: {
            type: String,
            required: true,
            index: true,
        },
        GrossSalary: {
            type: String,
            required: true,
            index: true,
        },
        Status: {
            type: String,
            required: true,
            index: true,
        },
    }
)
const SalaryInfos = new mongoose.model('SalaryInfos', SalaryInfo);
//=============BonusSetting==================================================
const BonusSetting = new mongoose.Schema(
    {
        BonusName: {
            type: String,
            required: true,
            index: true,
        },
        Bonus: {
            type: String,
            required: true,
            index: true,
        },

    }
)
const BonusSettings = new mongoose.model('BonusSettings', BonusSetting);

//=============PerformanceCategory======================================================
const PerformanceCategory = new mongoose.Schema(
    {
        PerformanceCategory: {
            type: String,
            required: true,
            index: true,
        },
        PerformanceCriteriaName: {
            type: String,
            required: true,
            index: true,
        },


    }
)
const PerformanceCategorys = new mongoose.model('PerformanceCategorys', PerformanceCategory);

//=============EmployeePerformance======================================================
const EmployeePerformance = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: true,
        },
        Month: {
            type: Date,
            required: true,
            index: true,
        },
        rating: {
            type: String,
            required: true,
            index: true,
        },

    }
)
const EmployeePerformances = new mongoose.model('EmployeePerformances', EmployeePerformance);

//=============PerformanceReport======================================================
const PerformanceReport = new mongoose.Schema(
    {
        PerformanceReport: {
            type: String,
            required: true,
            index: true,
        },

    }
)
const PerformanceReports = new mongoose.model('PerformanceReports', PerformanceReport);

//=============Salary slip==================================================
const SalarySlip = new mongoose.Schema(
    {
        FromDate: {
            type: Date,
            required: true,
            index: true,
        },
        ToDate: {
            type: Date,
            required: true,
            index: true,
        },
        Username: {
            type: String,
            required: true,
            index: true,
        },
        Mobilenum: {
            type: String,
            required: true,
            index: true,
        },
        nod: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            index: true,
        },
        Department: {
            type: String,
            required: true,
            index: true,
        },
        Designation: {
            type: String,
            required: true,
            index: true,
        },
        Branch: {
            type: String,
            required: true,
            index: true,
        },
        EmpId: {
            type: String,
            required: true,
            index: true,
        },
        TotalHours: {
            type: String,
            required: true,
            index: true,
        },
        AmountbyHour: {
            type: Number,
            required: true,
            index: true,
        },
        Tax_Amount: {
            type: Number,
            required: true,
            index: true,
        },
        Allowanace: [
            {
                Allowanace_Name: {
                    type: String,
                    required: true,
                
                },
                Allowanace_Amount: {
                    type: Number,
                    required: true,
                }
            }
        ],
        Bonus: [
            {
                Bonus_Name: {
                    type: String,
                    required: true,
                
                },
                Bonus_Amount: {
                    type: Number,
                    required: true,
                }
            }
        ],
        Deduction: [
            {
                Deduction_Name: {
                    type: String,
                    required: true,
                
                },
                Deduction_Amount: {
                    type: Number,
                    required: true,
                }
            }
        ]

    }
)
const SalarySlips = new mongoose.model('SalarySlips', SalarySlip);
/*=============Export the model==============*/

module.exports = { Allowanaces, Deductions, SalaryInfos, BonusSettings, PerformanceCategorys, EmployeePerformances, PerformanceReports, TaxRuleSetups, HourlyPayGrades, MonthlyPayGrades,SalarySlips }