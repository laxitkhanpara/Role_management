const mongoose = require('mongoose');

//=============JobPost======================================================
const JobPost = new mongoose.Schema(
    {
        Job_Title: {
            type: String,
            required: true,
            index: true,
        },
        Job_Post: {
            type: String,
            required: true,
            index: true,
        },
        Description: {
            type: String,
            required: true,
            index: true,
        },
        Status: {
            type: String,
            required: true,
            index: true,
        },
        Job_Published: {
            type: String,
            required: true,
            index: true,
        },
        App_End: {
            type: String,
            required: true,
            index: true,
        },

    }
)
const JobPosts = new mongoose.model('JobPosts', JobPost);

//=============TrainingType======================================================
const TrainingType = new mongoose.Schema(
    {
        TrainingType: {
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
const TrainingTypes = new mongoose.model('TrainingTypes', TrainingType);

//=============EmployeeTraining======================================================
const EmployeeTraining = new mongoose.Schema(
    {
        EmployeeTraining: {
            type: String,
            required: true,
            index: true,
        },
        username: {
            type: String,
            required: true,
            index: true,
        },
        From_Date: {
            type: String,
            required: true,
            index: true,
        },
        To_Date: {
            type: String,
            required: true,
            index: true,
        },
        Description: {
            type: String,
            index: true,
        },
        Certificate: {
            type: String,
            index: true,
        },

    }
)
const EmployeeTrainings = new mongoose.model('EmployeeTrainings', EmployeeTraining);

//=============Award======================================================
const Award = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: true,
        },
        Award: {
            type: String,
            required: true,
            index: true,
        },
        GiftItem: {
            type: String,
            required: true,
            index: true,
        },
        Month: {
            type: String,
            required: true,
            index: true,
        },

    }
)
const Awards = new mongoose.model('Awards', Award);

//=============Notice======================================================
const Notice = new mongoose.Schema(
    {

        Notice: {
            type: String,
            required: true,
            index: true,
        },
        Description: {
            type: String,
            required: true,
            index: true,
        },
        Status: {
            type: String,
            required: true,
            index: true,
        },
        published: {
            type: String,
            required: true,
            index: true,
        },
        NoticeFile: {
            type: String,
            required: true,
            index: true,
        },


    }
)
const Notices = new mongoose.model('Notices', Notice);

//=============Settings======================================================
const Setting = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
            index: true,
        },
        CompnyName: {
            type: String,
            required: true,
            index: true,
        },
        LandingHeading: {
            type: String,
            required: true,
            index: true,
        },
        LilIntro: {
            type: String,
            required: true,
            index: true,
        },
        BrifeIntro: {
            type: String,
            required: true,
            index: true,
        },
        web: {
            type: String,
            required: true,
            index: true,
        },
        mobile: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            index: true,
        },
        location: {
            type: String,
            required: true,
            index: true,
        },


    }
)
const Settings = new mongoose.model('Settings', Setting);

//=============DashbordImage======================================================
const DashbordImage = new mongoose.Schema(
    {
        image: [{
            imagename1: {
                type: String,
                required: true,
                index: true,
            },
            imagename2: {
                type: String,
                required: true,
                index: true,
            },
            imagename3: {
                type: String,
                required: true,
                index: true,
            },
            imagename4: {
                type: String,
                required: true,
                index: true,
            }
        }],
    }
)
const DashbordImages = new mongoose.model('DashbordImages', DashbordImage);

//=============ApplyForJob======================================================
const ApplyForJob = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            index: true,
        },
        mobile: {
            type: String,
            required: true,
            index: true,
        },
        resume: {
            type: String,
            required: true,
            index: true,
        },
        coverLetter: {
            type: String,
            required: true,
            index: true,
        },
        Job_Title: {
            type: String,
            required: true,
            index: true,
        },
    }
)
const ApplyForJobs = new mongoose.model('ApplyForJobs', ApplyForJob);

/*=============Export the model==============*/

module.exports = { JobPosts, TrainingTypes, EmployeeTrainings, Awards, Notices, Settings, DashbordImages, ApplyForJobs }