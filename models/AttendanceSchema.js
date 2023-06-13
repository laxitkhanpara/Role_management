const mongoose = require('mongoose');


//=============workShift==================================================
const workShift = new mongoose.Schema(
    {
        workShift: {
            type: String,
            required: true,
            index: true,
        },
        StartTime: {
            type: String,
            required: true,
            index: true,
        },
        EndTime: {
            type: String,
            required: true,
            index: true,
        },
        LateCount: {
            type: String,
            required: true,
            index: true,
        },
       
    }
)
const workShifts =new  mongoose.model('workShifts', workShift);

/*=============Export the model==============*/

module.exports={workShifts}