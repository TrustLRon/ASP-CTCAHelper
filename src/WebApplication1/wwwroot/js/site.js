function calculateBMI(height, weight) {
    var bmiResult = (weight / (height * height)).toFixed(1);

    if (document.getElementById("height").value == "" || document.getElementById("weight").value == "") {
        document.getElementById("contrast").innerHTML = '0.0';
        document.getElementById("result").innerHTML = '0.0';
        var title = "Error";
        var text = "Please enter height and weight";
        callModal(title, text);
    }
    else if (bmiResult <= 30) {
        if (document.getElementById("CTCA").checked == true)
        {
            document.getElementById("contrast").innerHTML = '50mL';
            document.getElementById("result").innerHTML = bmiResult;
            examType = "CTCA";
            bmi = bmiResult;
        }
        else if (document.getElementById("CABG").checked == true)
        {
            document.getElementById("contrast").innerHTML = '75mL';
            document.getElementById("result").innerHTML = bmiResult;
            examType = "CABG";
            bmi = bmiResult;
        }
        else if (document.getElementById("TRO").checked == true) {
            document.getElementById("contrast").innerHTML = '100mL';
            document.getElementById("result").innerHTML = bmiResult;
            examType = "Triple Rule-Out";
            bmi = bmiResult;
        }
    }
    else if (bmiResult > 37) {
        if (document.getElementById("CTCA").checked == true)
        {
            document.getElementById("contrast").innerHTML = '75mL';
            document.getElementById("result").innerHTML = bmiResult;
            examType = "CTCA";
            bmi = bmiResult;
        }
        else if (document.getElementById("CABG").checked == true)
        {
            document.getElementById("contrast").innerHTML = '100mL';
            document.getElementById("result").innerHTML = bmiResult;
            examType = "CABG";
            bmi = bmiResult;
        }
        else if (document.getElementById("TRO").checked == true)
        {
            document.getElementById("contrast").innerHTML = '125mL';
            document.getElementById("result").innerHTML = bmiResult;
            examType = "Triple Rule-Out";
            bmi = bmiResult;
        }
    }
    else if (bmiResult > 30 && bmiResult <= 36) {
        if (document.getElementById("CTCA").checked == true) {
            document.getElementById("contrast").innerHTML = '50mL/75mL';
            document.getElementById("result").innerHTML = bmiResult;
            var title = "Check Contrast";
            var text = "If chest not too big or muscular, consider 50mL, if not 75mL.";
            callModal(title, text);
            examType = "CTCA";
            bmi = bmiResult;
        }
        else if (document.getElementById("CABG").checked == true) {
            document.getElementById("contrast").innerHTML = '75mL/100mL';
            document.getElementById("result").innerHTML = bmiResult;
            var title = "Check Contrast";
            var text = "If chest not too big or muscular, consider 75mL, if not 100mL.";
            callModal(title, text);
            examType = "CABG";
            bmi = bmiResult;
        }
        else if (document.getElementById("TRO").checked == true) {
            document.getElementById("contrast").innerHTML = '150mL';
            document.getElementById("result").innerHTML = bmiResult;
            examType = "Triple Rule-Out";
            bmi = bmiResult;
        }
    }
}

