$(document).ready(function () {


    /*-------------------------------
        showing data of edit
    ----------------------------------*/
    $(document).on('click', "#editData", function () {
        const id = $(this).attr("data-id")

        //========Role
        if ($("#roleno").length) {
            $("#roleno").val($(this).attr("data-name"))
            $("#rolename").val($(this).attr("data-roleName"))
            $("#formaction").attr('action', 'editRole/' + id)
        }
        //========Department
        else if ($("#depart").length) {
            $("#depart").val($(this).attr("data-name"))
            $("#formaction").attr('action', 'editDepartment/' + id)
        }
        //========Designat
        else if ($("#Designat").length) {
            $("#Designat").val($(this).attr("data-name"))
            $("#formaction").attr('action', 'editDesignation/' + id)
        }
        //========Branch
        else if ($("#Bran").length) {
            $("#Bran").val($(this).attr("data-name"))
            $("#formaction").attr('action', 'editBranch/' + id)
        }
        //========Warning
        else if ($("#empname").length) {
            $("#empname").val($(this).attr("data-username"))
            $("#wrtyp").val($(this).attr("data-WarningType"))
            $("#sub").val($(this).attr("data-Subject"))
            $("#wrby").val($(this).attr("data-WarningBy"))
            $("#wrdate").val($(this).attr("data-WarningDate"))
            $("#wrDescription").val($(this).attr("data-Description"))
            $("#formaction").attr('action', 'editWarning/' + id)
        }
        //========publicLeave
        else if ($("#publicleave").length) {
            $("#publicleave").val($(this).attr("data-name"))
            $("#Status").val($(this).attr("data-status"))
            $("#formaction").attr('action', 'editPublicHoliday/' + id)
        }
        //========Manage status of Leave
        else if ($("#mnglv").length) {
            $("#mnglv").val($(this).attr("data-Reason"))
            $("#FromDate").val($(this).attr("data-FromDate"))
            $("#ToDate").val($(this).attr("data-ToDate"))
            $("#Status").val($(this).attr("data-Status"))
            $("#formaction").attr('action', 'editManageLeave/' + id)
        }
        //========WorkShift
        else if ($("#workShift").length) {
            $("#workShift").val($(this).attr("data-name"))
            $("#sttm").val($(this).attr("data-st"))
            $("#entm").val($(this).attr("data-en"))
            $("#ltc").val($(this).attr("data-lc"))
            $("#formaction").attr('action', 'editworkShift/' + id)
        }
        //========Allowanace
        else if ($("#AllowanaceName").length) {
            $("#AllowanaceName").val($(this).attr("data-name"))
            $("#AllowanaceType").val($(this).attr("data-AllowanaceType"))
            $("#profbasic").val($(this).attr("data-profbasic"))
            $("#limite").val($(this).attr("data-limite"))
            $("#formaction").attr('action', 'editAllowanace/' + id)
        }
        //========Bonus
        else if ($("#BonusName").length) {
            $("#BonusName").val($(this).attr("data-name"))
            $("#Bonus").val($(this).attr("data-Bonus"))
            $("#formaction").attr('action', 'editBonusSeting/' + id)
        }
        //========PerformanceCategory
        else if ($("#cars").length) {
            $("#cars").val($(this).attr("data-name"))
            $("#lol").val($(this).attr("data-prcriter"))
            $("#formaction").attr('action', 'editPerformanceCategory/' + id)
        }
        //========Job Post
        else if ($("#Job_Title").length) {
            $("#Job_Title").val($(this).attr("data-Job_Title"))
            $("#Job_Post").val($(this).attr("data-Job_Post"))
            $("#Description").val($(this).attr("data-Description"))
            $("#Status").val($(this).attr("data-Status"))
            $("#Job_Published").val($(this).attr("data-Job_Published"))
            $("#App_End").val($(this).attr("data-App_End"))
            $("#formaction").attr('action', 'editTrainingType/' + id)
        }
        //========TrainingType
        else if ($("#TrainingType").length) {
            $("#TrainingType").val($(this).attr("data-name"))
            $("#Status").val($(this).attr("data-Status"))
            $("#formaction").attr('action', 'editPerformanceCategory/' + id)
        }
        //========Employee Training
        else if ($("#EmployeeTraining").length) {
            $("#EmployeeTraining").val($(this).attr("data-name"))
            $("#username").val($(this).attr("data-username"))
            $("#From_Date").val($(this).attr("data-From_Date"))
            $("#To_Date").val($(this).attr("data-To_Date"))
            $("#formaction").attr('action', 'editPerformanceCategory/' + id)
        }
        //========Award
        else if ($("#Award").length) {
            $("#Award").val($(this).attr("data-Award"))
            $("#Awardusername").val($(this).attr("data-Awardusername"))
            $("#GiftItem").val($(this).attr("data-GiftItem"))
            $("#Month").val($(this).attr("data-Month"))
            $("#formaction").attr('action', 'editAward/' + id)
        }
        //========Notice
        else if ($("#Notice").length) {
            $("#Notice").val($(this).attr("data-Notice"))
            $("#Description").val($(this).attr("data-Description"))
            $("#Status").val($(this).attr("data-Status"))
            $("#published").val($(this).attr("data-published"))
            $("#NoticeFile").val($(this).attr("data-NoticeFile"))
            $("#formaction").attr('action', 'editNotice/' + id)

        }
        //========Hourly Rate
        else if ($("#HourlyPayGrade").length) {
            $("#HourlyPayGrade").val($(this).attr("data-name"))
            $("#HourlyRate").val($(this).attr("data-HourlyRate"))
            $("#formaction").attr('action', 'editHourlyPayGrade/' + id)
        }
        //========Monthly Rate
        else if ($("#MonthlyPayGrade").length) {
            $("#MonthlyPayGrade").val($(this).attr("data-name"))
            $("#MonthlyRate").val($(this).attr("data-MonthlyRate"))
            $("#formaction").attr('action', 'editMonthlyPayGrade/' + id)
        }
        //========Settings
        // else if ($("#MonthlyPayGrade").length) {
        //     $("#MonthlyPayGrade").val($(this).attr("data-name"))
        //     $("#MonthlyRate").val($(this).attr("data-MonthlyRate"))
        //     $("#formaction").attr('action', 'editMonthlyPayGrade/' + id)
        // }
    })
    //=======show resume==========
    $(document).on("click", "#seeresume", function () {
        alert('../upload/' + $(this).attr("data-resume"))
        $("#sawresume").attr('src', '../upload/' + $(this).attr("data-resume"))
    })

    $(document).on("input", "#selectRole", function () {
        // alert($("#selectRole").val())
        var Role = $("#selectRole").val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/Permission/ajax/",
            type: "post",
            dataType: "json",
            data: { Role },
            success: function (res) {

                (res.PermRole[0].Administration[0].Add_role == 1 ? $("#inlineCheckbox12").prop('checked', true) : "");
                (res.PermRole[0].Administration[0].Add_Role_Permission == 1 ? $("#inlineCheckbox13").prop('checked', true) : "");
                (res.PermRole[0].Administration[0].Change_Password == 1 ? $("#inlineCheckbox14").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Department == 1 ? $("#inlineCheckbox15").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Designation == 1 ? $("#inlineCheckbox16").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Branch == 1 ? $("#inlineCheckbox17").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Manage_Employee == 1 ? $("#inlineCheckbox18").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Warning == 1 ? $("#inlineCheckbox19").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Termination == 1 ? $("#inlineCheckbox110").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Promotion == 1 ? $("#inlineCheckbox111").prop('checked', true) : "");
                (res.PermRole[0].Employee_Management[0].Add_role == 1 ? $("#inlineCheckbox112").prop('checked', true) : "");
                (res.PermRole[0].Leave_Management[0].ManageHoliday == 1 ? $("#inlineCheckbox113").prop('checked', true) : "");
                (res.PermRole[0].Leave_Management[0].PublicHoliday == 1 ? $("#inlineCheckbox114").prop('checked', true) : "");
                (res.PermRole[0].Leave_Management[0].WeeklyHoliday == 1 ? $("#inlineCheckbox115").prop('checked', true) : "");
                (res.PermRole[0].Leave_Management[0].ApplyforLeave == 1 ? $("#inlineCheckbox117").prop('checked', true) : "");
                (res.PermRole[0].Leave_Management[0].ManageLeave == 1 ? $("#inlineCheckbox118").prop('checked', true) : "");
                (res.PermRole[0].Leave_Management[0].MyLeaveReport == 1 ? $("#inlineCheckbox122").prop('checked', true) : "");
                (res.PermRole[0].Leave_Management[0].LeaveSummaryReport == 1 ? $("#inlineCheckbox121").prop('checked', true) : "");
                (res.PermRole[0].Attendance[0].ManageWorkShift == 1 ? $("#inlineCheckbox123").prop('checked', true) : "");
                (res.PermRole[0].Attendance[0].MyAttendanceReport == 1 ? $("#inlineCheckbox126").prop('checked', true) : "");
                (res.PermRole[0].Attendance[0].ManualAttendance == 1 ? $("#inlineCheckbox127").prop('checked', true) : "");
                (res.PermRole[0].Attendance[0].SummaryReport == 1 ? $("#inlineCheckbox128").prop('checked', true) : "");
                (res.PermRole[0].Attendance[0].DashboardAttendance == 1 ? $("#inlineCheckbox129").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].TaxRuleSetup == 1 ? $("#inlineCheckbox130").attr('checked', true) : "");
                (res.PermRole[0].Payroll[0].Allowance == 1 ? $("#inlineCheckbox131").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].Deduction == 1 ? $("#inlineCheckbox132").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].HourlyPayGrade == 1 ? $("#inlineCheckbox134").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].GenerateSalarySheet == 1 ? $("#inlineCheckbox135").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].PaymentHistory == 1 ? $("#inlineCheckbox137").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].MyPayroll == 1 ? $("#inlineCheckbox138").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].ApproveWorkHour == 1 ? $("#inlineCheckbox139").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].BonusSetting == 1 ? $("#inlineCheckbox140").prop('checked', true) : "");
                (res.PermRole[0].Payroll[0].GenerateBonus == 1 ? $("#inlineCheckbox141").prop('checked', true) : "");
                (res.PermRole[0].Performance[0].PerformanceCategory == 1 ? $("#inlineCheckbox142").prop('checked', true) : "");
                (res.PermRole[0].Performance[0].EmployeePerformance == 1 ? $("#inlineCheckbox144").prop('checked', true) : "");
                (res.PermRole[0].Performance[0].PerformanceSummaryReport == 1 ? $("#inlineCheckbox145").prop('checked', true) : "");
                (res.PermRole[0].Recruitment[0].JobPost == 1 ? $("#inlineCheckbox146").prop('checked', true) : "");
                (res.PermRole[0].Recruitment[0].JobCandidate == 1 ? $("#inlineCheckbox147").prop('checked', true) : "");
                (res.PermRole[0].Training[0].TrainingType == 1 ? $("#inlineCheckbox148").prop('checked', true) : "");
                (res.PermRole[0].Training[0].TrainingReport == 1 ? $("#inlineCheckbox150").prop('checked', true) : "");
                (res.PermRole[0].Award[0].Award == 1 ? $("#inlineCheckbox151").prop('checked', true) : "");
                (res.PermRole[0].Settings[0].GeneralSetting == 1 ? $("#inlineCheckbox154").prop('checked', true) : "");

            }
        })
    })
    //==================country
    $(document).on("input", "#country_tap", function () {
        //var value = $("#country_tap").val();
        var value = $("#country_tap option:selected").attr("data-countryId");
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/state/ajax/" + value,
            type: "get",
            dataType: "json",
            success: function (res) {
                $('#state_tap').empty()
                $("#state_tap").html("<option value selected disabled>select state</option>")
                $.each(res.states, function (data, value) {

                    $('#state_tap').append('<option value="' + value.name + '" data-state="' + value.isoCode + '" data-country="' + value.countryCode + '">' + value.name + '</option>');

                })
            }
        })
    })
    //================state
    $(document).on("input", "#state_tap", function () {
        var value = $("#state_tap option:selected").attr("data-state");
        var country = $("#state_tap option:selected").attr("data-country");
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/city/ajax",
            type: "post",
            dataType: "json",
            data: { country, value },
            success: function (res) {

                $.each(res.citys, function (data, value) {
                    $("#city_tap").append('<option value="' + value.name + '" >' + value.name + '</option>');
                })
            }
        })
    })
    //=======performance filter
    $(document).on("click", "#filter", function () {
        var stdate = $("#stdate").val();
        var endate = $("#endate").val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/report/ajax",
            type: "post",
            dataType: "json",
            data: { stdate, endate },
            success: function (res) {
                $("#stock_report_table").html(
                    '<div class="col-lg-12">' +
                    '<div class="card">' +
                    '<div class="card-body">' +
                    '<div class="table-responsive">' +
                    '<table class="table">' +

                    '<thead class="thead-info">' +
                    '<tr>' +
                    '<th scope="col">S / L</th>' +
                    '<th scope="col">Username</th>' +
                    '<th scope="col">Month</th>' +
                    '<th scope="col">rating</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody id="data">' +
                    '</tbody>' +
                    '</table>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'

                )
                var sr_no = 1
                $.each(res.EmployeePerformance, function (index, value) {
                    $("#data").append(
                        '<tr>' +
                        '<td>' + sr_no + '</td>' +
                        '<td>' + value.username + '</td>' +
                        '<td>' + value.Month + '</td>' +
                        '<td>' + value.rating + '</td>' +
                        '</tr>'
                    )
                    sr_no++
                })


            }
        })
    })

    //=======MyAttendance_filter
    $(document).on("click", "#MyAttendance_filter", function () {
        var stdate = $("#stdate").val();
        var endate = $("#endate").val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/MyAttendance_filterreport/ajax",
            type: "post",
            dataType: "json",
            data: { stdate, endate },
            success: function (res) {
                $("#stock_report_table").html(
                    '<div class="col-lg-12">' +
                    '<div class="card">' +
                    '<div class="card-body">' +
                    '<div class="table-responsive">' +
                    '<table class="table">' +

                    '<thead class="thead-info">' +
                    '<tr>' +
                    '<th scope="col">S / L</th>' +
                    '<th scope="col">Username</th>' +
                    '<th scope="col">Date</th>' +
                    '<th scope="col">Present Time</th>' +
                    '<th scope="col">Break Time</th>' +

                    '</tr>' +

                    '</thead>' +

                    '<tbody id="data">' +

                    '</tbody>' +
                    '</table>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
                var sr_no = 1
                $.each(res.Dates, function (index, value) {
                    $("#data").append(
                        '<tr>' +
                        '<td>' + sr_no + '</td>' +
                        '<td>' + value.Employee + '</td>' +
                        '<td>' + value.Date + '</td>' +
                        '<td>' + value.PresentTime + '</td>' +
                        '<td>' + value.BreakTime + '</td>' +
                        '</tr>'
                    )
                    sr_no++
                })


            }
        })
    })

    //=======Allowness=================
    $(document).on("input", "#AddAlowness", function () {
        var AddAlowness = $(this).val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/AddAlowness/ajax",
            type: "post",
            dataType: "json",
            data: { AddAlowness },
            success: function (res) {

                $("#AddAlownessfield").append(
                    '<div class="row">' +
                    '<div class="col-sm-6 col-md-6">' +
                    ' <div class="mb-3">' +

                    '<input name="AllowanaceName" readonly  class="form-control" type="text" value="' + res.AddAlowness + '">' +
                    '</div>' +
                    '</div>' +

                    '<div class="col-sm-6 col-md-6">' +
                    '<div class="mb-3">' +
                    '    <input name="AllowanaceAmount" class="form-control" type="text" value="' + res.Aumount + '">' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            }
        })
    })

    //=======Bonus=================
    $(document).on("input", "#AddBonusss", function () {
        // 
        // alert($(this).val())
        var Bonus = $(this).val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/AddBonus/ajax",
            type: "post",
            dataType: "json",
            data: { Bonus },
            success: function (res) {

                $("#AddBonuss").append(
                    '<div class="row">' +
                    '<div class="col-sm-6 col-md-6">' +
                    '<div class="mb-3">' +

                    '<input name="BonusName" readonly class="form-control" type="text" value="' + res.Bonus + '">' +
                    '</div>' +
                    '</div>' +

                    '<div class="col-sm-6 col-md-6">' +
                    '<div class="mb-3">' +
                    '    <input name="BonusAmount" class="form-control" type="text" value="' + res.BonusAmount + '">' +
                    '</div>' +
                    '</div>' +

                    '</div>'
                )
            }
        })
    })

    //=======Deduction=================
    $(document).on("input", "#AddDeductionss", function () {
        // 
        // alert($(this).val())
        var Deduction = $(this).val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/AddDeductionss/ajax",
            type: "post",
            dataType: "json",
            data: { Deduction },
            success: function (res) {

                $("#AddDeduction").append(
                    '<div class="row">' +
                    '<div class="col-sm-6 col-md-6">' +
                    '<div class="mb-3">' +

                    '<input name="DeductionName" readonly class="form-control" type="text" value="' + res.DeductionName + '">' +
                    '</div>' +
                    '</div>' +

                    '<div class="col-sm-6 col-md-6">' +
                    '<div class="mb-3">' +
                    '    <input name="DeductionAmount" class="form-control" type="text" value="' + res.DeductionAmount + '">' +
                    '</div>' +
                    '</div>' +

                    '</div>'
                )
            }
        })
    })

    // //=======MyAttendance_filter
    $(document).on("click", "#GenrateSlip", function () {

        var user = $("#user").val();
        var stdt = $("#stdt").val();
        var todt = $("#todt").val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/GenrateEmployeePayslip/ajax",
            type: "post",
            dataType: "json",
            data: { user, stdt, todt },
            success: function (res) {
                $("#sl").removeClass('d-none')
                $("#username").val(res.userinfo[0].username)
                $("#Department").val(res.userinfo[0].department)
                $("#Designation").val(res.userinfo[0].Designation)
                $("#Branch").val(res.userinfo[0].branch)
                $("#empId").val(res.userinfo[0].empId)
                $("#mobileno").val(res.userinfo[0].Mobilenum)
                $("#email").val(res.userinfo[0].email)
                $("#totalhour").val(res.hours + ":" + res.minites)
                $("#AmountbyHour").val(res.Total_Salary)
                $("#nod").val(res.NOD)
                $("#TaxableAmount").val(res.TaxableAmount)
                $("#aftertax").val(res.cuttax)
                // $.each(res.Allowanace, function (index, value) {

                //     $("#slipofsalary").append(
                //         '<div class="col-sm-6 col-md-4">' +
                //         '<div class="mb-3">' +
                //         '<label class="form-label f-w-500">' + value.AllowanaceName + 'Allowanace</label>' +
                //         '<input name="firstName" id="aftertax" class="form-control" type="text" value="' + value.limite + '" placeholder="John">' +
                //         ' </div>' +
                //         '</div>'
                //     )
                // })
                // $.each(res.Deduction, function (index, value) {

                //     $("#slipofsalary").append(
                //         '<div class="col-sm-6 col-md-4">' +
                //         '<div class="mb-3">' +
                //         '<label class="form-label f-w-500">' + value.DeductionName + 'Deduction</label>' +
                //         '<input name="firstName" id="aftertax" class="form-control" type="text" value="' + value.limite + '" placeholder="John">' +
                //         ' </div>' +
                //         '</div>'
                //     )
                // })
                // var bonas=0
                // $.each(res.BonusSetting, function (index, value) {
                //     $("#slipofsalary").append(
                //         '<div class="col-sm-6 col-md-4">' +
                //         '<div class="mb-3">' +
                //         '<label class="form-label f-w-500">' + value.BonusName + 'Bonus</label>' +
                //         '<input name="firstName" id="bonas'+bonas+'" class="form-control bonass" type="text" value="' + value.Bonus + '" placeholder="John">' +
                //         ' </div>' +
                //         '</div>'
                //         )
                //         bonas++
                // })
                //==========For Salary Table
                // $("#empcode").append('<small class="ms-3">' + res.userinfo[0].empId + '</small>')
                // $("#usname").append('<small class="ms-3">' + res.userinfo[0].username + '</small>')
                // $("#nod").append('<small class="ms-3">' + res.NOD + '</small>')
                // $("#Branch").append('<small class="ms-3">' + res.userinfo[0].branch + '</small>')
                // $("#email").append('<small class="ms-3">' + res.userinfo[0].email + '</small>')
                // $("#Designation").append('<small class="ms-3">' + res.userinfo[0].Designation + '</small>')
                // $("#nod").append('<small class="ms-3">' + res.NOD + '</small>')
                // $("#tablbody").append(
                //     '<tr>' +
                //     '<th scope="row">Total Houre</th>' +
                //     '<td>' + res.hours + ":" + res.minites + '</td>' +
                //     '</tr>' +
                //     '<tr>' +
                //     '<td>Taxable_Amount</td>' +
                //     '<td>' + res.TaxableAmount + '</td>' +
                //     '</tr>' +
                //     '<tr>' +
                //     '<th scope="row">Amount By Hour</th>' +
                //     '<td>' + res.Total_Salary + '</td>' +
                //     '</tr>'
                // )
                // $.each(res.BonusSetting, function (index, value) {

                //     $("#tablbody").append(
                //         '<tr>' +
                //         '<th scope="row">'+value.BonusName+'</th>' +
                //         '<td class="Bonussss">' + value.Bonus + '</td>' +
                //         '</tr>'
                //     )
                // })
                // $(document).on("input",".bonass",function(){
                //     $(".Bonussss").text($(this).val())
                // })

            }
        })
    })


    // //=======MyAttendance_filter
    $(document).on("click", "#Dashboardattendance", function () {

        var user = $("#user").val();
        var stdt = $("#stdt").val();
        var todt = $("#todt").val();
        var base_url = window.location.origin
        $.ajax({
            url: base_url + "/Dashboardattendance/ajax",
            type: "post",
            dataType: "json",
            data: { user, stdt, todt },
            success: function (res) {


                $("#attendance_tabal").append(
                    '<div class="card">' +
                    '<div class="card-header">' +
                    '<h4>Inverse Table</h4><span>Use a class <code>table-inverse</code> inside table element.</span>' +
                    '</div>' +
                    '<div class="table-responsive theme-scrollbar">' +
                    '<table class="table table-inverse">' +
                    '<thead>' +
                    '<tr class="border-bottom-light">' +
                    '<th scope="col">Date</th>' +
                    '<th scope="col">Clock In</th>' +
                    '<th scope="col">Clock Out</th>' +
                    '<th scope="col">Present Time</th>' +
                    '<th scope="col">Break Time</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody id="infotabl">' +

                    '</tbody>' +
                    '</table>' +
                    '</div>' +
                    '</div>'
                )
                $.each(res.Salary, function (index, value) {
                    $("#infotabl").append(
                        '<tr>' +
                        '<td>' + value.Date + '</td>' +
                        '<td>' + value.startclockin + '</td>' +
                        '<td>' + value.endClockOut + '</td>' +
                        '<td>' + value.PresentTime + '</td>' +
                        '<td>' + value.BreakTime + '</td>' +
                        '</tr>'
                    )
                })
            }
        })
    })


    //=============== checkedBox  
    $(document).on("click", ".xxx", function () {
        var x = 0;
        if (this.checked) {
            x++
            $(".xxx").val(x)
        } else {
            $(".xxx").val(x)

        }
    })


    //============StopWatch=====================================
    var [sec, min, hr] = [0, 0, 0]
    let DisplayTime = document.getElementById("displayTime");
    let displayBreakTime = document.getElementById("displayBreakTime");
    var [hour, minite, second] = [0, 0, 0]
    var [Breakhour, Breakminite, Breaksecond] = [0, 0, 0]
    var h, m, s;
    let timer = null;
    var lol = 1
    var startclockin = 0;
    var endClockOut = 0;
    function stopWatch() {
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 0) {
                min = 0;
                hr++;
                if (hr == 24) {
                    hr = 0;
                }
            }
        }
        h = hr < 10 ? "0" + hr : hr;
        m = min < 10 ? "0" + min : min;
        s = sec < 10 ? "0" + sec : sec;

        if (lol == 1) {
            DisplayTime.innerHTML = h + ":" + m + ":" + s;

        } else {
            displayBreakTime.innerHTML = h + ":" + m + ":" + s;
        }

        // DisplayTime.innerHTML = h + ":" + m + ":" + s;
        // displayBreakTime.innerHTML= h + ":" + m + ":" + s;
    }
    //=====================================================
    $(document).on("click", "#Start", function () {
        startclockin = new Date()
        $("#startclockin").val(startclockin)
        $("#timeofwork").val("00:00");
        $("#timeofBreak").val("00:00");
        $("#endClockOut").val("2000-01-01");
        // $("#timeclick").submit()
        lol = 1
        if (timer !== null) {
            clearInterval(timer)
        }
        [hr, min, sec] = [hour, minite, second]
        timer = setInterval(stopWatch, 1000);
        $("#btnofswitch").html('<button class="btn  btn-success ms-3 me-3" type="button" id = "Break" data - bs - original - title=""title = "" > Break</button > ' +
            '<button class="btn  btn-danger ms-3 me-3" type="button" id = "Clockout" data - bs - original - title=""title = "" > Clock Out</button >  ')
    })

    $(document).on("click", "#Break", function () {
        [hour, minite, second] = [hr, min, sec]
        clearInterval(timer)
        //--starting of break
        lol = 2;
        if (timer !== null) {
            clearInterval(timer)
        }
        [hr, min, sec] = [Breakhour, Breakminite, Breaksecond]

        timer = setInterval(stopWatch, 1000);
        $("#btnofswitch").html('<button class="btn  btn-success ms-3 me-3" type="button" id="BreakOut" data-bs-original-title="" title="">Break Out</button> ' +
            '<button class="btn  btn-danger ms-3 me-3" type="button" id="Clockout" data-bs-original-title="" title="">Clock Out</button>')
    })
    //=================submite time===========================
    $(document).on("click","#Start",function(){
        alert(1234)
        var base_url = window.location.origin
        var PresentTime=$("#timeofwork").val()
        var BreakTime=$("#timeofBreak").val()
        var startclockin=$("#startclockin").val()
        var endClockOut=$("#endClockOut").val()
        $.ajax({
            url: base_url + "/Time",
            type: "post",
            dataType: "json",
            data: { PresentTime,BreakTime,startclockin,endClockOut },
            success: function (res) {
                alert("You are Clocked in")
            }
        })
    })

    //=======Break=============================================================
    $(document).on("click", "#BreakOut", function () {
        [Breakhour, Breakminite, Breaksecond] = [hr, min, sec]

        clearInterval(timer)
        //--starting clock
        lol = 1
        if (timer !== null) {
            clearInterval(timer)
        }
        [hr, min, sec] = [hour, minite, second]
        timer = setInterval(stopWatch, 1000);
        $("#btnofswitch").html('<button class="btn  btn-success ms-3 me-3" type="button" id="Break" data-bs-original-title="" title="">Break</button> ' +
            '<button class="btn  btn-danger ms-3 me-3" type="button" id="Clockout" data-bs-original-title="" title="">Clock Out</button>')
    })
    //====ClockOut=======================================================================
    $(document).on("click", "#Clockout", function () {
        alert("clcok out")
        endClockOut = new Date();
        $("#endClockOut").val(endClockOut)
        clearInterval(timer);
        if (lol == 1) {
            let a = hr < 10 ? "0" + hr : hr
            let b = min < 10 ? "0" + min : min
            $("#timeofwork").val(a + ":" + b);

            let x = Breakhour < 10 ? "0" + Breakhour : Breakhour;
            let y = Breakminite < 10 ? "0" + Breakminite : Breakminite;
            $("#timeofBreak").val(x + ":" + y)
            hr = 0
            min = 0
            sec = 0
            

        } else if (lol == 2) {
            let x = hour < 10 ? "0" + hour : hour;
            let y = minite < 10 ? "0" + minite : minite;
            $("#timeofwork").val(x + ":" + y);
            let a = hr < 10 ? "0" + hr : hr
            let b = min < 10 ? "0" + min : min
            $("#timeofBreak").val(a + ":" + b);
            hr = 0
            min = 0
            sec = 0
        }
        alert($("#timeofwork").val())
        alert($("#timeofBreak").val())
        $("#timeclick").submit()
    })

    //===============tex
    $(document).on("input", ".cal", function () {
        var currentRow = $(this).closest("#fiellllds");
        currentRow.find("#Tax_Rate")
        // currentRow.find("#Taxable_Amount").val((currentRow.find("#register_packages_length").val() * currentRow.find("#register_packages_width").val() * currentRow.find("#register_packages_height").val() / $("#edit_register_packages_vol_per").val()).toFixed(2))
        const income = currentRow.find("#Total_Income").val()
        const rate = currentRow.find("#Tax_Rate").val()
        currentRow.find("#Taxable_Amount").val(((income / 100) * rate).toFixed(0))
        $("#Taxable_Amounte").val(((income / 100) * rate).toFixed(0))
    })
    $(document).on("click", "#addfield", function () {
        $("#table").append($("#fields").html())
    })
    $(document).on("input", "#Total_Income", function () {
        $("#Total_Incomee").val($("#Total_Income").val())
    })
    $(document).on("input", "#Tax_Rate", function () {
        $("#Tax_Ratee").val($("#Tax_Rate").val())
    })
    $(document).on("input", "#Taxable_Amount", function () {
        $("#Taxable_Amounte").val($("#Taxable_Amount").val())
    })
    $(document).on("click", "#newtax", function () {
        $("#submitnewtex").submit()
    })

    $(document).on("input", "#Total_Income", function () {
        $("#Total_Incomeee").val($("#Total_Income").val())
    })
    $(document).on("input", "#Tax_Rate", function () {
        $("#Tax_Rateee").val($("#Tax_Rate").val())
    })
    $(document).on("input", "#Taxable_Amount", function () {
        $("#Taxable_Amountee").val($("#Taxable_Amount").val())
    })
    $(document).on("click", "#updatetax", function () {

        // $("#Total_Incomeee").val($(this).attr("data-Total_Incomeee"))
        // $("#Tax_Rateee").val($(this).attr("data-Tax_Rateee"))
        // $("#Taxable_Amountee").val($(this).attr("data-Taxable_Amountee"))

        var currentRow = $(this).closest("#fiellllds");

        // currentRow.find("#Taxable_Amount").val((currentRow.find("#register_packages_length").val() * currentRow.find("#register_packages_width").val() * currentRow.find("#register_packages_height").val() / $("#edit_register_packages_vol_per").val()).toFixed(2))
        $("#Total_Incomeee").val(currentRow.find("#Total_Income").val())
        $("#Tax_Rateee").val(currentRow.find("#Tax_Rate").val())
        $("#Taxable_Amountee").val(currentRow.find("#Taxable_Amount").val())
        $("#newsubmitnewtex").attr('action', '/UpdateTaxRuleSetup/' + $(this).attr("data-id"))
        $("#newsubmitnewtex").submit()
    })


    $(document).on("click", "#fields", function () {

        var currentRow = $(this).closest("#fiellllds");
        currentRow.find("#register_packages_weight_vol").val((currentRow.find("#register_packages_length").val() * currentRow.find("#register_packages_width").val() * currentRow.find("#register_packages_height").val() / $("#edit_register_packages_vol_per").val()).toFixed(2))

        for (let i = 0; i < hidden_loop_val.length; i++) {

            $("#edit_register_packages_weight_vol_" + i).val(((parseFloat($("#edit_register_packages_length_" + i).val()) * parseFloat($("#edit_register_packages_width_" + i).val() * parseFloat($("#edit_register_packages_height_" + i).val()))) / parseFloat($("#edit_register_packages_vol_per").val())).toFixed(2))
        }
    })

    //===========salary pay grade
    $("#hr").hide()
    $("#mn").hide()
    $(document).on("input", "#PayGrad", function () {

        if ($("#PayGrad").val() == "Full-Time") {
            $("#paygrade").hide()
            $("#mn").hide()
            $("#hr").show()

        } else if ($("#PayGrad").val() == "Part-Time") {
            $("#paygrade").hide()
            $("#hr").hide()
            $("#mn").show()
        }
    })



    /*-------------------------------
            Convert pdf
    ----------------------------------*/
    $(document).on("click", "#getpdf", function () {

        html2canvas($('#Salaryslippdf')[0], {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Employee Salary Report.pdf");
            }
        });
    });
})

$(document).on("click", "#getpdf", function () {

    html2canvas($('#Salaryslippdf')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Employee Salary Report.pdf");
        }
    });

});
/*-------------------------------
          showing image
  ----------------------------------*/

var image = document.getElementById("image-input");
var previewImage = document.getElementById("preview")
image.addEventListener('change', function (event) {
    if (event.target.files.length == 0) {
        return;
    }
    var tempURL = URL.createObjectURL(event.target.files[0]);
    previewImage.setAttribute('src', tempURL)
});


