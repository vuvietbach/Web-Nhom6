var isValid1, isValid2, isValid3, isValid4;
export var isValid = false;

export function isValidPhoneNumber() {
    var input = document.querySelector(".phone-number-input").value;
    var len = input.length;
    if(len != 10){
        document.querySelector(".validate-phone-number").innerHTML = "Số điện thoại phải gồm 10 chữ số";
        isValid1 = false;
    }
    else {
        document.querySelector(".validate-phone-number").innerHTML = "";
        isValid1 = true;
    }
    isValid = isValid1&&isValid2&&isValid3&&isValid4;
}

export function  isValidName(){
    var name =document.querySelector(".name-input").value;
    if(name =="") {
        document.querySelector(".validate-account-name").innerHTML = "Vui lòng nhập tên tài khoản";
        isValid2 = false;
    }
    else {
        document.querySelector(".validate-account-name").innerHTML = "";
        isValid2 = true;
    }
    isValid = isValid1&&isValid2&&isValid3&&isValid4;
}    

export function  isValidPassword(){
    var input = document.querySelector(".password-input").value;
    if(input.length<8 || input.length >15) {
        document.querySelector(".validate-password").innerHTML = "Vui lòng nhập mật khẩu từ 8-15 kí tự";
        isValid3 = false;
    }
    else {
        document.querySelector(".validate-password").innerHTML = "";
        isValid3 = true;
    }
    isValid = isValid1&&isValid2&&isValid3&&isValid4;
}

export function isValidConfirmPassword(){
    var input = document.querySelector(".confirm-password").value;
    if(input.length<8 || input.length >15) {
        document.querySelector(".validate-confirm-password").innerHTML = "Vui lòng nhập mật khẩu từ 8-15 kí tự";
        isValid4 = false;
    }
    else if(input !== document.querySelector(".password-input").value){
        document.querySelector(".validate-confirm-password").innerHTML = "Vui lòng nhập đúng mật khẩu";
        isValid4 = false;
    }
    else {
        document.querySelector(".validate-confirm-password").innerHTML = "";
        isValid4 = true;
    }
    isValid = isValid1&&isValid2&&isValid3&&isValid4;
    return true;
}

export function post(e){
    e.preventDefault();
    if(!isValid){

    }
}

export function isPost(){
    if (!isValid) {
      document.getElementById("post").disabled = true;
      document.getElementById("post").style.cursor = 'no-drop';
    }
    else {
      document.getElementById("post").disabled = false;
      document.getElementById("post").style.cursor = 'pointer';
    }
  }



  