function calculateDLP(caScore, ctca) {
    var caScoreDLPResult = (caScore * 0.014).toFixed(2);
    var ctcaDLPResult = (ctca * 0.014).toFixed(2);

    if (document.getElementById("caScoreDLP").value == "" && document.getElementById("ctcaDLP").value == "") {
        document.getElementById("caScoreResult").innerHTML = '0.00mSv';
        document.getElementById("ctcaResult").innerHTML = '0.00mSv';
        var title = "Error";
        var text = "Please enter Ca Score and/or CTCA DLP";
        callModal(title, text);
    }
    else
    {
        if (!document.getElementById("caScoreDLP").value == "" && document.getElementById("ctcaDLP").value == "")
        {
            document.getElementById("caScoreResult").innerHTML = caScoreDLPResult + 'mSv';
            document.getElementById("ctcaResult").innerHTML = '0.00mSv';
            caScoreDoseVal = caScoreDLPResult;
            ctcaDoseVal = ctcaDLPResult;
            caScoreDLPVal = $("#caScoreDLP").val();
            ctcaDLPVal = $("#ctcaDLP").val();
        }
        else if (!document.getElementById("ctcaDLP").value == "" && document.getElementById("caScoreDLP").value == "")
        {
            document.getElementById("caScoreResult").innerHTML = '0.00mSv';
            document.getElementById("ctcaResult").innerHTML = ctcaDLPResult + 'mSv';
            caScoreDoseVal = caScoreDLPResult;
            ctcaDoseVal = ctcaDLPResult;
            caScoreDLPVal = $("#caScoreDLP").val();
            ctcaDLPVal = $("#ctcaDLP").val();
        }
        else
        {
            document.getElementById("caScoreResult").innerHTML = caScoreDLPResult + 'mSv';
            document.getElementById("ctcaResult").innerHTML = ctcaDLPResult + 'mSv';
            caScoreDoseVal = caScoreDLPResult;
            ctcaDoseVal = ctcaDLPResult;
            caScoreDLPVal = $("#caScoreDLP").val();
            ctcaDLPVal = $("#ctcaDLP").val();
        }
    }
}

function clearResultBMI() {
    var clearValues = 0;
    var result = $("#result");
    var contrast = $("#contrast");
    var height = $("#height");
    var weight = $("#weight");

    result.html(clearValues.toFixed(1));
    contrast.html(clearValues.toFixed(1));
    height.val("");
    weight.val("");
    examType = "";
    bmi = "";
}

function clearResultDLP() {
    var clearValues = 0;
    document.getElementById("caScoreResult").innerHTML = clearValues.toFixed(2) + 'mSv';
    document.getElementById("ctcaResult").innerHTML = clearValues.toFixed(2) + 'mSv';
    document.getElementById("caScoreDLP").value = "";
    document.getElementById("ctcaDLP").value = "";
}

function callModal(title, text) {
    $("#modalTitle").html(title);
    $("#modalText").html(text);
    $("#myModal").modal('show');
}

var techsArray = ["N/A", "AHR", "AMN", "BPD", "EMS", "ETS", "HHY", "HMD", "HWN", "JDD", "JPS", "KNG", "LRE", "MAE", "PJS", "SWM", "TBE", "TBN", "VPR"];

function populateDropdown(elementBox) {
    var dropdown = document.getElementById(elementBox);

    for (var i = 0; i < techsArray.length; ++i) {
        dropdown[dropdown.length] = new Option(techsArray[i], techsArray[i]);
    }
}


var patientName = "";
var examType = "";
var bmi = "";
var assignBoxVal = "";
var ppwBoxVal = "";
var chestBoxVal = "";
var cascoreBoxVal = "";
var widenBoxVal = "";
var betalocBoxVal = "";
var betalocAmountBoxVal = "";
var nitroBoxVal = "";
var ctcaBoxVal = "";
var scannedFromBoxVal = "";
var scannedToBoxVal = "";
var chestScanBoxVal = "";
var ecgBoxVal = "";
var bestBoxVal = "";
var bestVolumeVal = "";
var bestUnitsVal = "";
var sendVolBoxVal = "";
var emailBoxVal = "";
var bpBoxVal = "";
var caScoreDoseVal = "";
var ctcaDoseVal = "";
var caScoreDLPVal = "";
var ctcaDLPVal = "";
var printTally = 0;

