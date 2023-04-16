// let username;

// setTimeout(() => {
//   username = window.prompt("Enter your name");

//   if (username) {
//     document.querySelector("h1").innerHTML = `Hello ${username} 👋`;
//     document.querySelector(
//       ".wrapper"
//     ).style.background = `linear-gradient(to right, #90ee90, #9198e5)`;
//   }
// }, 1200);

let amount;

setTimeout(() => {
  amount = window.prompt("How many numbers do you wish to count");
}, 100);

// amount = window.prompt("How many numbers do you wish to count");
// clearTimeout();

setTimeout(() => {
  if (amount) {
    document.querySelector("h1").remove();
  } else return;

  document.querySelector(
    ".wrapper"
  ).style.background = `linear-gradient(to right, #90ee90, #9198e5)`;
  for (i = 1; i <= amount; i++) {
    let number = `<p>${i}</p>`;
    setTimeout(() => {
      document
        .querySelector(".numbers")
        .insertAdjacentHTML("beforeend", number);
    }, i * 100);
  }
}, 200);
