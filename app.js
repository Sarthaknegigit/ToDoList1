//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', completeDelete);


//functions

function addTodo(event){

    event.preventDefault(); //prevents button from submitting 

    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //create check-marker
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //create trash
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv); 

    //clearing input after adding
    todoInput.value= "";
}

    function completeDelete(e){
        console.log(e.target);
        const item = e.target;


        //Delete

        if(item.classList[0] === 'trash-btn' )
        {
            const todo = item.parentElement;
            todo.remove();
        }

        //Complete Check

        if(item.classList[0] === 'complete-btn'){
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }


    };


     
    

