'use strict';

// button click event

const add_btn = document.querySelector('.button__add');
const task = document.querySelector('#task__input');
const ul = document.querySelector('.main__body > ul');

let new_task = '';

function addList(e) {
  e.preventDefault();
  console.log('clicked');

  const template = document.querySelector('#list__template');
  const dom_frag = template.content.cloneNode(true);

  dom_frag.querySelector('.item__checklist').innerHTML =
    '<input type="checkbox">';
  dom_frag.querySelector('.item__name').textContent = new_task;
  dom_frag.querySelector('.item__bin').innerHTML =
    '<i class="far fa-trash-alt"></i>';
  ul.append(dom_frag);
  task.value = '';
}

function updateText() {
  new_task = task.value;
  console.log(new_task);
}

add_btn.addEventListener('click', addList);

task.addEventListener('change', updateText);
