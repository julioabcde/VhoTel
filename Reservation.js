let errorMessage = document.getElementById('error-message');

function validate(){
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let checkin = document.getElementById('input-in').value;
    let checkout = document.getElementById('input-out').value;
    let type = document.getElementById('input-type').value;
    let person = document.getElementById('input-person').value;
    let agreement = document.getElementById('input-agreement');

    if(!validateName(name)){
        return;
    }
    else if(!validateEmail(email)){
        return;
    }else if(!validatePhone(phone)){
        return;
    }else if(!validateType(type)){
        return;
    }else{
        errorMessage.innerHTML = "Everything's Valid"
    }
}

function validateName(name){
    if(name.length < 5){
        errorMessage.innerHTML = "Name min 5 characters";
        return false;
    }
    return true;
}
function validateEmail(email){
    if(email.length < 5){
        errorMessage.innerHTML = "Email isn't appropriate";
        return false;
    }
    return true;
}
function validatePhone(phone){
    if(phone.length < 11 || phone.length > 13){
        errorMessage.innerHTML = "Phone number isn't registered"
        return false;
    }
    return true;
}
function validateType(type){
    if(type == ""){
        errorMessage.innerHTML = "Select one of any type"
        return false;   
    }
    return true;
}
function validateNumber(person){
    if(person.length > 1){
        errorMessage.innerHTML = "Input the number of person"
        return false;
    }
    return true;
}
