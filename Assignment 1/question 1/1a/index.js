let username;

setTimeout(() => {
  username = window.prompt("Enter your name");

  if (username) {
    document.querySelector("h1").innerHTML = `Hello ${username} 👋`;
    document.querySelector(
      ".wrapper"
    ).style.background = `linear-gradient(to right, #90ee90, #9198e5)`;
  }
}, 1200);
