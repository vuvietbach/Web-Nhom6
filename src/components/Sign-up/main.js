var isValid = true;

function isValidPhoneNumber() {
    var input = document.querySelector(".phone-number-input").value;
    var len = input.length;
    if(len != 10){
        document.querySelector(".validate-phone-number").innerHTML = "Số điện thoại phải gồm 10 chữ số";
        isValid = false;
    }
    else {
        document.querySelector(".validate-phone-number").innerHTML = "";
        isValid = true;
    }
}

function  isValidName(){
    var name =document.querySelector(".name-input").value;
    if(name =="") {
        document.querySelector(".validate-account-name").innerHTML = "Vui lòng nhập tên tài khoản";
        isValid = false;
    }
    else {
        document.querySelector(".validate-account-name").innerHTML = "";
        isValid = true;
    }
}    

function  isValidPassword(){
    var input = document.querySelector(".password-input").value;
    if(input.length<8 || input.length >15) {
        document.querySelector(".validate-password").innerHTML = "Vui lòng nhập mật khẩu từ 8-15 kí tự";
        isValid = false;
    }
    else {
        document.querySelector(".validate-password").innerHTML = "";
        isValid = true;
    }
}

function isValidConfirmPassword(){
    var input = document.querySelector(".confirm-password").value;
    if(input.length<8 || input.length >15) {
        document.querySelector(".validate-confirm-password").innerHTML = "Vui lòng nhập mật khẩu từ 8-15 kí tự";
        isValid = false;
    }
    else if(input !== document.querySelector(".password-input").value){
        document.querySelector(".validate-confirm-password").innerHTML = "Vui lòng nhập đúng mật khẩu";
        isValid = false;
    }
    else {
        document.querySelector(".validate-confirm-password").innerHTML = "";
        isValid = true;
    }
    return true;
}

export function post(e){
    e.preventDefault();
    isValidPhoneNumber();
    isValidName();
    isValidPassword();
    isValidConfirmPassword();
    if(!isValid){

    }
}



  