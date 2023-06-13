const mongoose = require('mongoose');

//=============Role==================================================
const Role = new mongoose.Schema(
    {
        Role: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        Role_Name: {
            type: String,
            required: true,
            index: true,
            unique: true
        },

    }
)
const Roles = new mongoose.model('Roles', Role);

//=============Permission==================================================
const Permission = new mongoose.Schema(
    {
        Role: {
            type: String,
            required: true,
            index: true,
        },
        Administration: [{
            Add_role: {
                type: String,
                default: '0',
                index: true,
            },
            Add_Role_Permission: {
                type: String,
                default: '0',
                index: true,
            },
            Change_Password: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Employee_Management: [{
            Department: {
                type: String,
                default: '0',
                index: true,
            },
            Designation: {
                type: String,
                default: '0',
                index: true,
            },
            Branch: {
                type: String,
                default: '0',
                index: true,
            },
            Manage_Employee: {
                type: String,
                default: '0',
                index: true,
            },
            Warning: {
                type: String,
                default: '0',
                index: true,
            },
            Termination: {
                type: String,
                default: '0',
                index: true,
            },
            Promotion: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Leave_Management: [{
            ManageHoliday: {
                type: String,
                default: '0',
                index: true,
            },
            PublicHoliday: {
                type: String,
                default: '0',
                index: true,
            },
            WeeklyHoliday: {
                type: String,
                default: '0',
                index: true,
            },
            ApplyforLeave: {
                type: String,
                default: '0',
                index: true,
            },
            ManageLeave: {
                type: String,
                default: '0',
                index: true,
            },
            LeaveSummaryReport: {
                type: String,
                default: '0',
                index: true,
            },
            MyLeaveReport: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Attendance: [{
            ManageWorkShift: {
                type: String,
                default: '0',
                index: true,
            },
            MyAttendanceReport: {
                type: String,
                default: '0',
                index: true,
            },
            ManualAttendance: {
                type: String,
                default: '0',
                index: true,
            },
            SummaryReport: {
                type: String,
                default: '0',
                index: true,
            },
            DashboardAttendance: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Payroll: [{
            TaxRuleSetup: {
                type: String,
                default: '0',
                index: true,
            },Allowance: {
                type: String,
                default: '0',
                index: true,
            },
            Deduction: {
                type: String,
                default: '0',
                index: true,
            },
            HourlyPayGrade: {
                type: String,
                default: '0',
                index: true,
            },
            GenerateSalarySheet: {
                type: String,
                default: '0',
                index: true,
            },
            PaymentHistory: {
                type: String,
                default: '0',
                index: true,
            },
            MyPayroll: {
                type: String,
                default: '0',
                index: true,
            },
            ApproveWorkHour: {
                type: String,
                default: '0',
                index: true,
            },
            BonusSetting: {
                type: String,
                default: '0',
                index: true,
            },
            GenerateBonus: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Performance: [{
            PerformanceCategory: {
                type: String,
                default: '0',
                index: true,
            },
            EmployeePerformance: {
                type: String,
                default: '0',
                index: true,
            },
            PerformanceSummaryReport: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Recruitment: [{
            JobPost: {
                type: String,
                default: '0',
                index: true,
            },
            JobCandidate: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Training: [{
            TrainingType: {
                type: String,
                default: '0',
                index: true,
            },
            TrainingReport: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Award: [{
            Award: {
                type: String,
                default: '0',
                index: true,
            },
        }],
        Settings: [{
            GeneralSetting: {
                type: String,
                default: '0',
                index: true,
            },
        }],

    }
)
const Permissions = new mongoose.model('Permissions', Permission);



/*=============Export the model==============*/

module.exports = { Roles, Permissions }