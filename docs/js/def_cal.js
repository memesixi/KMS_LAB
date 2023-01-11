let a;
let b;
let f_def = document.querySelector("#f-def");
let cal = document.querySelector("#cal");

cal.addEventListener("click", (event) => {
  a = document.querySelector("#input-def");
  b = document.querySelector("#p-def");
  let result = 1 - (1 - a.value / 100) * (1 - b.value / 100);
  let word = `<div id="f-def" class="text-center">최종방무는 ${
    result * 100
  }%입니다.</div>`;
  f_def.innerHTML = word;
});
