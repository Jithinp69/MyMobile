var qty = document.getElementById("total-qty");

let sum = 0;

let cost = 55000;

var incClick = document.getElementById("qtyinc");
var decClick = document.getElementById("qtydec");

var total = document.getElementById("total-price");

incClick.onclick = function () {
  sum += 1;
  qty.innerHTML = sum;
  total.innerHTML = sum * cost;
};

decClick.onclick = () => {
  if (sum > 0) {
    sum -= 1;
    qty.innerHTML = sum;
    total.innerHTML = sum * cost;
  }
};
