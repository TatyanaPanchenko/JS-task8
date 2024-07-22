const { formList } = document.forms;
const { taskFirst, taskSecond } = formList.elements;
const selectEl = document.querySelector("select");
const getList = document.querySelector(".get-list");
const arr = [];

formList.addEventListener("submit", (event) => {
  event.preventDefault();
  if (taskFirst.value === "" || taskSecond.value === "") return;
  const tasksData = {
    firstTask: taskFirst.value,
    secondTask: taskSecond.value,
    quantity: selectEl.value,
  };
  arr.push(tasksData);
  formList.reset();
  createPage(arr);
});

function createPage(arr) {
  getList.innerHTML = "";
  arr.forEach((element) => {
    const list = document.createElement("div");
    list.classList.add("item");
    list.innerHTML = `
<h2>Todo list</h2>
    <div>First task:</div><div>${element.firstTask}</div>
    <div>Second task:</div><div>${element.secondTask}</div>
<div>Quantity:</div><div>${element.quantity}</div>
    `;
    getList.append(list);
  });
}
