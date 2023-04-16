formEl = document.querySelector("form");
labelsEl = document.querySelectorAll("label");
inputsEl = document.querySelectorAll(".input");
textareaEl = document.querySelector("textarea");
submitBtn = document.querySelector("button");

console.log(inputsEl);

let valid = false;
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

inputsEl.forEach((el, i) => {
  el.addEventListener("input", () => {
    document.querySelectorAll(".warning").forEach((el) => {
      el.style.display = "none";
    });

    console.log(el["type"]);

    if (!el.value) {
      document.querySelectorAll(".warning")[i].style.display = "initial";

      if (el["type"] == "email") {
        document.querySelectorAll(".warning")[i].innerHTML =
          "This field cannot be empty";
        document.querySelectorAll(".warning")[i].style.display = "initial";
        console.log("hello");
      }
    } else {
      document.querySelectorAll(".warning")[i].style.display = "none";

      if (
        //prettier-ignore
        el['type'] == 'email' && !el.value.match(validRegex)
      ) {
        document.querySelectorAll(".warning")[i].innerHTML =
          "Not a valid email";
        document.querySelectorAll(".warning")[i].style.display = "initial";
        console.log("hello");
      }
    }
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  for (i = 0; i < inputsEl.length; i++) {
    console.log(inputsEl[i]);

    if (!inputsEl[i].value) {
      valid = false;
      break;
    } else {
      valid = true;
    }
  }

  if (valid == false) {
    window.alert("one or more value is invalid");
  } else {
    window.alert("form submitted");
    inputsEl.forEach((el) => (el.value = ""));
  }
});
