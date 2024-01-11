const myArray=[ ];

function function2(){
  let todoListHtml= '';

  // looping through the array using the .forEach() method:-
  myArray.forEach((todoObject, index)=>{
    const {name, dueDate} = todoObject;
    const todoHtml= `<div class="todo-name-div">${name}</div> <div class="due-date-div">${dueDate}</div> 
    <button class="delete-button js-delete-button">Delete</button>`
    todoListHtml= todoListHtml + todoHtml
  });

  document.querySelector('.js-div')
   .innerHTML = todoListHtml;

  // after we have displayed the HTML on the page we will do:-
  document.querySelectorAll('.js-delete-button').forEach((value, index)=>{
    value.addEventListener('click', ()=>{
      myArray.splice(index, 1);
      function2();
    })
  });  
};

function function1()
  {
    const inputElement=document.querySelector('.js-input');
    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;
    const todo=inputElement.value;
    myArray.push({name:todo, dueDate:dueDate});

    inputElement.value='';
    function2();
  };

  document.querySelector('.js-create-button')
    .addEventListener('click', ()=>{
      function1();
    });

  document.body.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
      function1();
    }
  });

  
  document.body.addEventListener('keydown', (event)=>{
    if(event.key==='Delete'){
      myArray.splice(0, 1);
      function2();
    }
  });
      