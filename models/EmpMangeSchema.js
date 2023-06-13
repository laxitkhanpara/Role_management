const mongoose = require('mongoose');

//=============Department==================================================
const Department = new mongoose.Schema(
    {
        Department: {
            type: String,
            required: true,
            index: true,
        },
       
    }
)
const Departments =new  mongoose.model('Departments', Department);

//=============Designation======================================================
const Designation = new mongoose.Schema(
    {
        Designation: {
            type: String,
            required: true,
            index: true,
        },
       
    }
)
const Designations =new  mongoose.model('Designations', Designation);

//=============Branch==================================================
const Branch = new mongoose.Schema(
    {
        Branch: {
            type: String,
            required: true,
            index: true,
        },
    }
)
const Branchs =new  mongoose.model('Branchs', Branch);

//=============User==================================================
const User = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            index: true,
        },
        password: {
            type: String,
            required: true,
            index: true,
        },
        username: {
            type: String,
            required: true,
            index: true,
            unique:true,
            
        },
        Mobilenum: {
            type: String,
            required: true,
            index: true,
            unique:true,
        },
        Role: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            index: true,
        },
        lastName: {
            type: String,
            required: true,
            index: true,
        },
        empId: {
            type: String,
            required: true,
            index: true,
            unique:true,
        },
        bllodGroup: {
            type: String,
            required: true,
            index: true,
        },
        gendar: {
            type: String,
            required: true,
            index: true,
        },
        Status: {
            type: String,
            required: true,
            index: true,
        },
        salary: {
            type: String,
            required: true,
            index: true,
        },
        department: {
            type: String,
            required: true,
            index: true,
        },
        Designation: {
            type: String,
            required: true,
            index: true,
        },
        branch: {
            type: String,
            required: true,
            index: true,
        },
        dob: {
            type: String,
            required: true,
            index: true,
        },
        joinDate: {
            type: String,
            required: true,
            index: true,
        },
        leaveDate: {
            type: String,
            index: true,
        },
        Country: {
            type: String,
            required: true,
            index: true,
        },
        State: {
            type: String,
            required: true,
            index: true,
        },
        City: {
            type: String,
            required: true,
            index: true,
        },
        Street: {
            type: String,
            required: true,
            index: true,
        },
        zipCode: {
            type: String,
            required: true,
            index: true,
        },
       
    }
)
const Users =new  mongoose.model('Users', User);

//=============Warning==================================================
const Warning = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: true,
        },
        WarningType: {
            type: String,
            required: true,
            index: true,
        },
        Subject: {
            type: String,
            required: true,
            index: true,
        },
        WarningBy: {
            type: String,
            required: true,
            index: true,
        },
        WarningDate: {
            type: String,
            required: true,
            index: true,
        },
        Description: {
            type: String,
            required: true,
            index: true,
        },
       
    }
)
const Warnings =new  mongoose.model('Warnings', Warning);

//=============Termination==================================================
const Termination = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: true,
        },
        TerminationType: {
            type: String,
            required: true,
            index: true,
        },
        Subject: {
            type: String,
            required: true,
            index: true,
        },
        TerminationBy: {
            type: String,
            required: true,
            index: true,
        },
        NoticeDate: {
            type: String,
            required: true,
            index: true,
        },
        TerminationDate: {
            type: String,
            required: true,
            index: true,
        },
        Description: {
            type: String,
            required: true,
            index: true,
        },
       
    }
)
const Terminations =new  mongoose.model('Terminations', Termination);

//=============Promotion==================================================
const Promotion = new mongoose.Schema(
    {
        username: {
            type: String,
            index: true,
        },
        PromotionDate: {
            type: String,
            index: true,
        },
        Department: {
            type: String,
            index: true,
        },
        Designation: {
            type: String,
            index: true,
        },
        Branch: {
            type: String,
            index: true,
        },
        Salary: {
            type: String,
            index: true,
        },
        PromotionDepartment: {
            type: String,
            index: true,
        },
        PromotionDesignation: {
            type: String,
            index: true,
        },
        PromotionBranch: {
            type: String,
            index: true,
        },
        PromotionSalary: {
            type: String,
            index: true,
        },


    }
)
const Promotions =new  mongoose.model('Promotions', Promotion);




/*=============Export the model==============*/

module.exports={Departments,Designations,Branchs,Users,Warnings,Terminations,Promotions}