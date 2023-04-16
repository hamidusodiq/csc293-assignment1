let amount;
let sum = 0;

let i = 1;

setTimeout(() => {
  amount = window.prompt("How many Integers do you wish to add");

  console.log(typeof amount);

  if (!amount) {
    return;
  }

  while (i <= amount) {
    let div = `
      <input type="number" placeholder = "number ${i}" class='number' required/>
    `;

    document.querySelector(".numbers").insertAdjacentHTML("beforeend", div);
    i++;
  }

  let submit = `
  <div class="answer">
    <button  class='add'>Add</button>
  </div>
  `;

  document.querySelector(".numbers").insertAdjacentHTML("afterend", submit);

  if (document.querySelector(".add")) {
    document.querySelector(".add").addEventListener("click", function (e) {
      document.querySelector(
        ".wrapper"
      ).style.background = `linear-gradient(to right, #90ee90, #9198e5)`;
      e.preventDefault();

      sum = 0;

      document.querySelectorAll(".number").forEach((num) => {
        console.log(num.value);

        sum += Number(num.value);
        console.log(sum);
      });

      document.querySelector("h1").textContent = `Result = ${sum}`;
    });
  }
}, 100);

setTimeout(() => {}, 200);
