// DOM testing
test("Submitting a new task adds it to the list", () => {
  new_task = "Hello world";
  add_btn.click();
  equal(document.querySelector(".item__name").textContent, "Hello world");
  document.querySelector(".item__name").parentElement.remove();
});

test("Deleting an item removes it from the list", () => {
  new_task = "Goodbye, world!";
  add_btn.click();
  document.querySelector(".item__bin").click();
  equal(document.querySelector("ul").childElementCount, 0);
});

test("Checking an item off my list marks it as complete", () => {
  new_task = "I'm finished";
  add_btn.click();
  const checkbox = document.querySelector(".item__checklist").children[0];
  checkbox.click();
  equal(
    document.querySelector(".list__body--item").classList.contains("finished"),
    true
  );
  checkbox.parentElement.parentElement.remove();
});
