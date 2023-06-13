const mongoose = require('mongoose');

//=============PublicHoliday==================================================
const PublicHoliday = new mongoose.Schema(
    {
        PublicHoliday: {
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
const PublicHolidays =new  mongoose.model('PublicHolidays', PublicHoliday);

//=============WeeklyHoliday==================================================
const WeeklyHoliday = new mongoose.Schema(
    {
        WeeklyHoliday: {
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
const WeeklyHolidays =new  mongoose.model('WeeklyHolidays', WeeklyHoliday);

//=============ApplyLeave==================================================
const ApplyLeave = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: true,
        },
        empId: {
            type: String,
            required: true,
            index: true,
        },
        Reason: {
            type: String,
            required: true,
            index: true,
        },
        FromDate: {
            type: String,
            required: true,
            index: true,
        },
        ToDate: {
            type: String,
            required: true,
            index: true,
        },Status: {
            type: String,
            default:"Pending",
            index: true,
        },
       
    }
)
const ApplyLeaves =new  mongoose.model('ApplyLeaves', ApplyLeave);


/*=============Export the model==============*/

module.exports={PublicHolidays,WeeklyHolidays,ApplyLeaves }