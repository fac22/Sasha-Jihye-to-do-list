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

  if (new_task.length > 0) {
    dom_frag.querySelector('.item__checklist').innerHTML =
      '<input type="checkbox">';
    dom_frag.querySelector('.item__name').textContent = new_task;
    dom_frag.querySelector('.item__bin').innerHTML =
      '<i class="far fa-trash-alt"></i>';
    ul.append(dom_frag);
    task.value = '';

    const bin_btn = Array.from(document.querySelectorAll('.item__bin'));

    bin_btn.forEach((e) =>
      e.addEventListener('click', () => {
        e.parentElement.remove();
        console.log('remove');
      })
    );
  }

  new_task = '';
}

function updateText() {
  new_task = task.value;
  console.log(new_task);
}

add_btn.addEventListener('click', addList);

task.addEventListener('change', updateText);
