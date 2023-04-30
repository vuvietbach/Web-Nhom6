

let isValid = true;

function isValidName() {
  const name = document.querySelector(".name-input").value;
  if (name === "") {
    document.querySelector(".validate-account-name").innerHTML =
      "Vui lòng nhập tên tài khoản";
    isValid = false;
  } else {
    document.querySelector(".validate-account-name").innerHTML = "";
    isValid = true;
  }
}

function isValidPassword() {
  const input = document.querySelector(".password-input").value;
  if (input.length < 8 || input.length > 15) {
    document.querySelector(".validate-password").innerHTML =
      "Vui lòng nhập mật khẩu từ 8-15 kí tự";
    isValid = false;
  } else {
    document.querySelector(".validate-password").innerHTML = "";
    isValid = true;
  }
}

export function post(e) {
  e.preventDefault();
  isValidName();
  isValidPassword();
  if (!isValid) {
    // do something
  }
}