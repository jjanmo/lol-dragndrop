const todos = document.querySelectorAll(".todo");
const $doneContainer = document.querySelector(".done-container");

const handleDrop = (e) => {
  const id = e.dataTransfer.getData("text");
  const $draggedElement = document.querySelector(`#${id}`);
  $draggedElement.style.backgroundColor = "#ff7979";
  $doneContainer.appendChild($draggedElement);

  e.dataTransfer.clearData();
};

const handleDragover = (e) => {
  e.preventDefault();
};

const handleDragstart = (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.effectAllowed = "copy";
  e.currentTarget.style.backgroundColor = "#f39c12";
};

todos.forEach(($todo) => {
  $todo.addEventListener("dragstart", handleDragstart);
});

$doneContainer.addEventListener("drop", handleDrop);
$doneContainer.addEventListener("dragover", handleDragover);
