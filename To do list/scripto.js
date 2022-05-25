const li = document.getElementById("li");
const form = document.querySelector("form");
console.log(form);
// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (text.value.length >= 2) {
    list.innerHTML += `
    <li>${text.value}</li>`;
    text.value = "";
    storeLoc();
  } else {
    alert("Insérez un minimum de 2 caractères");
  }
});
function GetTodo() {
  if (window.localStorage.toDoList) {
    list.innerHTML = window.localStorage.toDoList;
  } else {
    list.innerHTML = "<li>Insérer vos ToDoList</li>";
  }
}
GetTodo();
function storeLoc() {
  window.localStorage.toDoList = list.innerHTML;
}

list.addEventListener("click", (e) => {
  const li = e.target;
  if (li.classList.contains("checked")) {
    li.remove();
  } else {
    li.classList.add("checked");
    li.innerHTML += `(suprimer)`;
    storeLoc();
  }
});
