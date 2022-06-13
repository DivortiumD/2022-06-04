const timecheck_what_input = document.querySelector(".timecheck_input_input");
const timecheck_button_press = document.querySelector(".timecheck_button_button");

timecheck_button_press.addEventListener("click", function () {

    tc = document.querySelector(".timecheck2");

    if (timecheck_what_input.value.length < 4) {
        tc.innerHTML = "Oh, my, you are wrong! Re-enter your time!";
    }

    else if (timecheck_what_input.value.length > 7) {
        tc.innerHTML = "Oh, my, you are wrong! Re-enter your time!";
    }

    else if (timecheck_what_input.value.length > 3 || timecheck_what_input.length < 6) {
        tc.innerHTML = "This is military time";
    }

    else if (timecheck_what_input.value.length > 5 && timecheck_what_input.length < 8) {
        tc.innerHTML = "This is meridian time";
    }

});
