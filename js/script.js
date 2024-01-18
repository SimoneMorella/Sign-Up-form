let errorMsgs = document.querySelectorAll(".error");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#confirm");
let phoneNum = document.querySelector("#phone");

phoneNum.addEventListener("input", function() {
    let notADigitDetected = /[^0-9]/.test(this.value);
    console.log(this.value);
    errorMsgs[1].style.display = notADigitDetected ? 'block' : 'none';
})

password.addEventListener("input", function() {
    let lengthDetected = this.value.length < 8;
    errorMsgs[2].style.display = lengthDetected ? 'block' : 'none';
})

passwordConfirm.addEventListener("input", function() {
    let passwordCheck = password.value !== this.value;
    errorMsgs[3].style.display = passwordCheck ? 'block' : 'none';
})
