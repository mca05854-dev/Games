const button = document.createElement("button");

button.textContent = "Click Me";

button.addEventListener("click", () => {
  alert("Hello!");
});

document.body.appendChild(button);
