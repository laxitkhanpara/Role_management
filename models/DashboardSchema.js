const { TimeScale } = require('chart.js');
const mongoose = require('mongoose');

//=============Department==================================================
const PresentTime = new mongoose.Schema(
    {
        Employee:{
            type: String,
            required: true,
            index: true,            
        },
        startclockin: {
            type: Date,
            required: true,
            index: true,
        },
        endClockOut: {
            type: Date,
            required: true,
            index: true,
        },

        PresentTime: {
            type: String,
            required: true,
            index: true,
        },
        BreakTime: {
            type: String,
            required: true,
            index: true,
        },
        Date: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
)
const PresentTimes = new mongoose.model('PresentTimes', PresentTime);
/*=============Export the model==============*/

module.exports = { PresentTimes }