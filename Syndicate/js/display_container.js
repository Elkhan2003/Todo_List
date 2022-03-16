// creating the main container
let main = document.createElement("main");
main.classList.add("container");
// prepending the into body
document.body.prepend(main);

// creating greating text

let projectName = document.createElement("h1");
projectName.innerHTML = "Let's do it";
main.append(projectName);

let listBlock = document.createElement("div");
listBlock.className = "mainBlock";
main.append(listBlock);

let firstDiv = document.createElement("div");
listBlock.append(firstDiv);

let textIn = document.createElement("input");
textIn.className = "textIn";
textIn.setAttribute("placeholder", "Gonna do...");
firstDiv.append(textIn);

let setDate = document.createElement("input");
setDate.className = "setDate"
setDate.setAttribute("type", "date");
firstDiv.append(setDate);

let addBtn = document.createElement("button");
addBtn.innerHTML = "Add";
addBtn.id = "addBtn";
firstDiv.append(addBtn);

// creating ul tag
let list = document.createElement("ul");
listBlock.append(list);

let todoArray =
  localStorage.getItem("todos") == null
    ? []
    : [...JSON.parse(localStorage.getItem("todos"))];

addBtn.addEventListener("click", addTodo);