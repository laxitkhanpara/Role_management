const express = require('express')
const app = express();
const router = express.Router();
const { checkUserAuth } = require("../middleware/authMiddleware");
const { Departments, Designations, Branchs, Users, Warnings, Terminations, Promotions } = require('../models/EmpMangeSchema');
const { JobPosts, TrainingTypes, EmployeeTrainings, Awards, Notices, Settings, DashbordImages, ApplyForJobs } = require('../models/OtherSchema');
const { Roles, Permissions } = require('../models/AdminiSchema');
const multer = require('multer');
const fs = require('fs')
const path = require('path')

//================Certificate upload===============================

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
    JobPost
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/JobPost", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const ApplyForJob = await ApplyForJobs.find();
            
            const JobPost = await JobPosts.find();
            res.render("JobPost", { JobPost, PermRole, Setting, ApplyForJob })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new JobPost
    router.post("/newJobPost", checkUserAuth, async (req, res) => {
        try {
            const { Job_Title, Job_Post, Description, Status, Job_Published, App_End } = req.body;
            const newJobPost = new JobPosts({ Job_Title, Job_Post, Description, Status, Job_Published, App_End })
            newJobPost.save();
            res.redirect("/JobPost")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit JobPost
    router.post("/editPerformanceCategory/:id", checkUserAuth, async (req, res) => {
        try {
            await JobPosts.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/JobPost")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete JobPost
    router.get("/JobPosts/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await JobPosts.findByIdAndDelete(req.params.id);
            res.redirect("/JobPost");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    TrainingType
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/TrainingType", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();

            const TrainingType = await TrainingTypes.find();
            res.render("TrainingType", { TrainingType, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new TrainingType
    router.post("/newTrainingType", checkUserAuth, async (req, res) => {
        try {
            const { TrainingType, Status } = req.body;
            const newTrainingType = new TrainingTypes({ TrainingType, Status })
            newTrainingType.save();
            res.redirect("/TrainingType")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit TrainingType
    router.post("/editTrainingType/:id", checkUserAuth, async (req, res) => {
        try {
            await TrainingTypes.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/TrainingType")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete TrainingType
    router.get("/TrainingTypes/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await TrainingTypes.findByIdAndDelete(req.params.id);
            res.redirect("/TrainingType");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    EmployeeTraining
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/EmployeeTraining", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            const User = await Users.find();
            const TrainingType = await TrainingTypes.find();

            const EmployeeTraining = await EmployeeTrainings.find();
            res.render("EmployeeTraining", { TrainingType, EmployeeTraining, PermRole, Setting, User })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new EmployeeTraining
    router.post("/newEmployeeTraining", upload.single('Certificate'), checkUserAuth, async (req, res) => {
        try {
            const { EmployeeTraining, username, Description, From_Date, To_Date } = req.body;
            const Certificate = req.file.filename
            const newEmployeeTraining = new EmployeeTrainings({ EmployeeTraining, username, Description, From_Date, To_Date, Certificate })
            newEmployeeTraining.save();
            res.redirect("/EmployeeTraining")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit EmployeeTraining
    router.post("/editEmployeeTraining/:id", checkUserAuth, async (req, res) => {
        try {
            await EmployeeTrainings.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/EmployeeTraining")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete EmployeeTraining
    router.get("/EmployeeTrainings/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await EmployeeTrainings.findByIdAndDelete(req.params.id);
            res.redirect("/EmployeeTraining");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Award
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Award", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();
            console.log(PermRole[0].Role);
            const User = await Users.find();
            var Award
            if (PermRole[0].Role == 1) {
                Award = await Awards.find();
                console.log(Award);
            } else {
                Award = await Awards.find({ username: req.user.username });
                console.log(Award);
            }
            res.render("Award", { Award, PermRole, Setting, User })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Award
    router.post("/newAward", checkUserAuth, async (req, res) => {
        try {
            const { username, Award, GiftItem, Month } = req.body;
            const newAward = new Awards({ username, Award, GiftItem, Month })
            newAward.save();
            res.redirect("/Award")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Award
    router.post("/editAward/:id", checkUserAuth, async (req, res) => {
        try {
            await Awards.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Award")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Award
    router.get("/Awards/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await Awards.findByIdAndDelete(req.params.id);
            res.redirect("/Award");

        } catch (e) {
            console.log(e)
        }
    })

}

/*---------------------------------------------------------------------------------------------------------------------
    Notice
---------------------------------------------------------------------------------------------------------------------*/
{
    router.get("/Notice", checkUserAuth, async (req, res) => {
        try {
            const PermRole = await Permissions.find({ Role: req.user.Role });
            const Setting = await Settings.find();

            const Notice = await Notices.find();
            res.render("Notice", { Notice, PermRole, Setting, })
        } catch (error) {
            console.log(error);
        }
    })

    //------------new Notice
    router.post("/newNotice", upload.single('NoticeFile'), checkUserAuth, async (req, res) => {
        try {
            const { Notice, Description, Status, published } = req.body;
            const NoticeFile = req.file.filename
            const newNotice = new Notices({ Notice, Description, Status, published, NoticeFile })
            newNotice.save();
            res.redirect("/Notice")
        } catch (error) {
            console.log(error);
        }
    })

    //-----------edit Notice
    router.post("/editNotice/:id", checkUserAuth, async (req, res) => {
        try {
            await Notices.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/Notice")
        } catch (error) {
            console.log(error);
        }
    })

    //---------Delete Notice
    router.get("/Notices/delete/:id", checkUserAuth, async (req, res) => {
        try {

            console.log(req.params.id)
            await Notices.findByIdAndDelete(req.params.id);
            res.redirect("/Notice");

        } catch (e) {
            console.log(e)
        }
    })

}


/*---------------------------------------------------------------------------------------------------------------------
    Setting
---------------------------------------------------------------------------------------------------------------------*/
router.get("/Setting", checkUserAuth, async (req, res) => {
    try {
        const PermRole = await Permissions.find({ Role: req.user.Role });
        const Setting = await Settings.find();
        console.log(Setting[0].image);
        res.render("Settings", { PermRole, Setting })
    } catch (error) {
        console.log(error);
    }
})

router.post("/Setting", upload.single("image"), checkUserAuth, async (req, res) => {
    try {

        const SettingDetails = await Settings.find();
        console.log("SettingDetails", SettingDetails);
        const { CompnyName, LandingHeading, LilIntro, BrifeIntro,web,mobile,email,location } = req.body;
        if (req.file) {
            //form remove file from upload
            fs.unlink("/project/public/upload/" + SettingDetails[0].image, (err) => {
                if (err) {
                    console.error(err, "file not found")
                    return
                }
            })
            const newimage = req.file.filename
            console.log("newimage:", newimage);
            const setting = await Settings.findByIdAndUpdate(SettingDetails[0].id, { image: newimage, CompnyName, LandingHeading, LilIntro, BrifeIntro,web,mobile,email,location })

        } else {
            console.log("new file");
            const newimage = SettingDetails[0].image
            console.log(newimage);
            const setting = await Settings.findByIdAndUpdate(SettingDetails[0].id, { image: newimage, CompnyName, LandingHeading, LilIntro, BrifeIntro,web,mobile,email,location })

        }
        return res.redirect("/Setting")
    } catch (error) {
        console.log(error);
    }
})

// var multipleUpload = upload.fields([{ name: "file1" }, { name: "file2" }])
router.post("/LandingPageSetting", upload.array("image", 4), checkUserAuth, async (req, res) => {
    try {
        const DashbordImage = await DashbordImages.find()
        console.log(123, req.files[0].filename);
        if (req.files) {
            fs.unlink("/project/public/upload/" + DashbordImage[0].image[0].imagename1, (err) => {
                if (err) {
                    console.error(err, "file not found")
                    return
                }
            })
            fs.unlink("/project/public/upload/" + DashbordImage[0].image[0].imagename2, (err) => {
                if (err) {
                    console.error(err, "file not found")
                    return
                }
            })
            fs.unlink("/project/public/upload/" + DashbordImage[0].image[0].imagename3, (err) => {
                if (err) {
                    console.error(err, "file not found")
                    return
                }
            })
            fs.unlink("/project/public/upload/" + DashbordImage[0].image[0].imagename4, (err) => {
                if (err) {
                    console.error(err, "file not found")
                    return
                }
            })
            console.log(DashbordImage[0].id);
            await DashbordImages.findByIdAndUpdate(DashbordImage[0].id, { image: [{ imagename1: req.files[0].filename, imagename2: req.files[1].filename, imagename3: req.files[2].filename, imagename4: req.files[3].filename }] })
            res.redirect("/Setting")
        } else {
            res.json[
                { "msg": "please Select 4 files" }
            ]
        }


    } catch (error) {
        console.log(error);
    }
})

//===========export router=============
module.exports = router;