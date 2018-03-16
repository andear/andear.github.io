function modifyButton(){
    document.getElementById('modify').style.display='block';
    document.getElementById("present").style.display='none';
}

function saveProfile(){
    document.getElementById('present').style.display='block';
    document.getElementById("modify").style.display='none';

    var age = document.getElementById("update-age").value;
    var gender = document.getElementById("update-gender").value;
    var weight = document.getElementById("update-weight").value;
    var height = document.getElementById("update-height").value;
    var waist = document.getElementById("update-waist").value;
    var bust = document.getElementById("update-bust").value;

    var bmi = weight/(2.204*Math.pow(height/100,2))

    document.getElementById("show-age").innerHTML= age;
    document.getElementById("show-gender").innerHTML= gender;
    document.getElementById("show-weight").innerHTML= weight + " lb";
    document.getElementById("show-height").innerHTML= height + " cm";
    document.getElementById("show-waist").innerHTML= waist + " cm";
    document.getElementById("show-bust").innerHTML= bust + " cm";

    document.getElementById("show-BMI").innerHTML = bmi.toFixed(2);

    setTimeout(function() {
        alert("Information Successfully Updated!");
    }, 50);

}

function changeInfo() {
    document.getElementById('subscribe').style.display='block';
}

function confirmInfo() {
    document.getElementById('subscribe').style.display='none';

    var firstName = document.getElementById("info-first-name").value;
    var lastName = document.getElementById("info-last-name").value;
    var occupation = document.getElementById("info-occupation").value;
    var address = document.getElementById("info-address").value;
    var phone = document.getElementById("info-phone").value;
    var email = document.getElementById("info-email").value;

    var logo_occupation = "<i class=\"fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal\"></i>";
    var logo_address = "<i class=\"fa fa-home fa-fw w3-margin-right w3-large w3-text-teal\"></i>";
    var logo_phone = "<i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal\"></i>";
    var logo_email = "<i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i>";
    if (firstName != "") document.getElementById("first-name").innerHTML= firstName;

    if(lastName != "") document.getElementById("last-name").innerHTML= lastName;

    if(occupation != "") document.getElementById("occupation").innerHTML= logo_occupation + occupation;

    if(address != "") document.getElementById("address").innerHTML= logo_address + address;

    if(phone != "") document.getElementById("phone").innerHTML= logo_phone + phone;

    if(email != "") document.getElementById("email").innerHTML= logo_email + email;
}

function currentPlan() {
    window.location = "group.html";
}


function login() {
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;
    if (uname != "JamesDean" || psw != "330HCI"){
        alert("User Name and Password do not match!");
        return;
    }
    window.location = "welcome.html";
}

function remindPassword() {
    alert("We supposed you have signed up and following is the information you need:\n" +
        "\tUser Name:    JamesDean\t\n" +
        "\tPassword :    330HCI\t")
}