/*
event handler
ondragstart : 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생
ondragover : 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생
ondrop : 요소나 텍스트를 드래그 할 때 발생

*/

const $draggable = document.querySelector("#draggable");
const $dropzone = document.querySelector(".dropzone");

const onDrop = (e) => {
  const id = e.dataTransfer.getData("text");
  const $draggable = document.querySelector(`#${id}`);
  const $dropzone = e.target;

  $dropzone.appendChild($draggable);

  e.dataTransfer.clearData();
};

const onDragOver = (e) => {
  e.preventDefault();
};

const onDragStart = (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.currentTarget.style.backgroundColor = "dodgerblue";
};

$draggable.addEventListener("dragstart", onDragStart);
$dropzone.addEventListener("dragover", onDragOver);
$dropzone.addEventListener("drop", onDrop);
