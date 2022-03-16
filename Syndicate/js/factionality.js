const addTodo = (e) => {
  let newTask = textIn.value;
  let date = setDate.value;

  if (newTask != "") {
    todoArray.push({
      text: newTask,
      checked: false,
      date,
    });

    localStorage.setItem("todos", JSON.stringify(todoArray));
    renderTodoItem();
    textIn.value = "";
    setDate.value = "";
  }
};

const completeTodo = (e) => {
  let todoTemporary = [...todoArray];

  let index = parseInt(e.target.parentNode.getAttribute('key'));

  let objElement = todoTemporary[index].checked;

  todoTemporary[index].checked = !objElement;

  localStorage.setItem("todos", JSON.stringify(todoTemporary));

  let isDone = e.currentTarget.parentNode.classList.contains("taskItem-done");

  if (isDone) {
    e.currentTarget.parentNode.classList.remove("taskItem-done")
    e.currentTarget.parentNode.classList.add("taskItem");
  } else {
    e.currentTarget.parentNode.classList.add("taskItem-done")
    e.currentTarget.parentNode.classList.remove("taskItem");
  }
};
const deleteTodo = (e) => {
  let index = e.target.parentNode.id;

  todoArray.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todoArray));
  console.log(todoArray);

  renderTodoItem();
};