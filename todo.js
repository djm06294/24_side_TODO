const todo_list = document.querySelector('#todo-list');
const last_ele = document.querySelector('#ele');
const text_input = document.querySelector('#text-input');
const add_todo_btn = document.querySelector('#add-todo-btn');


add_todo_btn.addEventListener('click', ()=>{
    addTodo();
    text_input.value = "";
})

text_input.addEventListener('keyup', function(event) {
    if(event.keyCode===13) {
        addTodo();
        text_input.value = "";
    }
})

function addTodo() {
    let text = text_input.value;
    console.log(`todo 추가: ${text}`);

    const todo = document.createElement("li");
    todo.append(text);
    todo_list.insertBefore(todo, last_ele); 
}