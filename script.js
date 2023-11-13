const button = document.getElementById("button");
const show = document.getElementById("list");

function shaw() {
  const input = document.getElementById("todo").value;
  console.log(input);
  const li = document.createElement("li");
  li.innerText = input;
  document.body.appendChild(li);
}