function startNext() {
    patientName = "";
    examType = "";
    bmi = "";
    assignBoxVal = "";
    ppwBoxVal = "";
    chestBoxVal = "";
    cascoreBoxVal = "";
    widenBoxVal = "";
    betalocBoxVal = "";
    betalocAmountBoxVal = "";
    nitroBoxVal = "";
    ctcaBoxVal = "";
    scannedFromBoxVal = "";
    scannedToBoxVal = "";
    chestScanBoxVal = "";
    ecgBoxVal = "";
    bestBoxVal = "";
    bestVolumeVal = "";
    bestUnitsVal = "";
    sendVolBoxVal = "";
    emailBoxVal = "";
    bpBoxVal = "";
    caScoreDoseVal = "";
    ctcaDoseVal = "";
    caScoreDLPVal = "";
    ctcaDLPVal = "";

    $("#title").html("Patient Name");
    $("#message").html("Enter patient name.");
    $("#nameRow").show();
    $("#startRow").hide();
}

function nameNext() {
    if (document.getElementById("firstName").value == "" || document.getElementById("lastName").value == "")
    {
        var title = "Error";
        var text = "Please enter patient first and last name before continuing";
        callModal(title, text);
    }
    else
    {
        document.getElementById("title").innerHTML = "BMI";
        document.getElementById("message").innerHTML = "Enter patient height and weight to calculate BMI.";
        $("#bmiRow").show();
        $("#nameRow").hide();
        patientName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value
    }
}

function bmiNext() {
    if (examType == "" || bmi == "")
    {
        var title = "Error";
        var text = "Please calculate BMI before continuing";
        callModal(title, text);
    }
    else
    {
        document.getElementById("title").innerHTML = "Checklist";
        document.getElementById("message").innerHTML = "Enter technician initials and check off as completed.";
        $("#checklistRow").show();
        $("#bmiRow").hide();

        populateDropdown("assignBox");
        populateDropdown("ppwBox");
        populateDropdown("chestBox");
        populateDropdown("cascoreBox");
        populateDropdown("widenBox");
        populateDropdown("betalocBox");
        populateDropdown("nitroBox");
        populateDropdown("ctcaBox");
        populateDropdown("chestScanBox");
        populateDropdown("ecgBox");
        populateDropdown("bestBox");
        populateDropdown("sendVolBox");
        populateDropdown("emailBox");
        populateDropdown("bpBox");
    }
}

function checklistNext() {
    if (document.getElementById("assignCheck").checked == false ||
        document.getElementById("ppwCheck").checked == false ||
        document.getElementById("chestCheck").checked == false ||
        document.getElementById("cascoreCheck").checked == false ||
        document.getElementById("widenCheck").checked == false ||
        document.getElementById("betalocCheck").checked == false ||
        document.getElementById("nitroCheck").checked == false ||
        document.getElementById("ctcaCheck").checked == false ||
        document.getElementById("chestScanCheck").checked == false ||
        document.getElementById("ecgCheck").checked == false ||
        document.getElementById("bestCheck").checked == false ||
        document.getElementById("bestVolume").value == "" ||
        document.getElementById("sendVolCheck").checked == false ||
        document.getElementById("emailCheck").checked == false ||
        document.getElementById("bpCheck").checked == false)
    {
        var title = "Error";
        var text = "Please check all values are filled in and checked off before continuing";
        callModal(title, text);
    }
    else
    {
        assignBoxVal = $("#assignBox").val();
        ppwBoxVal = $("#ppwBox").val();
        chestBoxVal = $("#chestBox").val();
        cascoreBoxVal = $("#cascoreBox").val();
        widenBoxVal = $("#widenBox").val();
        betalocBoxVal = $("#betalocBox").val();
        betalocAmountBoxVal = $("#betalocAmountBox").val();
        nitroBoxVal = $("#nitroBox").val();
        ctcaBoxVal = $("#ctcaBox").val();
        scannedFromBoxVal = $("#scannedFromBox").val();
        scannedToBoxVal = $("#scannedToBox").val();
        chestScanBoxVal = $("#chestScanBox").val();
        ecgBoxVal = $("#ecgBox").val();
        bestBoxVal = $("#bestBox").val();
        bestVolumeVal = $("#bestVolume").val();
        bestUnitsVal = $("#bestUnits").val();
        sendVolBoxVal = $("#sendVolBox").val();
        emailBoxVal = $("#emailBox").val();
        bpBoxVal = $("#bpBox").val();

        document.getElementById("title").innerHTML = "DLP";
        document.getElementById("message").innerHTML = "Enter DLP to calculate patient dose.";
        $("#dlpRow").show();
        $("#checklistRow").hide();
    }

}

