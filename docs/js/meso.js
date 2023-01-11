let count, drop, meso, level, word;
let cal = document.querySelector("#cal");
let fin = document.querySelector("#final");

cal.addEventListener("click", (event) => {
  count = document.querySelector("#count");
  drop = document.querySelector("#drop");
  meso = document.querySelector("#meso");
  level = document.querySelector("#level");

  let price = count.value * level.value * 7.5 * (1 + meso.value / 100) * 2;
  if (drop.value < 67) {
    price = price * 0.6 * (1 + drop.value / 100);
    word = `<div id="final" class="text-center">재획당 얻는 메소는 ${price
      .toString()
      .replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      )}메소 입니다.</div><div class="text-center">※아획이 66이하라 정확하지 않습니다</div>`;
    fin.innerHTML = word;
  } else {
    word = `<div id="final" class="text-center">재획당 얻는 메소는 ${price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}메소 입니다.</div>`;
    fin.innerHTML = word;
  }
});
