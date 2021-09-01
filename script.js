"use strict";

const add_btn = document.querySelector(".button__add");
const task = document.querySelector("#task__input");
const ul = document.querySelector(".main__body > ul");

let new_task = "";

// function - add each task when add button is clicked

function addList(e) {
  e.preventDefault();
  console.log("clicked");

  // clone template's elements
  const template = document.querySelector("#list__template");
  const dom_frag = template.content.cloneNode(true);

  // only update input value when the length is greater than 0
  if (new_task.length > 0) {
    // update each template element 1) checkbox, 2) task, 3) bin
    dom_frag.querySelector(".item__checklist").innerHTML =
      '<input type="checkbox">';
    dom_frag.querySelector(".item__name").textContent = new_task;
    dom_frag.querySelector(".item__bin").innerHTML =
      '<i class="far fa-trash-alt"></i>';
    // append dom frag to ul
    ul.append(dom_frag);

    // reset task value
    task.value = "";

    // grab all bin icons
    const bin_btn = Array.from(document.querySelectorAll(".item__bin"));

    // add eventlistener to remove the task when the bin is clicked
    bin_btn.forEach((e) =>
      e.addEventListener("click", () => {
        e.parentElement.remove();
        console.log("remove");
      })
    );
  }
  const check_btn = document.querySelector(".item__checklist").children[0];
  check_btn.addEventListener("click", () => {
    console.log(check_btn);
    // console.log(check_btn.parentElement);
    // console.log(e.parentElement.parentElement);
    check_btn.parentElement.parentElement.classList.toggle("finished");
  });

  // reset new_task value
  new_task = "";
}

// create function to get task value
function updateText() {
  new_task = task.value;
  console.log(new_task);
}

add_btn.addEventListener("click", addList);

task.addEventListener("change", updateText);
