
let todosContainer=document.getElementById("todoItemsContainer");

let todoList=[

    {
        title:"Learn Html"
    },
    {
        title:"Learn CSS"
    },
    {
        title:"Learn Js"
    }
]
function createAndAppendTodo(todo){
    let todoElement =document.createElement("li");
todoElement.classList.add("todo-item-container",  "d-flex", "flex-row")

let checkboxEl=document.createElement("input");
checkboxEl. type="checkbox";
checkboxEl.id="checkbox";
checkboxEl.classList.add("checkbox1");
todoItemsContainer.appendChild(checkboxEl)
let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(labelContainer);

let labelEl=document.createElement("label");
labelEl.classList.add("label1");
labelEl.setAttribute("for", "checkbox1");
labelEl.classList.add("checkbox-label");
labelEl.textContent=todo.text;
labelContainer.appendChild(labelEl);

let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("label-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(deleteIconContainer);
    let deleteIcon=document.getElementById("i");
    deleteIcon.classList.add("['fas', 'trash']");
deleteIconContainer.appendChild(deleteIcon);

}


for (todo of todoList){
   
    createAndAppendTodo(todo)
}



















// let todoItemsContainer = document.getElementById("todoItemsContainer");
// let todoList = [
// {
// text: "Learn HTML"
// },
// {
// text: "Learn CSS"
// },
// {
// text: "Learn JavaScript"
// }
// ];
// function createAndAppendTodo(todo) {
// let todoElement = document.createElement("li");
// todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
// todoItemsContainer.appendChild(todoElement);
// let inputElement = document.createElement("input");
// inputElement.type = "checkbox";
// inputElement.id = "checkboxInput";
// inputElement.classList.add("checkbox-input");
// todoElement.appendChild(inputElement);
// let labelContainer = document.createElement("div");
// labelContainer.classList.add("label-container", "d-flex", "flex-row");
// todoElement.appendChild(labelContainer);
// let labelElement = document.createElement("label");
// labelElement.setAttribute("for", "checkboxInput");
// labelElement.classList.add("checkbox-label");
// labelElement.textContent = todo.text;
// labelContainer.appendChild(labelElement);
// let deleteIconContainer = document.createElement("div");
// deleteIconContainer.classList.add("delete-icon-container");
// labelContainer.appendChild(deleteIconContainer);
// let deleteIcon = document.createElement("i");
// deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
// deleteIconContainer.appendChild(deleteIcon);
// }
// for (let todo of todoList) {
// createAndAppendTodo(todo);
// }