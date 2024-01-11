let saved=JSON.parse(localStorage.getItem('myArray'));
const myArray=saved || [];
function2();
/*
myArray.forEach((todoObject)=>{
  const {name, dueDate} = todoObject;
  const todoHtml= `<div class="todo-name-div">${name}</div> <div class="due-date-div">${dueDate}</div> <button onclick='
  myArray.splice(${i}, ${1});
  //to update the html on the page:-
  function2();
  ' class="delete-button">Delete</button>`
  todoListHtml= todoListHtml + todoHtml
});                  */

function function2(){
  let todoListHtml= '';
  for(let i=0; i<myArray.length; i++)
    {
      const todoObject = myArray[i];
      const {name, dueDate} = todoObject;
      const todoHtml= `<div class="todo-name-div">${name}</div> <div class="due-date-div">${dueDate}</div> <button onclick='
      deleteTodo(${i});
      ' class="delete-button">Delete</button>`
      todoListHtml= todoListHtml + todoHtml
    }
  document.querySelector('.js-div')
  .innerHTML = todoListHtml;
};

function function1()
  {
    const inputElement=document.querySelector('.js-input');
    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;
    const todo=inputElement.value;
    myArray.push({name:todo, dueDate:dueDate});
    localStorage.setItem('myArray', JSON.stringify(myArray));
    inputElement.value='';
    function2();
  };

  function deleteTodo(index) {
    myArray.splice(index, 1);
    localStorage.setItem('myArray', JSON.stringify(myArray));
    function2();
  }







      