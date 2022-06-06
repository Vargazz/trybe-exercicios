function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
function addDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysNum = document.querySelector('#days');
    for (let i = 0; i < dezDaysList.length; i += 1){
        let days = dezDaysList[i];
        let daysNumMes = document.createElement('li');

        if(days === 24 | days === 31){
            daysNumMes.className = 'day holiday';
            daysNumMes.innerHTML = days;
            daysNum.appendChild(daysNumMes);
        }else if (days === 4 | days === 11 | days === 18){
            daysNumMes.className = 'day friday'
            daysNumMes.innerHTML = days;
            daysNum.appendChild(daysNumMes);
        }else if (days === 25){
            daysNumMes.className = 'day holiday friday'
            daysNumMes.innerHTML = days;
            daysNum.appendChild(daysNumMes);
        }else{
            daysNumMes.className = 'day'
            daysNumMes.innerHTML = days;
            daysNum.appendChild(daysNumMes);
        }
    }
};

addDays();

function holydaysB(buttonName){
    let holidayButton = document.createElement('button');
    let parentButton = document.querySelector('.buttons-container');

    holidayButton.innerHTML = buttonName
    holidayButton.id = 'btn-holiday'
    parentButton.appendChild(holidayButton);

}

holydaysB('Feriados');

function buttonColorH() {
    let button = document.querySelector('#btn-holiday');
    let holiday = document.querySelectorAll('.holiday')
   
  
    button.addEventListener('click', function(event) {
      for (let i = 0; i < holiday.length; i += 1) {
        if (holiday[i].style.backgroundColor === 'rgb(238, 238, 238)') {
          holiday[i].style.backgroundColor ='rgb(0, 128, 0)';
          holiday[i].style.color = 'white';
        } else {
          holiday[i].style.backgroundColor = 'rgb(238, 238, 238)';
          holiday[i].style.color = '#777'
        }
      }
    })
  };

  buttonColorH();

  function fridayB(buttonName){
      let fridayButtom = document.createElement('button');
      let parent = document.querySelector('.buttons-container');

      fridayButtom.innerHTML = buttonName
      fridayButtom.id = 'btn-friday'
      parent.appendChild(fridayButtom);
  }

  fridayB('Sexta-feira');

  function buttonF(arrayFriday){
    let buttonF = document.querySelector('#btn-friday');
    let friday = document.querySelectorAll('.friday');
    let texto = 'Sextou';

    buttonF.addEventListener('click', function(event){
      for (let i = 0; i < friday.length; i += 1){
        if (friday[i].innerHTML !== texto ){
         friday[i].innerHTML = texto

        } else {
          friday[i].innerHTML = arrayFriday[i];
        }
      }
    })
  };
let fridayDez = [4, 11, 18, 25]

  buttonF(fridayDez);

function zoomDays(){
  let zoom = document.querySelector('#days')
  
  zoom.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '40px';
  }
    
  )
}

zoomDays();

function noZoom(){
  let noZoom = document.querySelector('#days')

  noZoom.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px'
  })
}

noZoom();

function addTasks(tarefa){
  let task = document.createElement('span')
  let taskId = document.querySelector('.my-tasks')

  task.innerHTML = tarefa
  taskId.appendChild(task)

}
addTasks('Projeto:');

function taskColor(color){
  let tasks = document.querySelector('.my-tasks');
  let colorTask = document.createElement('div');
  
  colorTask.className = 'task'
  colorTask.style.backgroundColor = color
  tasks.appendChild(colorTask);
}

taskColor('green');

function selectedTask (){
  let selecionar = document.getElementsByClassName('task selected');
  let tarefa = document.querySelector('.task');
  
  tarefa.addEventListener('click', function(event){
    if(selecionar.length === 0 ){
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}

selectedTask();

function selectedColor () {
  let selecionar = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let div = document.querySelector('.task');
  let corTarefa = div.style.backgroundColor;

  days.addEventListener('click', function(event){
    let eventColor = event.target.style.color;
    if(selecionar.length > 0 && eventColor !== corTarefa){
      let color = selecionar[0].style.backgroundColor
      event.target.style.color = color;
    }else if (eventColor === corTarefa && selecionar.length !== 0){
      event.target.style.color = 'rgb(119,119,119)'
    }
  })
}

selectedColor();