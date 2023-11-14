function shaw() {
  const input = document.getElementById("todo");
  const li = document.createElement("li");

  if (input.value === "") {
    //if input = "" then alert
    alert("Please write something");
  } else {
    li.innerText = input.value;
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.setAttribute("class", "del");

    //Adding btn to <li>
    li.appendChild(btn);

    //Adding <li> to <ul>
    const list = document.getElementById("list");
    list.appendChild(li);

    //Clearing the input bar after clicking on the button 'add'
    input.value = "";

    //Delete the <li> onclick
    btn.addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
}
