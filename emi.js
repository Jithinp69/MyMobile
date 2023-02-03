var loanAmount = document.getElementById("loan-amount");
var interestRate = document.getElementById("interest");
var tenure = document.getElementById("tenure");

var rangeAmount = document.getElementById("range-amount");
var rangeInterestRate = document.getElementById("range-interest");
var rangeTenure = document.getElementById("range-tenure");

var loanAmt = document.getElementById("principal-amount");

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
  loanAmt.innerHTML = this.value;
  amount = loanAmt.innerHTML;
};


let p= rangeAmount.value;
let rate = rangeInterestRate.value;
let tnr = rangeTenure.value;
let n = tnr / 12;
let r = rate/12/100;

let emi = 



