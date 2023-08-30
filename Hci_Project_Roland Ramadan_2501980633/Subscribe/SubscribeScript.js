var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");
var error5 = document.getElementById("error5");

function check(){

    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;

    var name = document.forms['subscribe']['name'].value;
    if(name.length < 3){
        document.getElementById("error1").innerHTML = "Name must be longer than 3 characters!";
        document.getElementById("error1").style.display = 'block';
    } else {
        document.getElementById("error1").style.display = 'none';
        flag1 = true;
    }

    var email = document.forms['subscribe']['email'].value;
    flag2 = checkEmail(email);

    var number = document.forms['subscribe']['phone'].value;
    flag3 = checkNumber(number);

    var country = document.forms['subscribe']['country'].value;
    if(country == "Country"){
        document.getElementById("error4").innerHTML = "Please Select a Country You are from";
        document.getElementById("error4").style.display = 'block';
    } else{
        document.getElementById("error4").style.display = 'none';
        flag4 = true;
    } 

    var checkbox = document.getElementById("myCheck")
    if(checkbox.checked == true){
        document.getElementById("error5").style.display = 'none';
        flag5 = true;
    } else {
        document.getElementById("error5").innerHTML = "You need to agree to the terms and conditions";
        document.getElementById("error5").style.display = 'block';
    }

    if(flag1 && flag2 && flag3 && flag4 && flag5){
        document.forms['subscribe'].reset();
        alert("You are subscribed to our product!");
    }

}

function checkEmail(email){

    var len = email.length;
    if(email.length < 2){
        document.getElementById("error2").innerHTML = "Email must be longer than 2 characters!";
        document.getElementById("error2").style.display = 'block';
        return false;
    } else if (!(checkSymbol(email))){
        document.getElementById("error2").innerHTML = "Please input email in the correct format";
        document.getElementById("error2").style.display = 'block';
        return false;
    } else {
        document.getElementById("error2").style.display = 'none';
        return true;
    }

}

function checkSymbol(email){

    var len = email.length;

    if(!(email.includes("@")) || !(email.includes("."))){
        return false;
    }
    if(email.indexOf("@") < 1 || email.indexOf("@") >= len-1){
        return false;
    }
    if(email.indexOf(".") < 1 || email.indexOf(".") >= len-1){
        return false;
    }
    if(email.indexOf(".") <= email.indexOf("@")+2){
        return false;
    }

    return true;
}


function checkNumber(number){

    if(number.length < 4){
        document.getElementById("error3").innerHTML = "Phone number must be longer than 4 characters!";
        document.getElementById("error3").style.display = 'block';
        return false;
    }

    var len = number.length;
    var flag = true;
    for (let i = 0; i<len; i++){
        if(isNaN(number[i])){
            flag = false;
            break;
        }
    }

    if(!flag){
        document.getElementById("error3").innerHTML = "Phone number must be numerical";
        document.getElementById("error3").style.display = 'block';
        return false;
    } else {
        document.getElementById("error3").style.display = 'none';
        return true;
    }
}