'use strict';

// button click event

const add_btn = document.querySelector('.button__add');

function addList(e) {
  e.preventDefault();
  console.log('clicked');
}

add_btn.addEventListener('click', addList);
