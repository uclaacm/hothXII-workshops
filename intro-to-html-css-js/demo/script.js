const paragraph = document.createElement("p");
paragraph.textContent = "I was dynamically created";

const button = document.getElementById("myButton");
button.onclick = function () {
  document.body.appendChild(paragraph);
};