function finishNext() {
    if (caScoreDoseVal == "" || ctcaDoseVal == "") {
        var title = "Error";
        var text = "Please calculate patient dose before continuing";
        callModal(title, text);
    }
    else {
        $("#printRow").show();
        $("#dlpRow").hide();
        $("#title").html("Print");
        $("#message").html("Please print the finished page using the buttons at the bottom.");

        $("#nameTitle").html(patientName);
        var d = new Date();
        $("#dateTitle").html(d.toDateString());

        $("#ExamType").html(examType);
        $("#BMI").html(bmi);
        $("#Scanned").html(scannedFromBoxVal + " to " + scannedToBoxVal);
        $("#BestVolume").html(bestVolumeVal + bestUnitsVal);

        $("#CaScoreDLPPrint").html(caScoreDoseVal + "mGy.cm");
        $("#CTCADLPPrint").html(ctcaDoseVal + "mGy.cm");
        $("#CaScoreDosePrint").html(caScoreDoseVal + "mSv");
        $("#CTCADosePrint").html(ctcaDoseVal + "mSv");
        
        $("#AssignRadiologist").html(assignBoxVal);
        $("#PutIntoPPW").html(ppwBoxVal);
        $("#CheckIfChestNeeded").html(chestBoxVal);

        $("#CalciumScoreScan").html(cascoreBoxVal);
        $("#WidenVolume2and3").html(widenBoxVal);
        $("#Betaloc").html(betalocBoxVal);
        $("#BetalocAmount").html(betalocAmountBoxVal);
        $("#NitroLingualSpray").html(nitroBoxVal);
        $("#CTCAScan").html(ctcaBoxVal);
        $("#PostChest").html(chestScanBoxVal);

        $("#SendEmail").html(emailBoxVal);
        $("#SendECG").html(ecgBoxVal);
        $("#SelectBestVolume").html(bestBoxVal);
        $("#Send3Volumes").html(sendVolBoxVal);

        $("#TakeBloodPressure").html(bpBoxVal);

        $("#BigBestVol").html(bestVolumeVal + bestUnitsVal);
    }
}

function namePrev() {
    document.getElementById("title").innerHTML = "New Scan";
    document.getElementById("message").innerHTML = "Enter details for a new scan.";
    $("#startRow").show();
    $("#nameRow").hide();
}

function bmiPrev() {
    document.getElementById("title").innerHTML = "Patient Name";
    document.getElementById("message").innerHTML = "Enter patient name";
    $("#nameRow").show();
    $("#bmiRow").hide();
}

function checklistPrev() {
    document.getElementById("title").innerHTML = "BMI";
    document.getElementById("message").innerHTML = "Enter technician initials and check off as completed.";
    $("#bmiRow").show();
    $("#checklistRow").hide();
}

function dlpPrev() {
    $("#title").html("Checklist");
    $("#message").html("Enter patient height and weight to calculate BMI.");
    $("#checklistRow").show();
    $("#dlpRow").hide();
}

function printChecklist() {
    printTally++;
    window.print();
}

function restartNewScan() {
    if (printTally == 0) {
        var title = "Print";
        var text = "Please print the sheet before restarting";
        callModal(title, text);
    }
    else {
        printTally = 0;
        window.location.href = "NewScan";
    }
}
