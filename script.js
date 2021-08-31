'use strict';

// button click event

const add_btn = document.querySelector('.button__add');
const task = document.querySelector('#task__input');

let new_task = '';

function addList(e) {
  e.preventDefault();
  console.log('clicked');
}

function updateText() {
  new_task = task.value;
  console.log(new_task);
}

add_btn.addEventListener('click', addList);

task.addEventListener('change', updateText);
