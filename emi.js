var loanAmount = document.getElementById("loan-amount");
var interestRate = document.getElementById("interest");
var tenure = document.getElementById("tenure");
var pa = document.getElementById("principal-amount");

var rangeAmount = document.getElementById("range-amount");
var rangeInterestRate = document.getElementById("range-interest");
var rangeTenure = document.getElementById("range-tenure");

loanAmount.innerHTML = rangeAmount.value;
interestRate.innerHTML = rangeInterestRate.value;
tenure.innerHTML = rangeTenure.value;

rangeInterestRate.oninput = function () {
  interestRate.innerHTML = this.value;
};
rangeTenure.oninput = function () {
  tenure.innerHTML = this.value;
};
rangeAmount.oninput = function () {
  loanAmount.innerHTML = this.value;
  // pa.innerHTML = this.value;
};

let getValue = document.querySelector("button");

function getData() {
  let p = loanAmount.innerHTML;
  let r = interestRate.innerHTML / 12 / 100;
  let n = tenure.innerHTML * 12;

  let emi;

  pa.innerHTML = p;

  function calcEMI() {
    return Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }

  emi = calcEMI();

  function totalInterest() {
    return emi * n - p;
  }

  function total() {
    return emi * n;
  }

  document.getElementById("emi").innerHTML = calcEMI();
  document.getElementById("interest-rate").innerHTML = totalInterest();
  document.getElementById("total-amount").innerHTML = total();
}

getValue.addEventListener("click", getData);

// console.log(getData());
