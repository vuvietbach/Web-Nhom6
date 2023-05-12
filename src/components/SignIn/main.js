let isValid1 ;
let isValid2 ;

export var isValid = false;

export function isValidName() {
  const name = document.querySelector(".name-input").value;
  if (name === "") {
    document.querySelector(".validate-account-name").innerHTML =
      "Vui lòng nhập tên tài khoản";
    isValid1 = false;
  } else {
    document.querySelector(".validate-account-name").innerHTML = "";
    isValid1 = true;
  }
  isValid = isValid1 && isValid2
}

export function isValidPassword() {
  const input = document.querySelector(".password-input").value;
  if (input.length < 8 || input.length > 15) {
    document.querySelector(".validate-password").innerHTML =
      "Vui lòng nhập mật khẩu từ 8-15 kí tự";
    isValid2 = false;
  } else {
    document.querySelector(".validate-password").innerHTML = "";
    isValid2= true;
  }
  isValid = isValid1 && isValid2
}

export function post(e) {
  e.preventDefault();

}

export function isPost(){
  isValid = isValid1&&isValid2;
  if (!isValid) {
    document.getElementById("post").disabled = true;
    document.getElementById("post").style.cursor = 'no-drop';
  }
  else {
    document.getElementById("post").disabled = false;
    document.getElementById("post").style.cursor = 'pointer';
  }
}
