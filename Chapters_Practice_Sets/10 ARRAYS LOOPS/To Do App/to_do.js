let todoList = [
    {item:undefined,
    dueDate:undefined
    } 
]; //object of todos
localStorage.setItem('todoList',JSON.stringify(todoList));
//displayItems(); //calls at first to show tasks

function addTodo() {
  let inputElement = document.querySelector("#todo_input");
  let dateElement = document.querySelector("#todo_date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem , dueDate: todoDate});  //pushes both date and todo 
  inputElement.value = ""; //makes the input bar blank after we press Add
  dateElement.value = ""; //makes the date bar blank after we press Add
  displayItems(); //calls when another task is added
}

function displayItems() {
  //picks up the total list and adds it to the <span></span>
  let containerElement = document.querySelector(".todo_container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    //accumulating all the items from todoList
    let {item , dueDate} = todoList[i]; //using de-structuring for acquisition of object properties
    newHtml += `
                <span>${item}</span>  
                <span>${dueDate}</span>
                <button class="btn_delete" onclick="todoList.splice(${i}, 1);
                displayItems();">Delete</button>
                `; //solely responsible for getting the text and displaying it on screen
  }
  containerElement.innerHTML = newHtml;
  localStorage.setItem('todoList', JSON.stringify(todoList));       //addition
}
