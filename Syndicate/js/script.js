const createItem = (todo, id) => {
  let item = `
      <li key = '${id}' 
      class= ${todo.checked ? "taskItem-done" : "taskItem"} >
           ${todo.text} ${todo.date ? todo.date : ""}
           <img class = 'btn' src = "./Syndicate/img/check-circle-fill.svg" onclick="completeTodo(event)"/>
           <img class = 'btn' src = "./Syndicate/img/trash-fill.svg" onclick="deleteTodo(event)"/>
      </li>
  `;
  return item;
};

const renderTodoItem = () => {
  list.innerHTML = "";

  let items = [];

  todoArray.length ?
    todoArray.map((todo, id) => {
      items.unshift(createItem(todo, id));

      list.innerHTML = items.join("");

    }) :

    list.prepend('На данный момент нет задания')
};

renderTodoItem();